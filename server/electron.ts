import { app as ElectronApp, BrowserWindow, Menu } from 'electron';
import ServerApp from './src/index';

const path = require('path');
const isDev = require('electron-is-dev');

let mainWindow: BrowserWindow | null = null;

require('update-electron-app')({
  repo: 'dsumer/rock-mock',
  updateInterval: '1 hour'
});

Menu.setApplicationMenu(null);

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 680,
    webPreferences: { nodeIntegration: true }
  });
  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );
  mainWindow.on('closed', () => (mainWindow = null));
}

ElectronApp.on('ready', () => {
  if (!isDev) {
    ServerApp.listen(4141, () => {
      console.log("it's the solid rock for providing a mock.");
    });
  }

  createWindow();
});

ElectronApp.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    ElectronApp.quit();
  }
});

ElectronApp.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
