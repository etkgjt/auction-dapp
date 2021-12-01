import { realtimeDB, firestoreDB } from "./database"

const refAuction = "auctions"
const refDashboard = "dashboard"

const autionCollection = "auctions"
const playerCollection = "players"

export const AUCTION_STATUS = {
  CREATING: "CREATING",
  BIDDING: "BIDDING",
  ENDED: "ENDED",
  HIDE: "HIDE",
  STOP: "STOP"
}

export default class Auction {
  static registerListenAuctionsChange = (auction_id, fnListen) => {
    realtimeDB.ref(`/${refAuction}/${auction_id}`).on("value", (snapshot) => {
      fnListen(snapshot)
    })
  }
  static registerListenListAuctionsChange = (fnListen) => {
    realtimeDB.ref(`/${refAuction}`).on("value", (snapshot) => {
      fnListen(snapshot)
    })
  }
  static registerListenDashboardChange = (fnListen) => {
    realtimeDB.ref(`/${refDashboard}`).on("value", (snapshot) => {
      fnListen(snapshot)
    })
  }

  static createAuctions = (
    auction_data = {
      abi: "",
      max_bid: 0,
      owner: "",
      product_info: ""
    },
    id = ""
  ) => {
    const { abi, max_bid, owner, product_info, address } = auction_data
    firestoreDB.collection(autionCollection).doc(id).set({
      address,
      abi,
      max_bid: 0,
      owner,
      product_info,
      status: AUCTION_STATUS.CREATING,
      id: id,
      top_player: ""
    })
    realtimeDB.ref(`/${refAuction}/${id}`).update({
      max_bid: 0,
      players: [],
      status: AUCTION_STATUS.CREATING,
      id: id,
      top_player: ""
    })
  }
  static startAuctions = (id = "", abi = "", address = "") => {
    firestoreDB.collection(autionCollection).doc(id).update({
      address: address,
      abi: abi,
      status: AUCTION_STATUS.BIDDING
    })
    realtimeDB.ref(`/${refAuction}/${id}`).update({
      status: AUCTION_STATUS.BIDDING
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
      .ref(`/${refAuction}/${auction_id}/players/${player_address}_${id}`)
      .set({ [`${player_address}_${id}`]: `${bid_value}_${name}` })

    realtimeDB.ref(`/${refAuction}/${auction_id}`).update({
      max_bid: bid_value,
      top_player: player_address
    })
    firestoreDB.collection(autionCollection).doc(auction_id).update({
      max_bid: bid_value,
      top_player: player_address
    })

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

  // static startAuctions = (auction_id) => {
  //   firestoreDB.collection(autionCollection).doc(auction_id).update({
  //     status: AUCTION_STATUS.BIDDING
  //   })
  //   realtimeDB.ref(`/${refAuction}/${auction_id}`).update({
  //     max_bid: 0,
  //     players: [],
  //     status: AUCTION_STATUS.BIDDING
  //   })
  // }
  static endAuctions = (auction_id) => {
    if (!auction_id) {
      return
    }
    firestoreDB.collection(autionCollection).doc(auction_id).update({
      status: AUCTION_STATUS.ENDED
    })
    realtimeDB.ref(`/${refAuction}/${auction_id}`).update({
      status: AUCTION_STATUS.ENDED
    })
  }

  static stopAuctions = (auction_id) => {
    if (!auction_id || auction_id == "null") {
      return
    }
    firestoreDB.collection(autionCollection).doc(auction_id).update({
      status: AUCTION_STATUS.STOP
    })
    realtimeDB.ref(`/${refAuction}/${auction_id}`).update({
      status: AUCTION_STATUS.STOP
    })
  }
  static removeAuctions = (auction_id) => {
    firestoreDB.collection(autionCollection).doc(auction_id).update({
      status: AUCTION_STATUS.HIDE
    })
    realtimeDB.ref(`/${refAuction}/${auction_id}`).update({
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

  static updateAuctionDashboard = (data) => {
    const time = Date.now()
    const { address, bid_value, name, auction_id } = data
    realtimeDB.ref(`/${refDashboard}/${address}_${time}`).set({
      id: `${address}_${time}`,
      address,
      bid_value,
      name,
      auction_id
    })
  }

  static unRegisterListenAuctionsChange = (auction_id, fnListen, type = "") => {
    realtimeDB.ref(`/${refAuction}/${auction_id}`).off("value")
  }
  static unRegisterListenListAuctionsChange = (fnListen) => {
    realtimeDB.ref(`/${refAuction}`).off("value", (snapshot) => {
      fnListen(snapshot)
    })
  }
  static unRegisterListenDashboardChange = (fnListen) => {
    realtimeDB.ref(`/${refDashboard}`).off("value", (snapshot) => {
      fnListen(snapshot)
    })
  }
}
