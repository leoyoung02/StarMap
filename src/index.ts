import './css/style.css';
import { GameBoot } from './game/scenes/GameBoot';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { default as App } from '@/App.vue';
import { ClientService, WalletService } from '@/services';

import { default as anime } from 'animejs';

// @ts-ignore
anime.suspendWhenDocumentHidden = false;

window.addEventListener('DOMContentLoaded', () => {
  const app = createApp(App);
  const store = createPinia();

  store.use(ClientService.StorePlugin);
  store.use(WalletService.StorePlugin);

  app.use(ClientService.VuePlugin)
  app.use(WalletService.VuePlugin)
  app.use(store);

  app.mount('#gui')

  // threejs
  let boot = new GameBoot();
  boot.init();
});
