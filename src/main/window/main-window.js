import { BrowserWindow } from 'electron'
//import CommonUtils from "../shared/common-utils";

const winURL = process.env.NODE_ENV === 'development' ?
    `http://localhost:9080` :
    `file://${__dirname}/index.html`

class MainWindow {
    constructor() {
        /**
         * Initial window options
         */
        // const appicon = CommonUtils.icon(64);
        let window = new BrowserWindow({
            height: 800,
            width: 1400,
            useContentSize: true,
            webPreferences: {
                nodeIntegration: true,
                nodeIntegrationInWorker: true
            },
            //   icon: appicon,
        })

        window.loadURL(winURL)
            // window.on('closed', () => {
            //   window = null
            // })
        window.webContents.closeDevTools();
        this.mainWindow = window;
    }

    get() {
        return this.mainWindow;
    }

    static create() {
        return new MainWindow().get();
    }
}

export default MainWindow;