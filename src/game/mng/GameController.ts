import { Settings } from "~/game/data/Settings";
import { ServerStarData } from "~/game/data/Types";
import { FrontEvents } from "~/game/events/FrontEvents";
import { ILogger } from "~/game/interfaces/ILogger";
import { Galaxy } from "~/game/scenes/Galaxy";
import { LogMng } from "../utils/LogMng";


export class GameController implements ILogger {
    private galaxy: Galaxy;

    constructor() {
        FrontEvents.onLeftPanelGalaxyClick.add(this.onLeftPanelGalaxyClick, this);
        FrontEvents.onBotPanelPhantomClick.add(this.onBotPanelPhantomClick, this);
        FrontEvents.onBotPanelRealClick.add(this.onBotPanelRealClick, this);
        FrontEvents.onStarCreated.add(this.onStarCreated, this);
        FrontEvents.onStarUpdated.add(this.onStarUpdated, this);
    }

    logDebug(aMsg: string, aData?: any): void {
        LogMng.debug(`GameController: ${aMsg}`, aData);
    }
    logWarn(aMsg: string, aData?: any): void {
        LogMng.warn(`GameController: ${aMsg}`, aData);
    }
    logError(aMsg: string, aData?: any): void {
        LogMng.error(`GameController: ${aMsg}`, aData);
    }

    private onLeftPanelGalaxyClick() {
        this.logDebug(`onLeftPanelGalaxyClick...`);
        this.galaxy?.gotoGalaxy();
    }

    private onBotPanelPhantomClick() {
        this.logDebug(`onBotPanelPhantomClick...`);
        this.galaxy?.openPhantomMode();
    }

    private onBotPanelRealClick() {
        this.logDebug(`onBotPanelRealClick...`);
        this.galaxy?.openRealMode();
    }

    private onStarCreated(aStarData: ServerStarData) {
        this.galaxy?.onStarCreated(aStarData);
    }

    private onStarUpdated(aStarData: ServerStarData) {
        this.galaxy?.onStarUpdated(aStarData);
    }

    initGalaxy(aParams: {
        render, scene, camera
    }) {
        // SCENES
        this.galaxy = new Galaxy({
            render: aParams.render,
            scene: aParams.scene,
            camera: aParams.camera
        });
        this.galaxy.init();
        // DEBUG GUI
        if (Settings.isDebugMode) {
            this.galaxy.initDebugGui();
        }
    }

    update(dt: number) {
        if (this.galaxy) this.galaxy.update(dt);
    }

    

}