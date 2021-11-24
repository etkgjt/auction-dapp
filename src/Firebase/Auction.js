import { realtimeDB, firestoreDB } from "./database"

const refAuction = "auctions"

const autionCollection = "auctions"
const playerCollection = "players"

export const AUCTION_STATUS = {
  CREATING: "CREATING",
  BIDDING: "BIDDING",
  ENDED: "ENDED",
  HIDE: "HIDE"
}

export default class Auction {
  static registerListenAuctionsChange = (auction_id, fnListen, type = "") => {
    realtimeDB.ref(`/${refAuction}/${auction_id}`).on("value", (snapshot) => {
      fnListen(snapshot)
    })
  }

  static createAuctions = (
    auction_data = {
      abi: "",
      max_bid: 0,
      owner: "",
      product_info: ""
    }
  ) => {
    const id = Date.now() + ""
    const { abi, max_bid, owner, product_info, address } = auction_data
    firestoreDB.collection(autionCollection).doc(id).set({
      address,
      abi,
      max_bid: 0,
      owner,
      product_info,
      status: AUCTION_STATUS.BIDDING,
      id: id
    })
    realtimeDB.ref(`/${refAuction}/${id}`).update({
      max_bid: 0,
      players: [],
      status: AUCTION_STATUS.BIDDING,
      id: id
    })
  }
  static createBid = (
    auction_id,
    bid_data = {
      player_address: "",
      bid_value: 0,
      name: 0
    }
  ) => {
    const { player_address, bid_value, name } = bid_data
    const id = Date.now()
    realtimeDB
      .ref(`/${refAuction}/${auction_id}/players`)
      .set({ [`${player_address}_${id}`]: `${bid_value}_${name}` })

    firestoreDB
      .collection(autionCollection)
      .doc(auction_id)
      .collection(playerCollection)
      .doc(player_address + "_" + id)
      .set({
        bid_value: bid_value,
        has_returnd: false,
        name: name || "name"
      })
  }

  static startAuctions = (auction_id) => {
    firestoreDB.collection(autionCollection).doc(auction_id).set({
      status: AUCTION_STATUS.BIDDING
    })
    realtimeDB.ref(`/${refAuction}/${auction_id}`).update({
      max_bid: 0,
      players: [],
      status: AUCTION_STATUS.BIDDING
    })
  }
  static endAuctions = (auction_id) => {
    if (!auction_id) {
      return
    }
    firestoreDB.collection(autionCollection).doc(auction_id).set({
      status: AUCTION_STATUS.ENDED
    })
    realtimeDB.ref(`/${refAuction}/${auction_id}`).update({
      max_bid: 0,
      players: [],
      status: AUCTION_STATUS.ENDED
    })
  }
  static removeAuctions = (auction_id) => {
    firestoreDB.collection(autionCollection).doc(auction_id).delete({
      status: AUCTION_STATUS.HIDE
    })
    realtimeDB.ref(`/${refAuction}/${auction_id}`).update({
      max_bid: 0,
      players: [],
      status: AUCTION_STATUS.HIDE
    })
  }

  static getListAuction = async () => {
    const listAuctionsDocs = await firestoreDB
      .collection(autionCollection)
      .get()
    const data = []
    if (listAuctionsDocs.docs) {
      for (const doc of listAuctionsDocs.docs) {
        let temp = doc.data()
        data.push(temp)
      }
    }
    return data
  }

  static unRegisterListenAuctionsChange = (auction_id, fnListen, type = "") => {
    realtimeDB.ref(`/${refAuction}/${auction_id}`).off("value")
  }
}
