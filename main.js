const {app, BrowserWindow, webContents} = require('electron');

let mainWindow;

app.on('window-all-closed', function() {
  app.quit();
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 1024, height: 768});
  mainWindow.loadURL('file://' + __dirname + '/browser.html');
  mainWindow.maximize()

  mainWindow.on('resize', () => {
    const [width, height] = mainWindow.getContentSize();
    for (let wc of webContents.getAllWebContents()) {
      if (wc.hostWebContents && wc.hostWebContents.id == mainWindow.webContents.id) {
        // wc.setGuestSize(width, height);
      }
    }
  });


});
