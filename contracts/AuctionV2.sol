// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity >=0.7.0 <0.9.0;

contract Auction {
    // events
    event initedAuctionEvent();
    event bidEvent(address player, uint bidValue);
    event endAuctionEvent();
    event bidFailed(string status);    
    event endAuctionEventFailed(string status);
    
    
     // auction product_infor
    struct ProductAuction{
        address payable productOwner;
        string productInfor;
        uint startPrice;
        uint startTime;
        uint endTime;
    }
    ProductAuction public productAuction;

    // history records
     struct HistoryRecord {
        address player;
        uint timestamp;
        uint value;
    }
    HistoryRecord[] public records;
    
    // current highest Bidder and price
    address public highestBidder;
    uint public highestPrice;
    bool isAuctionEnd;
    
    // player
    mapping(address => uint) public pendingResultPlayer;
    // uint public countPlayer;
    address payable[] public listPlayer;
    
    // constructor
    constructor(string memory productInfor,uint startPrice,uint duration){
        productAuction = ProductAuction(msg.sender, productInfor,startPrice, block.timestamp, block.timestamp + duration);
        highestPrice = startPrice;
        isAuctionEnd = false;
        
        emit initedAuctionEvent();
    }

    function bid() public payable{
        if (block.timestamp > productAuction.endTime){
            emit bidFailed("Auction has ended");
        }
        else if (msg.value <= highestPrice){
             emit bidFailed("Need to pay higher price");
        }
        else 
        {        
            if (!isExistPlayer(msg.sender)){
                listPlayer.push(msg.sender); 
            }
            // record history
            records.push(HistoryRecord(msg.sender, block.timestamp, msg.value));
        
            pendingResultPlayer[msg.sender] += msg.value;
            
            // set new highestBidder
            highestPrice = msg.value;
            highestBidder = msg.sender;
        
            emit bidEvent(msg.sender,msg.value);

            returnCoin();
        }
    }

    function isExistPlayer(address addessPlayer) private view returns(bool){
        for (uint i = 0; i < listPlayer.length; i++){
            if (listPlayer[i] == addessPlayer){
                return true;
            }
        }
        return false;
    }
    
    function getPlayersLength() public view returns(uint) {
        return listPlayer.length;
    }
    
    function getRecordLength() public view returns (uint) {
        return records.length;
    }
    
    
    function withdraw(address payable receiver) private returns(bool){
        uint total = pendingResultPlayer[receiver];
        if (receiver == highestBidder){
            if (total > highestPrice) {
                pendingResultPlayer[receiver] = highestPrice;
                uint prevAmount = total - highestPrice;
                if (!payable(receiver).send(prevAmount)){
                    pendingResultPlayer[receiver] = total;
                    return false;
                }
            }
        } else {
            if (total > 0){
                pendingResultPlayer[receiver] = 0;
                if (!payable(receiver).send(total)){
                    pendingResultPlayer[receiver] = total;
                    return false;
                }
            }
        }
        return true;
    }

    function returnCoin() private {
        for (uint i = 0; i < listPlayer.length; i++){
            withdraw(listPlayer[i]);
        }
    }
    
    function auctionEnd() public{
        if (isAuctionEnd){
            emit endAuctionEventFailed("Auction has ended");             
        }
        else if (block.timestamp < productAuction.endTime)
        {
            emit endAuctionEventFailed("The game is not over yet");
        }
        else 
        {
            isAuctionEnd = true;        
            emit endAuctionEvent();        
            productAuction.productOwner.transfer(highestPrice);
            
        }
    }

}