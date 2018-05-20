pragma solidity ^0.4.21;

/// @title Generosity gift manager
/// @author Kenny Bambridge (github.com/k)
/// @notice This contract is experimental and may have security concerns
/// @dev Please post questions/suggestions to http://github.com/k/crypto-generosity/issues
contract Generosity {
    event Test( address curr, uint amount );
    mapping (address => address) public receiverToGiver;
    mapping (address => uint) public giverToReputation;
    mapping (address => uint) public pendingWithdrawals;

    uint GIVE_AMOUNT = 10000000000000000;
    uint RAKE = GIVE_AMOUNT / 100; // For paying contract gas prices
    uint NET = GIVE_AMOUNT - RAKE;

    // @param address to send the gift to
    function give(address to) public payable {
        require(msg.value == GIVE_AMOUNT, 'must give exact give amount');
        require(receiverToGiver[to] == 0, 'address has already been given to');
        require(receiverToGiver[msg.sender] != to, 'cannot return to sender');
        receiverToGiver[to] = msg.sender;
        pendingWithdrawals[to] = NET;
        updateRep();
    }

    // @dev update to use gas from contract to updateRep
    function updateRep() private {
        address curr = receiverToGiver[msg.sender];
        while (curr != 0) {
            giverToReputation[curr] += 1;
            curr = receiverToGiver[curr];
        }
    }

    // @param address to access reputation of
    // @return the number of people reached by the address
    function reputation(address ad) public view returns (uint) {
        return giverToReputation[ad];
    }

    // @notice Used to access the gifted ETH
    // @dev may need to add asserts to verify the contract will not run out of gas
    function withdraw() public {
        uint amount = pendingWithdrawals[msg.sender];
        require(amount > 0, 'No ETH to withdraw for this address');
        pendingWithdrawals[msg.sender] = 0;
        msg.sender.transfer(amount);
    }
}
