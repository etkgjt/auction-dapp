import { realtimeDB, firestoreDB } from "./database"

const refUsers = "users"

export default class Users {
  static login = async (
    wallet_address,
    onCreateNewUser = () => {},
    onError = () => {}
  ) => {
    const listUserDocs = await firestoreDB.collection(refUsers).get()
    let flag = false
    if (listUserDocs.docs) {
      for (const doc of listUserDocs.docs) {
        let temp = doc.data()
        if (wallet_address === temp?.address) {
          flag = true
        }
      }
      if (!flag) {
        onCreateNewUser()
      }
      return
    }
    onError()
  }
  static createUsers = ({
    user_data = {
      address: "",
      name: ""
    }
  }) => {
    firestoreDB.collection(refUsers).doc(user_data?.address).update({
      address: user_data?.address,
      name: user_data?.name
    })
  }
}
