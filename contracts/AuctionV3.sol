// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity >=0.7.0 <0.9.0;

contract Auction {
    // events
    event initedAuctionEvent();
    event bidEvent(address player, uint bidValue);
    event endAuctionEvent(address winner, uint bidvalWin);
    event bidFailed(string status);
    event withdrawSuccess(string status);
    event withdrawError(string status);
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
    address[] public listPlayer;
    
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
            // revert("Auction has ended");
        } else if (msg.value <= highestPrice){
            emit bidFailed("Need to pay higher price");
            // revert("Need to pay higher price");
        }else {
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
    
    
    function withdraw() public returns(bool){
        if (msg.sender == highestBidder){
            emit withdrawError("withdraw failed");            
        }
        uint amount = pendingResultPlayer[msg.sender];
        if (amount > 0){
            pendingResultPlayer[msg.sender] = 0;
            if (!payable(msg.sender).send(amount)){
                pendingResultPlayer[msg.sender] = amount;
                return false;
            }
        }
        emit withdrawSuccess("withdraw success");
        return true;
    }
    
    
    function auctionEnd() public{
        if (isAuctionEnd){
            emit endAuctionEventFailed("Auction has ended");             
        }
        else if (block.timestamp < productAuction.endTime){
            emit endAuctionEventFailed("The game is not over yet");
            
        } else {
            isAuctionEnd = true;    
            emit endAuctionEvent(highestBidder, highestPrice);        
            productAuction.productOwner.transfer(highestPrice);
        }
        
    }

}