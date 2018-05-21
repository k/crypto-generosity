pragma solidity ^0.4.21;

/// @title Generosity gift manager
/// @author Kenny Bambridge (github.com/k)
/// @notice This contract is experimental and may have security concerns
/// @dev Please post questions/suggestions to http://github.com/k/crypto-generosity/issues
contract Generosity {
    event Test( address curr, uint amount );
    mapping (address => address) public receiverToGiver;
    mapping (address => uint) public pendingWithdrawals;

    // @notice these for a linked list to store all keys
    mapping (address => address) public llIndex;

    function add(address _addr) private
    {
        if (llIndex[0x0] == 0) {
            llIndex[_addr] = 0x0;
        } else {
            llIndex[_addr] = llIndex[0x0];
        }
        llIndex[0x0] = _addr;
    }

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
        if (llIndex[msg.sender] == 0) {
            add(msg.sender);
        }
        add(to);
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
