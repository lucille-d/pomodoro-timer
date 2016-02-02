'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

//window settings
const WINDOW_SETTINGS = {
    WIDTH : 300,
    HEIGHT : 200
};

app.on('ready', createWindow);

var mainWindow = null;

function createWindow(){
    //get screen size
    var electronScreen = electron.screen;
    var size = electronScreen.getPrimaryDisplay().workAreaSize;

    //create window in bottom right corner
    mainWindow = new BrowserWindow({
        x: size.width - WINDOW_SETTINGS.WIDTH,
        y: size.height - WINDOW_SETTINGS.HEIGHT,
        width: WINDOW_SETTINGS.WIDTH,
        height: WINDOW_SETTINGS.HEIGHT,
        resizable: false,
        title: 'Pomodoro Timer',
        autoHideMenuBar: true
    });

    mainWindow.loadURL('file://' + __dirname + '/app/index.html');
};
