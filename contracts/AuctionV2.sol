// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity >=0.7.0 <0.9.0;

contract Auction {
    // events
    event initedAuctionEvent();
    event bidEvent(address player, uint bidValue);
    event endAuctionEvent();
    
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
            revert("Auction has ended");
        }
        if (msg.value <= highestPrice){
             revert("Need to pay higher price");
        }
        
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
            revert("You can not withdraw");
        }
        uint amount = pendingResultPlayer[msg.sender];
        if (amount > 0){
            pendingResultPlayer[msg.sender] = 0;
            if (!payable(msg.sender).send(amount)){
                pendingResultPlayer[msg.sender] = amount;
                return false;
            }
        }
        return true;
    }
    
    
    function auctionEnd() public{
        if (isAuctionEnd){
             revert("Auction has ended");
        }
        if (block.timestamp < productAuction.endTime){
            revert("The game is not over yet");
        }
        isAuctionEnd = true;
        
        emit endAuctionEvent();
        
        productAuction.productOwner.transfer(highestPrice);
    }

}