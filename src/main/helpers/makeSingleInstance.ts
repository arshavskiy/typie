import {app} from 'electron';
import AppController from "../controllers/AppController";
import AbstractWindowController from "../controllers/AbstractWindowController";

export default class MakeSingleInstance
{
    public static init(mainWindow: AbstractWindowController)
    {
        let tmp = new MakeSingleInstance();
        tmp.makeSingle(mainWindow);
    }
    public makeSingle(mainWindow: AbstractWindowController)
    {
        if (app.makeSingleInstance(() => {
                // Someone tried to run a second instance, we should focus our window.
                if (mainWindow.isExist) {
                    if (!mainWindow.isVisible) {
                        mainWindow.show();
                    }
                    mainWindow.focus();
                }
            })) {
            AppController.quit();
        }
    }
}