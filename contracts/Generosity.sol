pragma solidity ^0.4.21;

contract Generosity {
    event Test(address indexed _to, address indexed _from, uint _value);
    mapping(address => address) public receiverToGiver;
    mapping(address => uint) public giverToReputation;

    uint GIVE_AMOUNT = 10000000000000000;

    function give(address to) public payable {
        require(msg.value == GIVE_AMOUNT);
        if (receiverToGiver[to] == 0) {
            receiverToGiver[to] = msg.sender;

            // update all rep
            address curr = receiverToGiver[msg.sender];
            emit Test(to, msg.sender, msg.value);
            while (curr != 0) {
                giverToReputation[curr] += 1;
                curr = receiverToGiver[curr];
            }
        }
    }

    function reputation(address ad) public view returns (uint) {
        return giverToReputation[ad];
    }
}
