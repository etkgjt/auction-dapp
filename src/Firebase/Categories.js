import { realtimeDB, firestoreDB } from "./database"

const refCate = "categories"

export default class Categories {
  static getAllCategori = async () => {
    const cateDocs = await firestoreDB.collection(refCate).get()
    let listCate = []
    for (const doc of cateDocs.docs) {
      let temp = doc.data()
      listCate.push(temp)
    }
    return listCate
  }
}
