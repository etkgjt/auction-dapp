import {realtimeDB} from "./database"
import {currentDate} from "../utility/datetime";

const refSuperSchoolMemoryUserDeviceLogin = "SuperSchoolMemory/UserDevicesLogin";

export default class UserDeviceLogin {
    static getRef = () => {
        return refSuperSchoolMemoryUserDeviceLogin;
    }
    static registerListenValueChange = (user_id, infoDevice, fnListen) => {
        realtimeDB
            .ref(`/${refSuperSchoolMemoryUserDeviceLogin}/${user_id}/LOGIN`)
            .on('value', snapshot => {
                if(snapshot.val() === null){
                    realtimeDB
                        .ref(`/${refSuperSchoolMemoryUserDeviceLogin}/${user_id}/LOGIN`)
                        .set({
                            ...infoDevice,
                            login_date_time: new Date().getTime(),
                            login_date_string: currentDate().format("HH:MM:ss, DD/MM/YYYY")
                        })
                }
                fnListen(snapshot);
            })
    }

    static unRegisterListenValueChange = (user_id, infoDevice) => {
        realtimeDB.ref(`/${refSuperSchoolMemoryUserDeviceLogin}/${user_id}/LOGIN`).off('value');
    }

    static loginSuccess = (user_id, infoDevice) => {
        realtimeDB
            .ref(`/${refSuperSchoolMemoryUserDeviceLogin}/${user_id}/LOGIN`)
            .set({
                ...infoDevice,
                login_date_time: new Date().getTime(),
                login_date_string: currentDate().format("HH:MM:ss, DD/MM/YYYY")
            })
        // realtimeDB
        //     .ref(`/${refSuperSchoolMemoryUserDeviceLogin}/${user_id}/${infoDevice.unique_id}`)
        //     .set({
        //         ...infoDevice,
        //         login_date_time: new Date().getTime(),
        //         login_date_string: currentDate().format("HH:MM:ss, DD/MM/YYYY")
        //     })
    }

    static logoutSuccess = (user_id, infoDevice, dontClearLogin) => {
        if(!dontClearLogin){
            realtimeDB
                .ref(`/${refSuperSchoolMemoryUserDeviceLogin}/${user_id}/LOGIN`)
                .remove()
        }
        realtimeDB.ref(`/${refSuperSchoolMemoryUserDeviceLogin}/${user_id}/LOGIN`).off('value');
    }
}
