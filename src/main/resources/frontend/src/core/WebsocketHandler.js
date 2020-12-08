export const messageHandler = (store, e) => {
  let data = JSON.parse(e.data);

  switch (data.action) {
    case "newBid":
      store.commit("setAuctionBids", data.payload);
      break;

    case "newAuction":
      data.payload.bids = [];
      console.log("New Auction: ", data.payload);
      store.commit("setNewAuction", data.payload);
      break;
    case "newMessage": {
      console.log("New message", data)
      store.commit("addNewMessage", data.payload)
      break;
    }
    default:
      break;
  }
};
