import { Settings } from "~/data/Settings";
import { FrontEvents } from "~/events/FrontEvents";
import { ILogger } from "~/interfaces/ILogger";
import { Galaxy } from "~/scenes/Galaxy";
import { FSM } from "~/states/FSM";
import { LogMng } from "~/utils/LogMng";


export class GameController implements ILogger {
    private _fsm: FSM;
    private galaxy: Galaxy;

    constructor() {
        FrontEvents.onBotPanelPhantomClick.add(this.onBotPanelPhantomClick, this);
        FrontEvents.onBotPanelRealClick.add(this.onBotPanelRealClick, this);
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

    private onBotPanelPhantomClick() {
        this.logDebug(`onBotPanelPhantomClick...`);
        this.galaxy?.openPhantomMode();
    }

    private onBotPanelRealClick() {
        this.logDebug(`onBotPanelRealClick...`);
        this.galaxy?.openRealMode();
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