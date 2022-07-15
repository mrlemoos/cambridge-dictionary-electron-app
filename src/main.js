const electron = require("electron");

const { app, BrowserWindow } = electron;

function main() {
  app.on("ready", () => {
    const mainWindow = new BrowserWindow({
      minWidth: 600,
      minHeight: 600,
      webPreferences: {
        nodeIntegration: true,
        nodeIntegrationInWorker: true,
        nodeIntegrationInSubFrames: true,
        sandbox: true,
      },
      titleBarStyle: "hidden",
    });

    mainWindow.loadFile("src/index.html");
  });
}

main();
