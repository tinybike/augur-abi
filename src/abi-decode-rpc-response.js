"use strict";

var abiDecodeData = require("./abi-decode-data");
var formatInt256 = require("./format-int256");

function abiDecodeRpcResponse(responseType, abiEncodedRpcResponse) {
  var decodedRpcResponse = abiDecodeData([{type: responseType}], abiEncodedRpcResponse)[0];
  return decodedRpcResponse;
}

module.exports = abiDecodeRpcResponse;
