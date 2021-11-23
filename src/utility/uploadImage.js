import { rootDir } from "../configs/dirUpload"
import { firebaseStorage } from "../Firebase/database"
// import firebase from "firebase/app"

const uploadImage = async (
  file = {},
  refFolder = "",
  fileName = "",
  onBeginUpLoad = () => {},
  onEndUpLoad = () => {},
  onUpLoadError = () => {}
) => {
  if (!file) {
    return
  }
  try {
    onBeginUpLoad()
    await firebaseStorage.ref(refFolder).child(fileName).put(file)
    const resUrl = await firebaseStorage
      .ref(refFolder)
      .child(fileName)
      .getDownloadURL()

    return resUrl
  } catch (err) {
    onUpLoadError()
  } finally {
    onEndUpLoad()
  }
}
export default uploadImage
