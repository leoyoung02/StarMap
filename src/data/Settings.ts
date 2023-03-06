﻿import * as datGui from "dat.gui";

/**
 * Global parameters
 */
export class Settings {

    static isDebugMode = false;
    static domCanvasParent: HTMLElement = null;
    static domTouchParent: HTMLElement = null;
    static domGuiParent: HTMLElement = null;
    static domRenderer: HTMLElement = null;
    static assetsPath = './assets/';

    // utils
    static datGui: datGui.GUI;

    // galaxy default data and varaibled
    static galaxyData = {
        starsCount: 3000,
        blinkStarsCount: 1000,
        blinkDurMin: 1,
        blinkDurMax: 2,
        startAngle: 0.7,
        endAngle: 3.6,
        startOffsetXY: 2.2,
        endOffsetXY: 0.8,
        startOffsetH: 4,
        endOffsetH: 1,
        k: 0.3,
        alphaMin: 1,
        alphaMax: 1,
        scaleMin: 1,
        scaleMax: 1
    };

    static skyData = {
        starsCount: 500,
        radiusMin: 30,
        radiusMax: 1000,
        scaleMin: 3,
        scaleMax: 30,
        starSize: 1.5,
        starAlpha: 0.8,

        galaxiesCount: 5,
        galaxiesSizeMin: 1000,
        galaxiesSizeMax: 2000
    };

    // game
    static isCameraAutoRotate = false;
    static cameraAutoRotateSpeed = -0.05;


    static INIT_FULL_SCREEN = false;

    static USE_DEVICE_PIXEL_RATIO = true;
    static BG_COLOR = 0x333333;

    // SKYBOX_PATH: 'textures/skybox/lightblue/1024/',
    // FOG_TYPE: 0, // 0 - 'fog', 1 - 'exp'
    static AA_TYPE = 1; // 0 - none, 1 - FXAA, 2 - SMAA

    static CAMERA = {
        near: 0.5,
        far: 15000
    };
    static CAM_DAMPING_FACTOR = 0.025;

    // SKY_BOX_SIZE: 8000,

    static SMALL_GALAXIES_SPRITE_COUNT = 5;
    static FAR_GALAXIES_RADIUS_MIN = 3000;
    static FAR_GALAXIES_RADIUS_MAX = 5000;

    static GALAXY_CENTER_COLOR = 0xd3ccff;
    static GALAXY_CENTER_SCALE = 150;
    static GALAXY_CENTER_SCALE_2 = 150 * 0.8;

    // audio
    // static musicVolume = 1;
    // static sfxVolume = 1;

    // debug
    static debugAxeHelperOn = false;
    
};