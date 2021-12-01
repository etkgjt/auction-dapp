import { realtimeDB, firestoreDB } from "./database"

const refUsers = "users"

export default class Users {
  static login = async (
    wallet_address,
    onCreateNewUser = () => {},
    onError = () => {},
    onLoginSuccess = () => {}
  ) => {
    const listUserDocs = await firestoreDB.collection(refUsers).get()
    let flag = false
    let data = null
    if (listUserDocs.docs) {
      for (const doc of listUserDocs.docs) {
        let temp = doc.data()
        if (wallet_address.toLowerCase() === temp?.address.toLowerCase()) {
          flag = true
          data = temp
        }
      }
      if (!flag) {
        onCreateNewUser(wallet_address)
      } else {
        onLoginSuccess(data)
      }
      return
    }
    onError()
  }
  static createUsers = (
    {
      user_data = {
        address: "",
        name: ""
      }
    },
    successCb = () => {}
  ) => {
    firestoreDB.collection(refUsers).doc(user_data?.address).set({
      address: user_data?.address,
      name: user_data?.name
    })
    successCb()
  }
}
