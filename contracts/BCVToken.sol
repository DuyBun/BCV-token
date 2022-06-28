pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract BCVToken is ERC20 {
    constructor() ERC20("BUN CV Token", "BCV") {
        _mint(msg.sender, 5*1000*1000);
    }
}

