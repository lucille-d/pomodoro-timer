'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

app.on('ready', createWindow);

var mainWindow = null;

function createWindow(){
    mainWindow = new BrowserWindow({
        width: 300,
        height: 200,
        resizable: false,
        title: 'Pomodoro Timer',
        autoHideMenuBar: true
    });

    mainWindow.loadURL('file://' + __dirname + '/index.html');
};
