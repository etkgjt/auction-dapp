pragma solidity ^0.7.4;

contract BidGame {
    address public owner;
    Bid[] public players;
    
    struct Bid {
        string _id;
        address _owner;
    }
    
    
    constructor(){
        owner = msg.sender;
    }
        
    event newPlayer(address players);
    
    function turnIn(string memory _id) public {
        Bid memory nBid = Bid(_id,msg.sender);
        players.push(nBid);
        emit newPlayer(msg.sender);
    }
}