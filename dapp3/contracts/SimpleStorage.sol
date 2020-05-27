//SPDX-License-Identifier: MIT
pragma solidity >= 0.5.0 < 0.7.0;

contract SimpleStorage {
  string public data = 'mydata'; // storage memory location - saved on the blockchain

  function set(string memory _data) public {
    data = _data;
  }
}
