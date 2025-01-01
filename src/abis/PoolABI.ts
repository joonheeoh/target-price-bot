const ABI = {
  "_format": "hh-sol-artifact-1",
  "contractName": "UniswapV3Pool",
  "sourceName": "contracts/UniswapV3Pool.sol",
  "abi": [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "int24",
          "name": "tickLower",
          "type": "int24"
        },
        {
          "indexed": true,
          "internalType": "int24",
          "name": "tickUpper",
          "type": "int24"
        },
        {
          "indexed": false,
          "internalType": "uint128",
          "name": "amount",
          "type": "uint128"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount0",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount1",
          "type": "uint256"
        }
      ],
      "name": "Burn",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "int24",
          "name": "tickLower",
          "type": "int24"
        },
        {
          "indexed": true,
          "internalType": "int24",
          "name": "tickUpper",
          "type": "int24"
        },
        {
          "indexed": false,
          "internalType": "uint128",
          "name": "amount0",
          "type": "uint128"
        },
        {
          "indexed": false,
          "internalType": "uint128",
          "name": "amount1",
          "type": "uint128"
        }
      ],
      "name": "Collect",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint128",
          "name": "amount0",
          "type": "uint128"
        },
        {
          "indexed": false,
          "internalType": "uint128",
          "name": "amount1",
          "type": "uint128"
        }
      ],
      "name": "CollectProtocol",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount0",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount1",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "paid0",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "paid1",
          "type": "uint256"
        }
      ],
      "name": "Flash",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint16",
          "name": "observationCardinalityNextOld",
          "type": "uint16"
        },
        {
          "indexed": false,
          "internalType": "uint16",
          "name": "observationCardinalityNextNew",
          "type": "uint16"
        }
      ],
      "name": "IncreaseObservationCardinalityNext",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint160",
          "name": "sqrtPriceX96",
          "type": "uint160"
        },
        {
          "indexed": false,
          "internalType": "int24",
          "name": "tick",
          "type": "int24"
        }
      ],
      "name": "Initialize",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "int24",
          "name": "tickLower",
          "type": "int24"
        },
        {
          "indexed": true,
          "internalType": "int24",
          "name": "tickUpper",
          "type": "int24"
        },
        {
          "indexed": false,
          "internalType": "uint128",
          "name": "amount",
          "type": "uint128"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount0",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount1",
          "type": "uint256"
        }
      ],
      "name": "Mint",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint8",
          "name": "feeProtocol0Old",
          "type": "uint8"
        },
        {
          "indexed": false,
          "internalType": "uint8",
          "name": "feeProtocol1Old",
          "type": "uint8"
        },
        {
          "indexed": false,
          "internalType": "uint8",
          "name": "feeProtocol0New",
          "type": "uint8"
        },
        {
          "indexed": false,
          "internalType": "uint8",
          "name": "feeProtocol1New",
          "type": "uint8"
        }
      ],
      "name": "SetFeeProtocol",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "int256",
          "name": "amount0",
          "type": "int256"
        },
        {
          "indexed": false,
          "internalType": "int256",
          "name": "amount1",
          "type": "int256"
        },
        {
          "indexed": false,
          "internalType": "uint160",
          "name": "sqrtPriceX96",
          "type": "uint160"
        },
        {
          "indexed": false,
          "internalType": "uint128",
          "name": "liquidity",
          "type": "uint128"
        },
        {
          "indexed": false,
          "internalType": "int24",
          "name": "tick",
          "type": "int24"
        }
      ],
      "name": "Swap",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "int24",
          "name": "tickLower",
          "type": "int24"
        },
        {
          "internalType": "int24",
          "name": "tickUpper",
          "type": "int24"
        },
        {
          "internalType": "uint128",
          "name": "amount",
          "type": "uint128"
        }
      ],
      "name": "burn",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amount0",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amount1",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "int24",
          "name": "tickLower",
          "type": "int24"
        },
        {
          "internalType": "int24",
          "name": "tickUpper",
          "type": "int24"
        },
        {
          "internalType": "uint128",
          "name": "amount0Requested",
          "type": "uint128"
        },
        {
          "internalType": "uint128",
          "name": "amount1Requested",
          "type": "uint128"
        }
      ],
      "name": "collect",
      "outputs": [
        {
          "internalType": "uint128",
          "name": "amount0",
          "type": "uint128"
        },
        {
          "internalType": "uint128",
          "name": "amount1",
          "type": "uint128"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint128",
          "name": "amount0Requested",
          "type": "uint128"
        },
        {
          "internalType": "uint128",
          "name": "amount1Requested",
          "type": "uint128"
        }
      ],
      "name": "collectProtocol",
      "outputs": [
        {
          "internalType": "uint128",
          "name": "amount0",
          "type": "uint128"
        },
        {
          "internalType": "uint128",
          "name": "amount1",
          "type": "uint128"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "factory",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "fee",
      "outputs": [
        {
          "internalType": "uint24",
          "name": "",
          "type": "uint24"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "feeGrowthGlobal0X128",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "feeGrowthGlobal1X128",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount0",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amount1",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "flash",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint16",
          "name": "observationCardinalityNext",
          "type": "uint16"
        }
      ],
      "name": "increaseObservationCardinalityNext",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint160",
          "name": "sqrtPriceX96",
          "type": "uint160"
        }
      ],
      "name": "initialize",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "liquidity",
      "outputs": [
        {
          "internalType": "uint128",
          "name": "",
          "type": "uint128"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "maxLiquidityPerTick",
      "outputs": [
        {
          "internalType": "uint128",
          "name": "",
          "type": "uint128"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "int24",
          "name": "tickLower",
          "type": "int24"
        },
        {
          "internalType": "int24",
          "name": "tickUpper",
          "type": "int24"
        },
        {
          "internalType": "uint128",
          "name": "amount",
          "type": "uint128"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "mint",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amount0",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amount1",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "observations",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "blockTimestamp",
          "type": "uint32"
        },
        {
          "internalType": "int56",
          "name": "tickCumulative",
          "type": "int56"
        },
        {
          "internalType": "uint160",
          "name": "secondsPerLiquidityCumulativeX128",
          "type": "uint160"
        },
        {
          "internalType": "bool",
          "name": "initialized",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint32[]",
          "name": "secondsAgos",
          "type": "uint32[]"
        }
      ],
      "name": "observe",
      "outputs": [
        {
          "internalType": "int56[]",
          "name": "tickCumulatives",
          "type": "int56[]"
        },
        {
          "internalType": "uint160[]",
          "name": "secondsPerLiquidityCumulativeX128s",
          "type": "uint160[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "positions",
      "outputs": [
        {
          "internalType": "uint128",
          "name": "liquidity",
          "type": "uint128"
        },
        {
          "internalType": "uint256",
          "name": "feeGrowthInside0LastX128",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "feeGrowthInside1LastX128",
          "type": "uint256"
        },
        {
          "internalType": "uint128",
          "name": "tokensOwed0",
          "type": "uint128"
        },
        {
          "internalType": "uint128",
          "name": "tokensOwed1",
          "type": "uint128"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "protocolFees",
      "outputs": [
        {
          "internalType": "uint128",
          "name": "token0",
          "type": "uint128"
        },
        {
          "internalType": "uint128",
          "name": "token1",
          "type": "uint128"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint8",
          "name": "feeProtocol0",
          "type": "uint8"
        },
        {
          "internalType": "uint8",
          "name": "feeProtocol1",
          "type": "uint8"
        }
      ],
      "name": "setFeeProtocol",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "slot0",
      "outputs": [
        {
          "internalType": "uint160",
          "name": "sqrtPriceX96",
          "type": "uint160"
        },
        {
          "internalType": "int24",
          "name": "tick",
          "type": "int24"
        },
        {
          "internalType": "uint16",
          "name": "observationIndex",
          "type": "uint16"
        },
        {
          "internalType": "uint16",
          "name": "observationCardinality",
          "type": "uint16"
        },
        {
          "internalType": "uint16",
          "name": "observationCardinalityNext",
          "type": "uint16"
        },
        {
          "internalType": "uint8",
          "name": "feeProtocol",
          "type": "uint8"
        },
        {
          "internalType": "bool",
          "name": "unlocked",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "int24",
          "name": "tickLower",
          "type": "int24"
        },
        {
          "internalType": "int24",
          "name": "tickUpper",
          "type": "int24"
        }
      ],
      "name": "snapshotCumulativesInside",
      "outputs": [
        {
          "internalType": "int56",
          "name": "tickCumulativeInside",
          "type": "int56"
        },
        {
          "internalType": "uint160",
          "name": "secondsPerLiquidityInsideX128",
          "type": "uint160"
        },
        {
          "internalType": "uint32",
          "name": "secondsInside",
          "type": "uint32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "zeroForOne",
          "type": "bool"
        },
        {
          "internalType": "int256",
          "name": "amountSpecified",
          "type": "int256"
        },
        {
          "internalType": "uint160",
          "name": "sqrtPriceLimitX96",
          "type": "uint160"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "swap",
      "outputs": [
        {
          "internalType": "int256",
          "name": "amount0",
          "type": "int256"
        },
        {
          "internalType": "int256",
          "name": "amount1",
          "type": "int256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "int16",
          "name": "",
          "type": "int16"
        }
      ],
      "name": "tickBitmap",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "tickSpacing",
      "outputs": [
        {
          "internalType": "int24",
          "name": "",
          "type": "int24"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "int24",
          "name": "",
          "type": "int24"
        }
      ],
      "name": "ticks",
      "outputs": [
        {
          "internalType": "uint128",
          "name": "liquidityGross",
          "type": "uint128"
        },
        {
          "internalType": "int128",
          "name": "liquidityNet",
          "type": "int128"
        },
        {
          "internalType": "uint256",
          "name": "feeGrowthOutside0X128",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "feeGrowthOutside1X128",
          "type": "uint256"
        },
        {
          "internalType": "int56",
          "name": "tickCumulativeOutside",
          "type": "int56"
        },
        {
          "internalType": "uint160",
          "name": "secondsPerLiquidityOutsideX128",
          "type": "uint160"
        },
        {
          "internalType": "uint32",
          "name": "secondsOutside",
          "type": "uint32"
        },
        {
          "internalType": "bool",
          "name": "initialized",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "token0",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "token1",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x6101606040523480156200001257600080fd5b503060601b60805260408051630890357360e41b81529051600091339163890357309160048082019260a092909190829003018186803b1580156200005657600080fd5b505afa1580156200006b573d6000803e3d6000fd5b505050506040513d60a08110156200008257600080fd5b508051602080830151604084015160608086015160809096015160e896871b6001600160e81b0319166101005291811b6001600160601b031990811660e05292811b831660c0529390931b1660a052600282810b900b90921b610120529150620000f79082906200010f811b62002b8417901c565b60801b6001600160801b03191661014052506200017d565b60008082600281900b620d89e719816200012557fe5b05029050600083600281900b620d89e8816200013d57fe5b0502905060008460020b83830360020b816200015557fe5b0560010190508062ffffff166001600160801b038016816200017357fe5b0495945050505050565b60805160601c60a05160601c60c05160601c60e05160601c6101005160e81c6101205160e81c6101405160801c61567e6200024a60003980611fee5280614b5f5280614b96525080610c0052806128fd5280614bca5280614bfc525080610cef52806119cb5280611a0252806129455250806111c75280611a855280611ef4528061244452806129215280613e6b5250806108d252806112f55280611a545280611e8e52806123be5280613d2252508061207b528061227d52806128d9525080612bfb525061567e6000f3fe608060405234801561001057600080fd5b50600436106101ae5760003560e01c806370cf754a116100ee578063c45a015511610097578063ddca3f4311610071578063ddca3f4314610800578063f305839914610820578063f30dba9314610828578063f637731d146108aa576101ae565b8063c45a0155146107d1578063d0c93a7c146107d9578063d21220a7146107f8576101ae565b8063883bdbfd116100c8578063883bdbfd14610633578063a34123a71461073c578063a38807f214610776576101ae565b806370cf754a146105c65780638206a4d1146105ce57806385b66729146105f6576101ae565b80633850c7bd1161015b578063490e6cbc11610135578063490e6cbc146104705780634f1eb3d8146104fc578063514ea4bf1461054d5780635339c296146105a6576101ae565b80633850c7bd1461035b5780633c8a7d8d146103b45780634614131914610456576101ae565b80631ad8b03b1161018c5780631ad8b03b146102aa578063252c09d7146102e157806332148f6714610338576101ae565b80630dfe1681146101b3578063128acb08146101d75780631a68650214610286575b600080fd5b6101bb6108d0565b604080516001600160a01b039092168252519081900360200190f35b61026d600480360360a08110156101ed57600080fd5b6001600160a01b0382358116926020810135151592604082013592606083013516919081019060a08101608082013564010000000081111561022e57600080fd5b82018360208201111561024057600080fd5b8035906020019184600183028401116401000000008311171561026257600080fd5b5090925090506108f4565b6040805192835260208301919091528051918290030190f35b61028e6114ad565b604080516001600160801b039092168252519081900360200190f35b6102b26114bc565b60405180836001600160801b03168152602001826001600160801b031681526020019250505060405180910390f35b6102fe600480360360208110156102f757600080fd5b50356114d6565b6040805163ffffffff909516855260069390930b60208501526001600160a01b039091168383015215156060830152519081900360800190f35b6103596004803603602081101561034e57600080fd5b503561ffff1661151c565b005b610363611616565b604080516001600160a01b03909816885260029690960b602088015261ffff9485168787015292841660608701529216608085015260ff90911660a0840152151560c0830152519081900360e00190f35b61026d600480360360a08110156103ca57600080fd5b6001600160a01b03823516916020810135600290810b92604083013590910b916001600160801b036060820135169181019060a08101608082013564010000000081111561041757600080fd5b82018360208201111561042957600080fd5b8035906020019184600183028401116401000000008311171561044b57600080fd5b509092509050611666565b61045e611922565b60408051918252519081900360200190f35b6103596004803603608081101561048657600080fd5b6001600160a01b0382351691602081013591604082013591908101906080810160608201356401000000008111156104bd57600080fd5b8201836020820111156104cf57600080fd5b803590602001918460018302840111640100000000831117156104f157600080fd5b509092509050611928565b6102b2600480360360a081101561051257600080fd5b506001600160a01b03813516906020810135600290810b91604081013590910b906001600160801b0360608201358116916080013516611d83565b61056a6004803603602081101561056357600080fd5b5035611f9d565b604080516001600160801b0396871681526020810195909552848101939093529084166060840152909216608082015290519081900360a00190f35b61045e600480360360208110156105bc57600080fd5b503560010b611fda565b61028e611fec565b610359600480360360408110156105e457600080fd5b5060ff81358116916020013516612010565b6102b26004803603606081101561060c57600080fd5b506001600160a01b03813516906001600160801b036020820135811691604001351661220f565b6106a36004803603602081101561064957600080fd5b81019060208101813564010000000081111561066457600080fd5b82018360208201111561067657600080fd5b8035906020019184602083028401116401000000008311171561069857600080fd5b5090925090506124dc565b604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b838110156106e75781810151838201526020016106cf565b50505050905001838103825284818151815260200191508051906020019060200280838360005b8381101561072657818101518382015260200161070e565b5050505090500194505050505060405180910390f35b61026d6004803603606081101561075257600080fd5b508035600290810b91602081013590910b90604001356001600160801b0316612569565b6107a06004803603604081101561078c57600080fd5b508035600290810b9160200135900b6126e0565b6040805160069490940b84526001600160a01b03909216602084015263ffffffff1682820152519081900360600190f35b6101bb6128d7565b6107e16128fb565b6040805160029290920b8252519081900360200190f35b6101bb61291f565b610808612943565b6040805162ffffff9092168252519081900360200190f35b61045e612967565b6108486004803603602081101561083e57600080fd5b503560020b61296d565b604080516001600160801b039099168952600f9790970b602089015287870195909552606087019390935260069190910b60808601526001600160a01b031660a085015263ffffffff1660c0840152151560e083015251908190036101000190f35b610359600480360360208110156108c057600080fd5b50356001600160a01b03166129db565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000806108ff612bf0565b85610936576040805162461bcd60e51b8152602060048201526002602482015261415360f01b604482015290519081900360640190fd5b6040805160e0810182526000546001600160a01b0381168252600160a01b8104600290810b810b900b602083015261ffff600160b81b8204811693830193909352600160c81b810483166060830152600160d81b8104909216608082015260ff600160e81b8304811660a0830152600160f01b909204909116151560c082018190526109ef576040805162461bcd60e51b81526020600482015260036024820152624c4f4b60e81b604482015290519081900360640190fd5b87610a3a5780600001516001600160a01b0316866001600160a01b0316118015610a35575073fffd8963efd1fc6a506488495d951d5263988d266001600160a01b038716105b610a6c565b80600001516001600160a01b0316866001600160a01b0316108015610a6c57506401000276a36001600160a01b038716115b610aa3576040805162461bcd60e51b815260206004820152600360248201526214d41360ea1b604482015290519081900360640190fd5b6000805460ff60f01b191681556040805160c08101909152808a610ad25760048460a0015160ff16901c610ae5565b60108460a0015160ff1681610ae357fe5b065b60ff1681526004546001600160801b03166020820152604001610b06612c27565b63ffffffff168152602001600060060b815260200160006001600160a01b031681526020016000151581525090506000808913905060006040518060e001604052808b81526020016000815260200185600001516001600160a01b03168152602001856020015160020b81526020018c610b8257600254610b86565b6001545b815260200160006001600160801b0316815260200184602001516001600160801b031681525090505b805115801590610bd55750886001600160a01b031681604001516001600160a01b031614155b15610f9f57610be261560e565b60408201516001600160a01b031681526060820151610c25906006907f00000000000000000000000000000000000000000000000000000000000000008f612c2b565b15156040830152600290810b810b60208301819052620d89e719910b1215610c5657620d89e7196020820152610c75565b6020810151620d89e860029190910b1315610c7557620d89e860208201525b610c828160200151612d6d565b6001600160a01b031660608201526040820151610d13908d610cbc578b6001600160a01b031683606001516001600160a01b031611610cd6565b8b6001600160a01b031683606001516001600160a01b0316105b610ce4578260600151610ce6565b8b5b60c085015185517f000000000000000000000000000000000000000000000000000000000000000061309f565b60c085015260a084015260808301526001600160a01b031660408301528215610d7557610d498160c00151826080015101613291565b825103825260a0810151610d6b90610d6090613291565b6020840151906132a7565b6020830152610db0565b610d828160a00151613291565b825101825260c08101516080820151610daa91610d9f9101613291565b6020840151906132c3565b60208301525b835160ff1615610df6576000846000015160ff168260c0015181610dd057fe5b60c0840180519290910491829003905260a0840180519091016001600160801b03169052505b60c08201516001600160801b031615610e3557610e298160c00151600160801b8460c001516001600160801b03166132d9565b60808301805190910190525b80606001516001600160a01b031682604001516001600160a01b03161415610f5e57806040015115610f35578360a00151610ebf57610e9d846040015160008760200151886040015188602001518a606001516008613389909695949392919063ffffffff16565b6001600160a01b03166080860152600690810b900b6060850152600160a08501525b6000610f0b82602001518e610ed657600154610edc565b84608001515b8f610eeb578560800151610eef565b6002545b608089015160608a015160408b0151600595949392919061351c565b90508c15610f17576000035b610f258360c00151826135ef565b6001600160801b031660c0840152505b8b610f44578060200151610f4d565b60018160200151035b600290810b900b6060830152610f99565b80600001516001600160a01b031682604001516001600160a01b031614610f9957610f8c82604001516136a5565b600290810b900b60608301525b50610baf565b836020015160020b816060015160020b1461107a57600080610fed86604001518660400151886020015188602001518a606001518b6080015160086139d1909695949392919063ffffffff16565b604085015160608601516000805461ffff60c81b1916600160c81b61ffff958616021761ffff60b81b1916600160b81b95909416949094029290921762ffffff60a01b1916600160a01b62ffffff60029490940b93909316929092029190911773ffffffffffffffffffffffffffffffffffffffff19166001600160a01b03909116179055506110ac9050565b60408101516000805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b039092169190911790555b8060c001516001600160801b031683602001516001600160801b0316146110f25760c0810151600480546001600160801b0319166001600160801b039092169190911790555b8a1561114257608081015160015560a08101516001600160801b03161561113d5760a0810151600380546001600160801b031981166001600160801b03918216909301169190911790555b611188565b608081015160025560a08101516001600160801b0316156111885760a0810151600380546001600160801b03808216600160801b92839004821690940116029190911790555b8115158b1515146111a157602081015181518b036111ae565b80600001518a0381602001515b90965094508a156112e75760008512156111f0576111f07f00000000000000000000000000000000000000000000000000000000000000008d87600003613b86565b60006111fa613cd4565b9050336001600160a01b031663fa461e3388888c8c6040518563ffffffff1660e01b815260040180858152602001848152602001806020018281038252848482818152602001925080828437600081840152601f19601f82011690508083019250505095505050505050600060405180830381600087803b15801561127e57600080fd5b505af1158015611292573d6000803e3d6000fd5b5050505061129e613cd4565b6112a88289613e0d565b11156112e1576040805162461bcd60e51b815260206004820152600360248201526249494160e81b604482015290519081900360640190fd5b50611411565b600086121561131e5761131e7f00000000000000000000000000000000000000000000000000000000000000008d88600003613b86565b6000611328613e1d565b9050336001600160a01b031663fa461e3388888c8c6040518563ffffffff1660e01b815260040180858152602001848152602001806020018281038252848482818152602001925080828437600081840152601f19601f82011690508083019250505095505050505050600060405180830381600087803b1580156113ac57600080fd5b505af11580156113c0573d6000803e3d6000fd5b505050506113cc613e1d565b6113d68288613e0d565b111561140f576040805162461bcd60e51b815260206004820152600360248201526249494160e81b604482015290519081900360640190fd5b505b60408082015160c083015160608085015184518b8152602081018b90526001600160a01b03948516818701526001600160801b039093169183019190915260020b60808201529151908e169133917fc42079f94a6350d7e6235f29174924f928cc2ac818eb64fed8004e115fbcca679181900360a00190a350506000805460ff60f01b1916600160f01b17905550919890975095505050505050565b6004546001600160801b031681565b6003546001600160801b0380821691600160801b90041682565b60088161ffff81106114e757600080fd5b015463ffffffff81169150640100000000810460060b90600160581b81046001600160a01b031690600160f81b900460ff1684565b600054600160f01b900460ff16611560576040805162461bcd60e51b81526020600482015260036024820152624c4f4b60e81b604482015290519081900360640190fd5b6000805460ff60f01b19169055611575612bf0565b60008054600160d81b900461ffff169061159160088385613eb5565b6000805461ffff808416600160d81b810261ffff60d81b19909316929092179092559192508316146115fe576040805161ffff80851682528316602082015281517fac49e518f90a358f652e4400164f05a5d8f7e35e7747279bc3a93dbf584e125a929181900390910190a15b50506000805460ff60f01b1916600160f01b17905550565b6000546001600160a01b03811690600160a01b810460020b9061ffff600160b81b8204811691600160c81b8104821691600160d81b8204169060ff600160e81b8204811691600160f01b90041687565b600080548190600160f01b900460ff166116ad576040805162461bcd60e51b81526020600482015260036024820152624c4f4b60e81b604482015290519081900360640190fd5b6000805460ff60f01b191690556001600160801b0385166116cd57600080fd5b60008061171b60405180608001604052808c6001600160a01b031681526020018b60020b81526020018a60020b81526020016117118a6001600160801b0316613f58565b600f0b9052613f69565b9250925050819350809250600080600086111561173d5761173a613cd4565b91505b841561174e5761174b613e1d565b90505b336001600160a01b031663d348799787878b8b6040518563ffffffff1660e01b815260040180858152602001848152602001806020018281038252848482818152602001925080828437600081840152601f19601f82011690508083019250505095505050505050600060405180830381600087803b1580156117d057600080fd5b505af11580156117e4573d6000803e3d6000fd5b50505050600086111561183b576117f9613cd4565b6118038388613e0d565b111561183b576040805162461bcd60e51b815260206004820152600260248201526104d360f41b604482015290519081900360640190fd5b841561188b57611849613e1d565b6118538287613e0d565b111561188b576040805162461bcd60e51b81526020600482015260026024820152614d3160f01b604482015290519081900360640190fd5b8960020b8b60020b8d6001600160a01b03167f7a53080ba414158be7ec69b987b5fb7d07dee101fe85488f0853ae16239d0bde338d8b8b60405180856001600160a01b03168152602001846001600160801b0316815260200183815260200182815260200194505050505060405180910390a450506000805460ff60f01b1916600160f01b17905550919890975095505050505050565b60025481565b600054600160f01b900460ff1661196c576040805162461bcd60e51b81526020600482015260036024820152624c4f4b60e81b604482015290519081900360640190fd5b6000805460ff60f01b19169055611981612bf0565b6004546001600160801b0316806119c3576040805162461bcd60e51b81526020600482015260016024820152601360fa1b604482015290519081900360640190fd5b60006119f8867f000000000000000000000000000000000000000000000000000000000000000062ffffff16620f42406141a9565b90506000611a2f867f000000000000000000000000000000000000000000000000000000000000000062ffffff16620f42406141a9565b90506000611a3b613cd4565b90506000611a47613e1d565b90508815611a7a57611a7a7f00000000000000000000000000000000000000000000000000000000000000008b8b613b86565b8715611aab57611aab7f00000000000000000000000000000000000000000000000000000000000000008b8a613b86565b336001600160a01b031663e9cbafb085858a8a6040518563ffffffff1660e01b815260040180858152602001848152602001806020018281038252848482818152602001925080828437600081840152601f19601f82011690508083019250505095505050505050600060405180830381600087803b158015611b2d57600080fd5b505af1158015611b41573d6000803e3d6000fd5b505050506000611b4f613cd4565b90506000611b5b613e1d565b905081611b688588613e0d565b1115611ba0576040805162461bcd60e51b8152602060048201526002602482015261046360f41b604482015290519081900360640190fd5b80611bab8487613e0d565b1115611be3576040805162461bcd60e51b8152602060048201526002602482015261463160f01b604482015290519081900360640190fd5b8382038382038115611c725760008054600160e81b9004600f16908115611c16578160ff168481611c1057fe5b04611c19565b60005b90506001600160801b03811615611c4c57600380546001600160801b038082168401166001600160801b03199091161790555b611c66818503600160801b8d6001600160801b03166132d9565b60018054909101905550505b8015611cfd5760008054600160e81b900460041c600f16908115611ca2578160ff168381611c9c57fe5b04611ca5565b60005b90506001600160801b03811615611cd757600380546001600160801b03600160801b8083048216850182160291161790555b611cf1818403600160801b8d6001600160801b03166132d9565b60028054909101905550505b8d6001600160a01b0316336001600160a01b03167fbdbdb71d7860376ba52b25a5028beea23581364a40522f6bcfb86bb1f2dca6338f8f86866040518085815260200184815260200183815260200182815260200194505050505060405180910390a350506000805460ff60f01b1916600160f01b179055505050505050505050505050565b600080548190600160f01b900460ff16611dca576040805162461bcd60e51b81526020600482015260036024820152624c4f4b60e81b604482015290519081900360640190fd5b6000805460ff60f01b19168155611de460073389896141e3565b60038101549091506001600160801b0390811690861611611e055784611e14565b60038101546001600160801b03165b60038201549093506001600160801b03600160801b909104811690851611611e3c5783611e52565b6003810154600160801b90046001600160801b03165b91506001600160801b03831615611eb7576003810180546001600160801b031981166001600160801b03918216869003821617909155611eb7907f0000000000000000000000000000000000000000000000000000000000000000908a908616613b86565b6001600160801b03821615611f1d576003810180546001600160801b03600160801b808304821686900382160291811691909117909155611f1d907f0000000000000000000000000000000000000000000000000000000000000000908a908516613b86565b604080516001600160a01b038a1681526001600160801b0380861660208301528416818301529051600288810b92908a900b9133917f70935338e69775456a85ddef226c395fb668b63fa0115f5f20610b388e6ca9c0919081900360600190a4506000805460ff60f01b1916600160f01b17905590969095509350505050565b60076020526000908152604090208054600182015460028301546003909301546001600160801b0392831693919281811691600160801b90041685565b60066020526000908152604090205481565b7f000000000000000000000000000000000000000000000000000000000000000081565b600054600160f01b900460ff16612054576040805162461bcd60e51b81526020600482015260036024820152624c4f4b60e81b604482015290519081900360640190fd5b6000805460ff60f01b1916905560408051638da5cb5b60e01b815290516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001691638da5cb5b916004808301926020929190829003018186803b1580156120c157600080fd5b505afa1580156120d5573d6000803e3d6000fd5b505050506040513d60208110156120eb57600080fd5b50516001600160a01b0316331461210157600080fd5b60ff82161580612124575060048260ff16101580156121245750600a8260ff1611155b801561214e575060ff8116158061214e575060048160ff161015801561214e5750600a8160ff1611155b61215757600080fd5b60008054610ff0600484901b16840160ff908116600160e81b9081027fffff00ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff841617909355919004167f973d8d92bb299f4af6ce49b52a8adb85ae46b9f214c4c4fc06ac77401237b1336010826040805160ff9390920683168252600f600486901c16602083015286831682820152918516606082015290519081900360800190a150506000805460ff60f01b1916600160f01b17905550565b600080548190600160f01b900460ff16612256576040805162461bcd60e51b81526020600482015260036024820152624c4f4b60e81b604482015290519081900360640190fd5b6000805460ff60f01b1916905560408051638da5cb5b60e01b815290516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001691638da5cb5b916004808301926020929190829003018186803b1580156122c357600080fd5b505afa1580156122d7573d6000803e3d6000fd5b505050506040513d60208110156122ed57600080fd5b50516001600160a01b0316331461230357600080fd5b6003546001600160801b039081169085161161231f578361232c565b6003546001600160801b03165b6003549092506001600160801b03600160801b9091048116908416116123525782612366565b600354600160801b90046001600160801b03165b90506001600160801b038216156123e7576003546001600160801b038381169116141561239557600019909101905b600380546001600160801b031981166001600160801b039182168590038216179091556123e7907f00000000000000000000000000000000000000000000000000000000000000009087908516613b86565b6001600160801b0381161561246d576003546001600160801b03828116600160801b90920416141561241857600019015b600380546001600160801b03600160801b80830482168590038216029181169190911790915561246d907f00000000000000000000000000000000000000000000000000000000000000009087908416613b86565b604080516001600160801b0380851682528316602082015281516001600160a01b0388169233927f596b573906218d3411850b26a6b437d6c4522fdb43d2d2386263f86d50b8b151929081900390910190a36000805460ff60f01b1916600160f01b1790559094909350915050565b6060806124e7612bf0565b61255e6124f2612c27565b858580806020026020016040519081016040528093929190818152602001838360200280828437600092018290525054600454600896959450600160a01b820460020b935061ffff600160b81b8304811693506001600160801b0390911691600160c81b900416614247565b915091509250929050565b600080548190600160f01b900460ff166125b0576040805162461bcd60e51b81526020600482015260036024820152624c4f4b60e81b604482015290519081900360640190fd5b6000805460ff60f01b1916815560408051608081018252338152600288810b602083015287900b918101919091528190819061260990606081016125fc6001600160801b038a16613f58565b600003600f0b9052613f69565b925092509250816000039450806000039350600085118061262a5750600084115b15612669576003830180546001600160801b038082168089018216600160801b93849004831689019092169092029091176001600160801b0319161790555b604080516001600160801b0388168152602081018790528082018690529051600289810b92908b900b9133917f0c396cd989a39f4459b5fa1aed6a9a8dcdbc45908acfd67e028cd568da98982c919081900360600190a450506000805460ff60f01b1916600160f01b179055509094909350915050565b60008060006126ed612bf0565b6126f785856143a1565b600285810b810b60009081526005602052604080822087840b90930b825281206003830154600681900b9367010000000000000082046001600160a01b0316928492600160d81b810463ffffffff169284929091600160f81b900460ff168061275f57600080fd5b6003820154600681900b985067010000000000000081046001600160a01b03169650600160d81b810463ffffffff169450600160f81b900460ff16806127a457600080fd5b50506040805160e0810182526000546001600160a01b0381168252600160a01b8104600290810b810b810b6020840181905261ffff600160b81b8404811695850195909552600160c81b830485166060850152600160d81b8304909416608084015260ff600160e81b8304811660a0850152600160f01b909204909116151560c08301529093508e810b91900b1215905061284d575093909403965090039350900390506128d0565b8a60020b816020015160020b12156128c1576000612869612c27565b602083015160408401516004546060860151939450600093849361289f936008938893879392916001600160801b031690613389565b9a9003989098039b5050949096039290920396509091030392506128d0915050565b50949093039650039350900390505b9250925092565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b60015481565b60056020526000908152604090208054600182015460028301546003909301546001600160801b03831693600160801b909304600f0b9290600681900b9067010000000000000081046001600160a01b031690600160d81b810463ffffffff1690600160f81b900460ff1688565b6000546001600160a01b031615612a1e576040805162461bcd60e51b8152602060048201526002602482015261414960f01b604482015290519081900360640190fd5b6000612a29826136a5565b9050600080612a41612a39612c27565b60089061446a565b6040805160e0810182526001600160a01b038816808252600288810b6020808501829052600085870181905261ffff898116606088018190529089166080880181905260a08801839052600160c0909801979097528154600160f01b73ffffffffffffffffffffffffffffffffffffffff19909116871762ffffff60a01b1916600160a01b62ffffff9787900b9790971696909602959095177fffffffffff00000000ffffffffffffffffffffffffffffffffffffffffffffff16600160c81b9091021761ffff60d81b1916600160d81b909602959095177fff0000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1692909217909355835191825281019190915281519395509193507f98636036cb66a9c19a37435efc1e90142190214e8abeb821bdba3f2990dd4c9592918290030190a150505050565b60008082600281900b620d89e71981612b9957fe5b05029050600083600281900b620d89e881612bb057fe5b0502905060008460020b83830360020b81612bc757fe5b0560010190508062ffffff166001600160801b03801681612be457fe5b0493505050505b919050565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614612c2557600080fd5b565b4290565b60008060008460020b8660020b81612c3f57fe5b05905060008660020b128015612c6657508460020b8660020b81612c5f57fe5b0760020b15155b15612c7057600019015b8315612ce557600080612c82836144b6565b600182810b810b600090815260208d9052604090205460ff83169190911b80016000190190811680151597509294509092509085612cc757888360ff16860302612cda565b88612cd1826144c8565b840360ff168603025b965050505050612d63565b600080612cf4836001016144b6565b91509150600060018260ff166001901b031990506000818b60008660010b60010b8152602001908152602001600020541690508060001415955085612d4657888360ff0360ff16866001010102612d5c565b8883612d5183614568565b0360ff168660010101025b9650505050505b5094509492505050565b60008060008360020b12612d84578260020b612d8c565b8260020b6000035b9050620d89e8811115612dca576040805162461bcd60e51b81526020600482015260016024820152601560fa1b604482015290519081900360640190fd5b600060018216612dde57600160801b612df0565b6ffffcb933bd6fad37aa2d162d1a5940015b70ffffffffffffffffffffffffffffffffff1690506002821615612e24576ffff97272373d413259a46990580e213a0260801c5b6004821615612e43576ffff2e50f5f656932ef12357cf3c7fdcc0260801c5b6008821615612e62576fffe5caca7e10e4e61c3624eaa0941cd00260801c5b6010821615612e81576fffcb9843d60f6159c9db58835c9266440260801c5b6020821615612ea0576fff973b41fa98c081472e6896dfb254c00260801c5b6040821615612ebf576fff2ea16466c96a3843ec78b326b528610260801c5b6080821615612ede576ffe5dee046a99a2a811c461f1969c30530260801c5b610100821615612efe576ffcbe86c7900a88aedcffc83b479aa3a40260801c5b610200821615612f1e576ff987a7253ac413176f2b074cf7815e540260801c5b610400821615612f3e576ff3392b0822b70005940c7a398e4b70f30260801c5b610800821615612f5e576fe7159475a2c29b7443b29c7fa6e889d90260801c5b611000821615612f7e576fd097f3bdfd2022b8845ad8f792aa58250260801c5b612000821615612f9e576fa9f746462d870fdf8a65dc1f90e061e50260801c5b614000821615612fbe576f70d869a156d2a1b890bb3df62baf32f70260801c5b618000821615612fde576f31be135f97d08fd981231505542fcfa60260801c5b62010000821615612fff576f09aa508b5b7a84e1c677de54f3e99bc90260801c5b6202000082161561301f576e5d6af8dedb81196699c329225ee6040260801c5b6204000082161561303e576d2216e584f5fa1ea926041bedfe980260801c5b6208000082161561305b576b048a170391f7dc42444e8fa20260801c5b60008460020b131561307657806000198161307257fe5b0490505b64010000000081061561308a57600161308d565b60005b60ff16602082901c0192505050919050565b60008080806001600160a01b03808916908a1610158187128015906131245760006130d88989620f42400362ffffff16620f42406132d9565b9050826130f1576130ec8c8c8c6001614652565b6130fe565b6130fe8b8d8c60016146cd565b955085811061310f578a965061311e565b61311b8c8b838661478a565b96505b5061316e565b8161313b576131368b8b8b60006146cd565b613148565b6131488a8c8b6000614652565b935083886000031061315c5789955061316e565b61316b8b8a8a600003856147d6565b95505b6001600160a01b038a81169087161482156131d15780801561318d5750815b6131a35761319e878d8c60016146cd565b6131a5565b855b95508080156131b2575081155b6131c8576131c3878d8c6000614652565b6131ca565b845b945061321b565b8080156131db5750815b6131f1576131ec8c888c6001614652565b6131f3565b855b9550808015613200575081155b613216576132118c888c60006146cd565b613218565b845b94505b8115801561322b57508860000385115b15613237578860000394505b81801561325657508a6001600160a01b0316876001600160a01b031614155b15613265578589039350613282565b61327f868962ffffff168a620f42400362ffffff166141a9565b93505b50505095509550955095915050565b6000600160ff1b82106132a357600080fd5b5090565b808203828113156000831215146132bd57600080fd5b92915050565b818101828112156000831215146132bd57600080fd5b600080806000198587098686029250828110908390030390508061330f576000841161330457600080fd5b508290049050613382565b80841161331b57600080fd5b6000848688096000868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010186841190950394909402919094039290920491909117919091029150505b9392505050565b60008063ffffffff8716613430576000898661ffff1661ffff81106133aa57fe5b60408051608081018252919092015463ffffffff8082168084526401000000008304600690810b810b900b6020850152600160581b83046001600160a01b031694840194909452600160f81b90910460ff16151560608301529092508a161461341c57613419818a8988614822565b90505b806020015181604001519250925050613510565b8688036000806134458c8c858c8c8c8c6148d2565b91509150816000015163ffffffff168363ffffffff161415613477578160200151826040015194509450505050613510565b805163ffffffff8481169116141561349f578060200151816040015194509450505050613510565b8151815160208085015190840151918390039286039163ffffffff80841692908516910360060b816134cd57fe5b05028460200151018263ffffffff168263ffffffff1686604001518660400151036001600160a01b031602816134ff57fe5b048560400151019650965050505050505b97509795505050505050565b600295860b860b60009081526020979097526040909620600181018054909503909455938301805490920390915560038201805463ffffffff600160d81b6001600160a01b036701000000000000008085048216909603169094027fffffffffff0000000000000000000000000000000000000000ffffffffffffff90921691909117600681810b90960390950b66ffffffffffffff1666ffffffffffffff199095169490941782810485169095039093160263ffffffff60d81b1990931692909217905554600160801b9004600f0b90565b60008082600f0b121561365457826001600160801b03168260000384039150816001600160801b03161061364f576040805162461bcd60e51b81526020600482015260026024820152614c5360f01b604482015290519081900360640190fd5b6132bd565b826001600160801b03168284019150816001600160801b031610156132bd576040805162461bcd60e51b81526020600482015260026024820152614c4160f01b604482015290519081900360640190fd5b60006401000276a36001600160a01b038316108015906136e1575073fffd8963efd1fc6a506488495d951d5263988d266001600160a01b038316105b613716576040805162461bcd60e51b81526020600482015260016024820152602960f91b604482015290519081900360640190fd5b77ffffffffffffffffffffffffffffffffffffffff00000000602083901b166001600160801b03811160071b81811c67ffffffffffffffff811160061b90811c63ffffffff811160051b90811c61ffff811160041b90811c60ff8111600390811b91821c600f811160021b90811c918211600190811b92831c979088119617909417909217179091171717608081106137b757607f810383901c91506137c1565b80607f0383901b91505b908002607f81811c60ff83811c9190911c800280831c81831c1c800280841c81841c1c800280851c81851c1c800280861c81861c1c800280871c81871c1c800280881c81881c1c800280891c81891c1c8002808a1c818a1c1c8002808b1c818b1c1c8002808c1c818c1c1c8002808d1c818d1c1c8002808e1c9c81901c9c909c1c80029c8d901c9e9d607f198f0160401b60c09190911c678000000000000000161760c19b909b1c674000000000000000169a909a1760c29990991c672000000000000000169890981760c39790971c671000000000000000169690961760c49590951c670800000000000000169490941760c59390931c670400000000000000169290921760c69190911c670200000000000000161760c79190911c670100000000000000161760c89190911c6680000000000000161760c99190911c6640000000000000161760ca9190911c6620000000000000161760cb9190911c6610000000000000161760cc9190911c6608000000000000161760cd9190911c66040000000000001617693627a301d71055774c8581026f028f6481ab7f045a5af012a19d003aa9198101608090811d906fdb2df09e81959a81455e260799a0632f8301901d600281810b9083900b146139c257886001600160a01b03166139a682612d6d565b6001600160a01b031611156139bb57816139bd565b805b6139c4565b815b9998505050505050505050565b6000806000898961ffff1661ffff81106139e757fe5b60408051608081018252919092015463ffffffff8082168084526401000000008304600690810b810b900b6020850152600160581b83046001600160a01b031694840194909452600160f81b90910460ff161515606083015290925089161415613a575788859250925050613510565b8461ffff168461ffff16118015613a7857506001850361ffff168961ffff16145b15613a8557839150613a89565b8491505b8161ffff168960010161ffff1681613a9d57fe5b069250613aac81898989614822565b8a8461ffff1661ffff8110613abd57fe5b825191018054602084015160408501516060909501511515600160f81b027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6001600160a01b03909616600160581b027fff0000000000000000000000000000000000000000ffffffffffffffffffffff60069390930b66ffffffffffffff16640100000000026affffffffffffff000000001963ffffffff90971663ffffffff199095169490941795909516929092171692909217929092161790555097509795505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b1781529251825160009485949389169392918291908083835b60208310613c025780518252601f199092019160209182019101613be3565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114613c64576040519150601f19603f3d011682016040523d82523d6000602084013e613c69565b606091505b5091509150818015613c97575080511580613c975750808060200190516020811015613c9457600080fd5b50515b613ccd576040805162461bcd60e51b81526020600482015260026024820152612a2360f11b604482015290519081900360640190fd5b5050505050565b604080513060248083019190915282518083039091018152604490910182526020810180516001600160e01b03166370a0823160e01b17815291518151600093849384936001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001693919290918291908083835b60208310613d6d5780518252601f199092019160209182019101613d4e565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855afa9150503d8060008114613dcd576040519150601f19603f3d011682016040523d82523d6000602084013e613dd2565b606091505b5091509150818015613de657506020815110155b613def57600080fd5b808060200190516020811015613e0457600080fd5b50519250505090565b808201828110156132bd57600080fd5b604080513060248083019190915282518083039091018152604490910182526020810180516001600160e01b03166370a0823160e01b17815291518151600093849384936001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016939192909182919080838360208310613d6d5780518252601f199092019160209182019101613d4e565b6000808361ffff1611613ef3576040805162461bcd60e51b81526020600482015260016024820152604960f81b604482015290519081900360640190fd5b8261ffff168261ffff1611613f09575081613382565b825b8261ffff168161ffff161015613f4f576001858261ffff1661ffff8110613f2e57fe5b01805463ffffffff191663ffffffff92909216919091179055600101613f0b565b50909392505050565b80600f81900b8114612beb57600080fd5b6000806000613f76612bf0565b613f88846020015185604001516143a1565b6040805160e0810182526000546001600160a01b0381168252600160a01b8104600290810b810b900b602080840182905261ffff600160b81b8404811685870152600160c81b84048116606080870191909152600160d81b8504909116608086015260ff600160e81b8504811660a0870152600160f01b909404909316151560c08501528851908901519489015192890151939461402c9491939092909190614acf565b93508460600151600f0b6000146141a157846020015160020b816020015160020b12156140815761407a6140638660200151612d6d565b6140708760400151612d6d565b8760600151614c84565b92506141a1565b846040015160020b816020015160020b12156141775760045460408201516001600160801b03909116906140d3906140b7612c27565b60208501516060860151608087015160089493929187916139d1565b6000805461ffff60c81b1916600160c81b61ffff938416021761ffff60b81b1916600160b81b939092169290920217905581516040870151614123919061411990612d6d565b8860600151614c84565b93506141416141358760200151612d6d565b83516060890151614cc8565b92506141518187606001516135ef565b600480546001600160801b0319166001600160801b0392909216919091179055506141a1565b61419e6141878660200151612d6d565b6141948760400151612d6d565b8760600151614cc8565b91505b509193909250565b60006141b68484846132d9565b9050600082806141c257fe5b84860911156133825760001981106141d957600080fd5b6001019392505050565b6040805160609490941b6bffffffffffffffffffffffff1916602080860191909152600293840b60e890811b60348701529290930b90911b60378401528051808403601a018152603a90930181528251928201929092206000908152929052902090565b60608060008361ffff1611614287576040805162461bcd60e51b81526020600482015260016024820152604960f81b604482015290519081900360640190fd5b865167ffffffffffffffff8111801561429f57600080fd5b506040519080825280602002602001820160405280156142c9578160200160208202803683370190505b509150865167ffffffffffffffff811180156142e457600080fd5b5060405190808252806020026020018201604052801561430e578160200160208202803683370190505b50905060005b87518110156143945761433f8a8a8a848151811061432e57fe5b60200260200101518a8a8a8a613389565b84838151811061434b57fe5b6020026020010184848151811061435e57fe5b60200260200101826001600160a01b03166001600160a01b03168152508260060b60060b81525050508080600101915050614314565b5097509795505050505050565b8060020b8260020b126143e1576040805162461bcd60e51b8152602060048201526003602482015262544c5560e81b604482015290519081900360640190fd5b620d89e719600283900b1215614424576040805162461bcd60e51b8152602060048201526003602482015262544c4d60e81b604482015290519081900360640190fd5b620d89e8600282900b1315614466576040805162461bcd60e51b815260206004820152600360248201526254554d60e81b604482015290519081900360640190fd5b5050565b6040805160808101825263ffffffff9283168082526000602083018190529282019290925260016060909101819052835463ffffffff1916909117909116600160f81b17909155908190565b60020b600881901d9161010090910790565b60008082116144d657600080fd5b600160801b82106144e957608091821c91015b68010000000000000000821061450157604091821c91015b640100000000821061451557602091821c91015b62010000821061452757601091821c91015b610100821061453857600891821c91015b6010821061454857600491821c91015b6004821061455857600291821c91015b60028210612beb57600101919050565b600080821161457657600080fd5b5060ff6001600160801b0382161561459157607f1901614599565b608082901c91505b67ffffffffffffffff8216156145b257603f19016145ba565b604082901c91505b63ffffffff8216156145cf57601f19016145d7565b602082901c91505b61ffff8216156145ea57600f19016145f2565b601082901c91505b60ff821615614604576007190161460c565b600882901c91505b600f82161561461e5760031901614626565b600482901c91505b60038216156146385760011901614640565b600282901c91505b6001821615612beb5760001901919050565b6000836001600160a01b0316856001600160a01b03161115614672579293925b8161469f5761469a836001600160801b03168686036001600160a01b0316600160601b6132d9565b6146c2565b6146c2836001600160801b03168686036001600160a01b0316600160601b6141a9565b90505b949350505050565b6000836001600160a01b0316856001600160a01b031611156146ed579293925b7bffffffffffffffffffffffffffffffff000000000000000000000000606084901b166001600160a01b03868603811690871661472957600080fd5b8361475957866001600160a01b031661474c8383896001600160a01b03166132d9565b8161475357fe5b0461477f565b61477f6147708383896001600160a01b03166141a9565b886001600160a01b0316614cf7565b979650505050505050565b600080856001600160a01b0316116147a157600080fd5b6000846001600160801b0316116147b757600080fd5b816147c95761469a8585856001614d02565b6146c28585856001614de3565b600080856001600160a01b0316116147ed57600080fd5b6000846001600160801b03161161480357600080fd5b816148155761469a8585856000614de3565b6146c28585856000614d02565b61482a61564a565b600085600001518503905060405180608001604052808663ffffffff1681526020018263ffffffff168660020b0288602001510160060b81526020016000856001600160801b03161161487e576001614880565b845b6001600160801b031673ffffffff00000000000000000000000000000000608085901b16816148ab57fe5b048860400151016001600160a01b0316815260200160011515815250915050949350505050565b6148da61564a565b6148e261564a565b888561ffff1661ffff81106148f357fe5b60408051608081018252919092015463ffffffff81168083526401000000008204600690810b810b900b6020840152600160581b82046001600160a01b031693830193909352600160f81b900460ff1615156060820152925061495890899089614ed8565b15614990578663ffffffff16826000015163ffffffff16141561497a57613510565b8161498783898988614822565b91509150613510565b888361ffff168660010161ffff16816149a557fe5b0661ffff1661ffff81106149b557fe5b60408051608081018252929091015463ffffffff811683526401000000008104600690810b810b900b60208401526001600160a01b03600160581b8204169183019190915260ff600160f81b90910416151560608201819052909250614a6c57604080516080810182528a5463ffffffff811682526401000000008104600690810b810b900b6020830152600160581b81046001600160a01b031692820192909252600160f81b90910460ff161515606082015291505b614a7b88836000015189614ed8565b614ab2576040805162461bcd60e51b815260206004820152600360248201526213d31160ea1b604482015290519081900360640190fd5b614abf8989898887614f9b565b9150915097509795505050505050565b6000614ade60078787876141e3565b60015460025491925090600080600f87900b15614c24576000614aff612c27565b6000805460045492935090918291614b499160089186918591600160a01b810460020b9161ffff600160b81b83048116926001600160801b0390921691600160c81b900416613389565b9092509050614b8360058d8b8d8b8b87898b60007f000000000000000000000000000000000000000000000000000000000000000061513b565b9450614bba60058c8b8d8b8b87898b60017f000000000000000000000000000000000000000000000000000000000000000061513b565b93508415614bee57614bee60068d7f0000000000000000000000000000000000000000000000000000000000000000615325565b8315614c2057614c2060068c7f0000000000000000000000000000000000000000000000000000000000000000615325565b5050505b600080614c3660058c8c8b8a8a61538b565b9092509050614c47878a8484615437565b600089600f0b1215614c75578315614c6457614c6460058c6155cc565b8215614c7557614c7560058b6155cc565b50505050505095945050505050565b60008082600f0b12614caa57614ca5614ca085858560016146cd565b613291565b6146c5565b614cbd614ca085858560000360006146cd565b600003949350505050565b60008082600f0b12614ce457614ca5614ca08585856001614652565b614cbd614ca08585856000036000614652565b808204910615150190565b60008115614d755760006001600160a01b03841115614d3857614d3384600160601b876001600160801b03166132d9565b614d50565b6001600160801b038516606085901b81614d4e57fe5b045b9050614d6d614d686001600160a01b03881683613e0d565b6155f8565b9150506146c5565b60006001600160a01b03841115614da357614d9e84600160601b876001600160801b03166141a9565b614dba565b614dba606085901b6001600160801b038716614cf7565b905080866001600160a01b031611614dd157600080fd5b6001600160a01b0386160390506146c5565b600082614df15750836146c5565b7bffffffffffffffffffffffffffffffff000000000000000000000000606085901b168215614e91576001600160a01b03861684810290858281614e3157fe5b041415614e6257818101828110614e6057614e5683896001600160a01b0316836141a9565b93505050506146c5565b505b614e8882614e83878a6001600160a01b03168681614e7c57fe5b0490613e0d565b614cf7565b925050506146c5565b6001600160a01b03861684810290858281614ea857fe5b04148015614eb557508082115b614ebe57600080fd5b808203614e56614d68846001600160a01b038b16846141a9565b60008363ffffffff168363ffffffff1611158015614f0257508363ffffffff168263ffffffff1611155b15614f1e578163ffffffff168363ffffffff1611159050613382565b60008463ffffffff168463ffffffff1611614f46578363ffffffff1664010000000001614f4e565b8363ffffffff165b64ffffffffff16905060008563ffffffff168463ffffffff1611614f7f578363ffffffff1664010000000001614f87565b8363ffffffff165b64ffffffffff169091111595945050505050565b614fa361564a565b614fab61564a565b60008361ffff168560010161ffff1681614fc157fe5b0661ffff169050600060018561ffff16830103905060005b506002818301048961ffff87168281614fee57fe5b0661ffff8110614ffa57fe5b60408051608081018252929091015463ffffffff811683526401000000008104600690810b810b900b60208401526001600160a01b03600160581b8204169183019190915260ff600160f81b9091041615156060820181905290955061506557806001019250614fd9565b898661ffff16826001018161507657fe5b0661ffff811061508257fe5b60408051608081018252929091015463ffffffff811683526401000000008104600690810b810b900b60208401526001600160a01b03600160581b8204169183019190915260ff600160f81b909104161515606082015285519094506000906150ed908b908b614ed8565b905080801561510657506151068a8a8760000151614ed8565b15615111575061512e565b8061512157600182039250615128565b8160010193505b50614fd9565b5050509550959350505050565b60028a810b900b600090815260208c90526040812080546001600160801b031682615166828d6135ef565b9050846001600160801b0316816001600160801b031611156151b4576040805162461bcd60e51b81526020600482015260026024820152614c4f60f01b604482015290519081900360640190fd5b6001600160801b03828116159082161581141594501561528a578c60020b8e60020b1361525a57600183018b9055600283018a90556003830180547fffffffffff0000000000000000000000000000000000000000ffffffffffffff166701000000000000006001600160a01b038c16021766ffffffffffffff191666ffffffffffffff60068b900b161763ffffffff60d81b1916600160d81b63ffffffff8a16021790555b6003830180547effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff16600160f81b1790555b82546001600160801b0319166001600160801b038216178355856152d35782546152ce906152c990600160801b9004600f90810b810b908f900b6132c3565b613f58565b6152f4565b82546152f4906152c990600160801b9004600f90810b810b908f900b6132a7565b8354600f9190910b6001600160801b03908116600160801b0291161790925550909c9b505050505050505050505050565b8060020b8260020b8161533457fe5b0760020b1561534257600080fd5b60008061535d8360020b8560020b8161535757fe5b056144b6565b600191820b820b60009081526020979097526040909620805460ff9097169190911b90951890945550505050565b600285810b80820b60009081526020899052604080822088850b850b83529082209193849391929184918291908a900b126153d1575050600182015460028301546153e4565b8360010154880391508360020154870390505b6000808b60020b8b60020b121561540657505060018301546002840154615419565b84600101548a0391508460020154890390505b92909803979097039b96909503949094039850939650505050505050565b6040805160a08101825285546001600160801b0390811682526001870154602083015260028701549282019290925260038601548083166060830152600160801b900490911660808201526000600f85900b6154d65781516001600160801b03166154ce576040805162461bcd60e51b815260206004820152600260248201526104e560f41b604482015290519081900360640190fd5b5080516154e5565b81516154e290866135ef565b90505b60006155098360200151860384600001516001600160801b0316600160801b6132d9565b9050600061552f8460400151860385600001516001600160801b0316600160801b6132d9565b905086600f0b6000146155565787546001600160801b0319166001600160801b0384161788555b60018801869055600288018590556001600160801b03821615158061558457506000816001600160801b0316115b156155c2576003880180546001600160801b031981166001600160801b039182168501821617808216600160801b9182900483168501909216021790555b5050505050505050565b600290810b810b6000908152602092909252604082208281556001810183905590810182905560030155565b806001600160a01b0381168114612beb57600080fd5b6040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915290565b6040805160808101825260008082526020820181905291810182905260608101919091529056fea164736f6c6343000706000a",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106101ae5760003560e01c806370cf754a116100ee578063c45a015511610097578063ddca3f4311610071578063ddca3f4314610800578063f305839914610820578063f30dba9314610828578063f637731d146108aa576101ae565b8063c45a0155146107d1578063d0c93a7c146107d9578063d21220a7146107f8576101ae565b8063883bdbfd116100c8578063883bdbfd14610633578063a34123a71461073c578063a38807f214610776576101ae565b806370cf754a146105c65780638206a4d1146105ce57806385b66729146105f6576101ae565b80633850c7bd1161015b578063490e6cbc11610135578063490e6cbc146104705780634f1eb3d8146104fc578063514ea4bf1461054d5780635339c296146105a6576101ae565b80633850c7bd1461035b5780633c8a7d8d146103b45780634614131914610456576101ae565b80631ad8b03b1161018c5780631ad8b03b146102aa578063252c09d7146102e157806332148f6714610338576101ae565b80630dfe1681146101b3578063128acb08146101d75780631a68650214610286575b600080fd5b6101bb6108d0565b604080516001600160a01b039092168252519081900360200190f35b61026d600480360360a08110156101ed57600080fd5b6001600160a01b0382358116926020810135151592604082013592606083013516919081019060a08101608082013564010000000081111561022e57600080fd5b82018360208201111561024057600080fd5b8035906020019184600183028401116401000000008311171561026257600080fd5b5090925090506108f4565b6040805192835260208301919091528051918290030190f35b61028e6114ad565b604080516001600160801b039092168252519081900360200190f35b6102b26114bc565b60405180836001600160801b03168152602001826001600160801b031681526020019250505060405180910390f35b6102fe600480360360208110156102f757600080fd5b50356114d6565b6040805163ffffffff909516855260069390930b60208501526001600160a01b039091168383015215156060830152519081900360800190f35b6103596004803603602081101561034e57600080fd5b503561ffff1661151c565b005b610363611616565b604080516001600160a01b03909816885260029690960b602088015261ffff9485168787015292841660608701529216608085015260ff90911660a0840152151560c0830152519081900360e00190f35b61026d600480360360a08110156103ca57600080fd5b6001600160a01b03823516916020810135600290810b92604083013590910b916001600160801b036060820135169181019060a08101608082013564010000000081111561041757600080fd5b82018360208201111561042957600080fd5b8035906020019184600183028401116401000000008311171561044b57600080fd5b509092509050611666565b61045e611922565b60408051918252519081900360200190f35b6103596004803603608081101561048657600080fd5b6001600160a01b0382351691602081013591604082013591908101906080810160608201356401000000008111156104bd57600080fd5b8201836020820111156104cf57600080fd5b803590602001918460018302840111640100000000831117156104f157600080fd5b509092509050611928565b6102b2600480360360a081101561051257600080fd5b506001600160a01b03813516906020810135600290810b91604081013590910b906001600160801b0360608201358116916080013516611d83565b61056a6004803603602081101561056357600080fd5b5035611f9d565b604080516001600160801b0396871681526020810195909552848101939093529084166060840152909216608082015290519081900360a00190f35b61045e600480360360208110156105bc57600080fd5b503560010b611fda565b61028e611fec565b610359600480360360408110156105e457600080fd5b5060ff81358116916020013516612010565b6102b26004803603606081101561060c57600080fd5b506001600160a01b03813516906001600160801b036020820135811691604001351661220f565b6106a36004803603602081101561064957600080fd5b81019060208101813564010000000081111561066457600080fd5b82018360208201111561067657600080fd5b8035906020019184602083028401116401000000008311171561069857600080fd5b5090925090506124dc565b604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b838110156106e75781810151838201526020016106cf565b50505050905001838103825284818151815260200191508051906020019060200280838360005b8381101561072657818101518382015260200161070e565b5050505090500194505050505060405180910390f35b61026d6004803603606081101561075257600080fd5b508035600290810b91602081013590910b90604001356001600160801b0316612569565b6107a06004803603604081101561078c57600080fd5b508035600290810b9160200135900b6126e0565b6040805160069490940b84526001600160a01b03909216602084015263ffffffff1682820152519081900360600190f35b6101bb6128d7565b6107e16128fb565b6040805160029290920b8252519081900360200190f35b6101bb61291f565b610808612943565b6040805162ffffff9092168252519081900360200190f35b61045e612967565b6108486004803603602081101561083e57600080fd5b503560020b61296d565b604080516001600160801b039099168952600f9790970b602089015287870195909552606087019390935260069190910b60808601526001600160a01b031660a085015263ffffffff1660c0840152151560e083015251908190036101000190f35b610359600480360360208110156108c057600080fd5b50356001600160a01b03166129db565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000806108ff612bf0565b85610936576040805162461bcd60e51b8152602060048201526002602482015261415360f01b604482015290519081900360640190fd5b6040805160e0810182526000546001600160a01b0381168252600160a01b8104600290810b810b900b602083015261ffff600160b81b8204811693830193909352600160c81b810483166060830152600160d81b8104909216608082015260ff600160e81b8304811660a0830152600160f01b909204909116151560c082018190526109ef576040805162461bcd60e51b81526020600482015260036024820152624c4f4b60e81b604482015290519081900360640190fd5b87610a3a5780600001516001600160a01b0316866001600160a01b0316118015610a35575073fffd8963efd1fc6a506488495d951d5263988d266001600160a01b038716105b610a6c565b80600001516001600160a01b0316866001600160a01b0316108015610a6c57506401000276a36001600160a01b038716115b610aa3576040805162461bcd60e51b815260206004820152600360248201526214d41360ea1b604482015290519081900360640190fd5b6000805460ff60f01b191681556040805160c08101909152808a610ad25760048460a0015160ff16901c610ae5565b60108460a0015160ff1681610ae357fe5b065b60ff1681526004546001600160801b03166020820152604001610b06612c27565b63ffffffff168152602001600060060b815260200160006001600160a01b031681526020016000151581525090506000808913905060006040518060e001604052808b81526020016000815260200185600001516001600160a01b03168152602001856020015160020b81526020018c610b8257600254610b86565b6001545b815260200160006001600160801b0316815260200184602001516001600160801b031681525090505b805115801590610bd55750886001600160a01b031681604001516001600160a01b031614155b15610f9f57610be261560e565b60408201516001600160a01b031681526060820151610c25906006907f00000000000000000000000000000000000000000000000000000000000000008f612c2b565b15156040830152600290810b810b60208301819052620d89e719910b1215610c5657620d89e7196020820152610c75565b6020810151620d89e860029190910b1315610c7557620d89e860208201525b610c828160200151612d6d565b6001600160a01b031660608201526040820151610d13908d610cbc578b6001600160a01b031683606001516001600160a01b031611610cd6565b8b6001600160a01b031683606001516001600160a01b0316105b610ce4578260600151610ce6565b8b5b60c085015185517f000000000000000000000000000000000000000000000000000000000000000061309f565b60c085015260a084015260808301526001600160a01b031660408301528215610d7557610d498160c00151826080015101613291565b825103825260a0810151610d6b90610d6090613291565b6020840151906132a7565b6020830152610db0565b610d828160a00151613291565b825101825260c08101516080820151610daa91610d9f9101613291565b6020840151906132c3565b60208301525b835160ff1615610df6576000846000015160ff168260c0015181610dd057fe5b60c0840180519290910491829003905260a0840180519091016001600160801b03169052505b60c08201516001600160801b031615610e3557610e298160c00151600160801b8460c001516001600160801b03166132d9565b60808301805190910190525b80606001516001600160a01b031682604001516001600160a01b03161415610f5e57806040015115610f35578360a00151610ebf57610e9d846040015160008760200151886040015188602001518a606001516008613389909695949392919063ffffffff16565b6001600160a01b03166080860152600690810b900b6060850152600160a08501525b6000610f0b82602001518e610ed657600154610edc565b84608001515b8f610eeb578560800151610eef565b6002545b608089015160608a015160408b0151600595949392919061351c565b90508c15610f17576000035b610f258360c00151826135ef565b6001600160801b031660c0840152505b8b610f44578060200151610f4d565b60018160200151035b600290810b900b6060830152610f99565b80600001516001600160a01b031682604001516001600160a01b031614610f9957610f8c82604001516136a5565b600290810b900b60608301525b50610baf565b836020015160020b816060015160020b1461107a57600080610fed86604001518660400151886020015188602001518a606001518b6080015160086139d1909695949392919063ffffffff16565b604085015160608601516000805461ffff60c81b1916600160c81b61ffff958616021761ffff60b81b1916600160b81b95909416949094029290921762ffffff60a01b1916600160a01b62ffffff60029490940b93909316929092029190911773ffffffffffffffffffffffffffffffffffffffff19166001600160a01b03909116179055506110ac9050565b60408101516000805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b039092169190911790555b8060c001516001600160801b031683602001516001600160801b0316146110f25760c0810151600480546001600160801b0319166001600160801b039092169190911790555b8a1561114257608081015160015560a08101516001600160801b03161561113d5760a0810151600380546001600160801b031981166001600160801b03918216909301169190911790555b611188565b608081015160025560a08101516001600160801b0316156111885760a0810151600380546001600160801b03808216600160801b92839004821690940116029190911790555b8115158b1515146111a157602081015181518b036111ae565b80600001518a0381602001515b90965094508a156112e75760008512156111f0576111f07f00000000000000000000000000000000000000000000000000000000000000008d87600003613b86565b60006111fa613cd4565b9050336001600160a01b031663fa461e3388888c8c6040518563ffffffff1660e01b815260040180858152602001848152602001806020018281038252848482818152602001925080828437600081840152601f19601f82011690508083019250505095505050505050600060405180830381600087803b15801561127e57600080fd5b505af1158015611292573d6000803e3d6000fd5b5050505061129e613cd4565b6112a88289613e0d565b11156112e1576040805162461bcd60e51b815260206004820152600360248201526249494160e81b604482015290519081900360640190fd5b50611411565b600086121561131e5761131e7f00000000000000000000000000000000000000000000000000000000000000008d88600003613b86565b6000611328613e1d565b9050336001600160a01b031663fa461e3388888c8c6040518563ffffffff1660e01b815260040180858152602001848152602001806020018281038252848482818152602001925080828437600081840152601f19601f82011690508083019250505095505050505050600060405180830381600087803b1580156113ac57600080fd5b505af11580156113c0573d6000803e3d6000fd5b505050506113cc613e1d565b6113d68288613e0d565b111561140f576040805162461bcd60e51b815260206004820152600360248201526249494160e81b604482015290519081900360640190fd5b505b60408082015160c083015160608085015184518b8152602081018b90526001600160a01b03948516818701526001600160801b039093169183019190915260020b60808201529151908e169133917fc42079f94a6350d7e6235f29174924f928cc2ac818eb64fed8004e115fbcca679181900360a00190a350506000805460ff60f01b1916600160f01b17905550919890975095505050505050565b6004546001600160801b031681565b6003546001600160801b0380821691600160801b90041682565b60088161ffff81106114e757600080fd5b015463ffffffff81169150640100000000810460060b90600160581b81046001600160a01b031690600160f81b900460ff1684565b600054600160f01b900460ff16611560576040805162461bcd60e51b81526020600482015260036024820152624c4f4b60e81b604482015290519081900360640190fd5b6000805460ff60f01b19169055611575612bf0565b60008054600160d81b900461ffff169061159160088385613eb5565b6000805461ffff808416600160d81b810261ffff60d81b19909316929092179092559192508316146115fe576040805161ffff80851682528316602082015281517fac49e518f90a358f652e4400164f05a5d8f7e35e7747279bc3a93dbf584e125a929181900390910190a15b50506000805460ff60f01b1916600160f01b17905550565b6000546001600160a01b03811690600160a01b810460020b9061ffff600160b81b8204811691600160c81b8104821691600160d81b8204169060ff600160e81b8204811691600160f01b90041687565b600080548190600160f01b900460ff166116ad576040805162461bcd60e51b81526020600482015260036024820152624c4f4b60e81b604482015290519081900360640190fd5b6000805460ff60f01b191690556001600160801b0385166116cd57600080fd5b60008061171b60405180608001604052808c6001600160a01b031681526020018b60020b81526020018a60020b81526020016117118a6001600160801b0316613f58565b600f0b9052613f69565b9250925050819350809250600080600086111561173d5761173a613cd4565b91505b841561174e5761174b613e1d565b90505b336001600160a01b031663d348799787878b8b6040518563ffffffff1660e01b815260040180858152602001848152602001806020018281038252848482818152602001925080828437600081840152601f19601f82011690508083019250505095505050505050600060405180830381600087803b1580156117d057600080fd5b505af11580156117e4573d6000803e3d6000fd5b50505050600086111561183b576117f9613cd4565b6118038388613e0d565b111561183b576040805162461bcd60e51b815260206004820152600260248201526104d360f41b604482015290519081900360640190fd5b841561188b57611849613e1d565b6118538287613e0d565b111561188b576040805162461bcd60e51b81526020600482015260026024820152614d3160f01b604482015290519081900360640190fd5b8960020b8b60020b8d6001600160a01b03167f7a53080ba414158be7ec69b987b5fb7d07dee101fe85488f0853ae16239d0bde338d8b8b60405180856001600160a01b03168152602001846001600160801b0316815260200183815260200182815260200194505050505060405180910390a450506000805460ff60f01b1916600160f01b17905550919890975095505050505050565b60025481565b600054600160f01b900460ff1661196c576040805162461bcd60e51b81526020600482015260036024820152624c4f4b60e81b604482015290519081900360640190fd5b6000805460ff60f01b19169055611981612bf0565b6004546001600160801b0316806119c3576040805162461bcd60e51b81526020600482015260016024820152601360fa1b604482015290519081900360640190fd5b60006119f8867f000000000000000000000000000000000000000000000000000000000000000062ffffff16620f42406141a9565b90506000611a2f867f000000000000000000000000000000000000000000000000000000000000000062ffffff16620f42406141a9565b90506000611a3b613cd4565b90506000611a47613e1d565b90508815611a7a57611a7a7f00000000000000000000000000000000000000000000000000000000000000008b8b613b86565b8715611aab57611aab7f00000000000000000000000000000000000000000000000000000000000000008b8a613b86565b336001600160a01b031663e9cbafb085858a8a6040518563ffffffff1660e01b815260040180858152602001848152602001806020018281038252848482818152602001925080828437600081840152601f19601f82011690508083019250505095505050505050600060405180830381600087803b158015611b2d57600080fd5b505af1158015611b41573d6000803e3d6000fd5b505050506000611b4f613cd4565b90506000611b5b613e1d565b905081611b688588613e0d565b1115611ba0576040805162461bcd60e51b8152602060048201526002602482015261046360f41b604482015290519081900360640190fd5b80611bab8487613e0d565b1115611be3576040805162461bcd60e51b8152602060048201526002602482015261463160f01b604482015290519081900360640190fd5b8382038382038115611c725760008054600160e81b9004600f16908115611c16578160ff168481611c1057fe5b04611c19565b60005b90506001600160801b03811615611c4c57600380546001600160801b038082168401166001600160801b03199091161790555b611c66818503600160801b8d6001600160801b03166132d9565b60018054909101905550505b8015611cfd5760008054600160e81b900460041c600f16908115611ca2578160ff168381611c9c57fe5b04611ca5565b60005b90506001600160801b03811615611cd757600380546001600160801b03600160801b8083048216850182160291161790555b611cf1818403600160801b8d6001600160801b03166132d9565b60028054909101905550505b8d6001600160a01b0316336001600160a01b03167fbdbdb71d7860376ba52b25a5028beea23581364a40522f6bcfb86bb1f2dca6338f8f86866040518085815260200184815260200183815260200182815260200194505050505060405180910390a350506000805460ff60f01b1916600160f01b179055505050505050505050505050565b600080548190600160f01b900460ff16611dca576040805162461bcd60e51b81526020600482015260036024820152624c4f4b60e81b604482015290519081900360640190fd5b6000805460ff60f01b19168155611de460073389896141e3565b60038101549091506001600160801b0390811690861611611e055784611e14565b60038101546001600160801b03165b60038201549093506001600160801b03600160801b909104811690851611611e3c5783611e52565b6003810154600160801b90046001600160801b03165b91506001600160801b03831615611eb7576003810180546001600160801b031981166001600160801b03918216869003821617909155611eb7907f0000000000000000000000000000000000000000000000000000000000000000908a908616613b86565b6001600160801b03821615611f1d576003810180546001600160801b03600160801b808304821686900382160291811691909117909155611f1d907f0000000000000000000000000000000000000000000000000000000000000000908a908516613b86565b604080516001600160a01b038a1681526001600160801b0380861660208301528416818301529051600288810b92908a900b9133917f70935338e69775456a85ddef226c395fb668b63fa0115f5f20610b388e6ca9c0919081900360600190a4506000805460ff60f01b1916600160f01b17905590969095509350505050565b60076020526000908152604090208054600182015460028301546003909301546001600160801b0392831693919281811691600160801b90041685565b60066020526000908152604090205481565b7f000000000000000000000000000000000000000000000000000000000000000081565b600054600160f01b900460ff16612054576040805162461bcd60e51b81526020600482015260036024820152624c4f4b60e81b604482015290519081900360640190fd5b6000805460ff60f01b1916905560408051638da5cb5b60e01b815290516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001691638da5cb5b916004808301926020929190829003018186803b1580156120c157600080fd5b505afa1580156120d5573d6000803e3d6000fd5b505050506040513d60208110156120eb57600080fd5b50516001600160a01b0316331461210157600080fd5b60ff82161580612124575060048260ff16101580156121245750600a8260ff1611155b801561214e575060ff8116158061214e575060048160ff161015801561214e5750600a8160ff1611155b61215757600080fd5b60008054610ff0600484901b16840160ff908116600160e81b9081027fffff00ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff841617909355919004167f973d8d92bb299f4af6ce49b52a8adb85ae46b9f214c4c4fc06ac77401237b1336010826040805160ff9390920683168252600f600486901c16602083015286831682820152918516606082015290519081900360800190a150506000805460ff60f01b1916600160f01b17905550565b600080548190600160f01b900460ff16612256576040805162461bcd60e51b81526020600482015260036024820152624c4f4b60e81b604482015290519081900360640190fd5b6000805460ff60f01b1916905560408051638da5cb5b60e01b815290516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001691638da5cb5b916004808301926020929190829003018186803b1580156122c357600080fd5b505afa1580156122d7573d6000803e3d6000fd5b505050506040513d60208110156122ed57600080fd5b50516001600160a01b0316331461230357600080fd5b6003546001600160801b039081169085161161231f578361232c565b6003546001600160801b03165b6003549092506001600160801b03600160801b9091048116908416116123525782612366565b600354600160801b90046001600160801b03165b90506001600160801b038216156123e7576003546001600160801b038381169116141561239557600019909101905b600380546001600160801b031981166001600160801b039182168590038216179091556123e7907f00000000000000000000000000000000000000000000000000000000000000009087908516613b86565b6001600160801b0381161561246d576003546001600160801b03828116600160801b90920416141561241857600019015b600380546001600160801b03600160801b80830482168590038216029181169190911790915561246d907f00000000000000000000000000000000000000000000000000000000000000009087908416613b86565b604080516001600160801b0380851682528316602082015281516001600160a01b0388169233927f596b573906218d3411850b26a6b437d6c4522fdb43d2d2386263f86d50b8b151929081900390910190a36000805460ff60f01b1916600160f01b1790559094909350915050565b6060806124e7612bf0565b61255e6124f2612c27565b858580806020026020016040519081016040528093929190818152602001838360200280828437600092018290525054600454600896959450600160a01b820460020b935061ffff600160b81b8304811693506001600160801b0390911691600160c81b900416614247565b915091509250929050565b600080548190600160f01b900460ff166125b0576040805162461bcd60e51b81526020600482015260036024820152624c4f4b60e81b604482015290519081900360640190fd5b6000805460ff60f01b1916815560408051608081018252338152600288810b602083015287900b918101919091528190819061260990606081016125fc6001600160801b038a16613f58565b600003600f0b9052613f69565b925092509250816000039450806000039350600085118061262a5750600084115b15612669576003830180546001600160801b038082168089018216600160801b93849004831689019092169092029091176001600160801b0319161790555b604080516001600160801b0388168152602081018790528082018690529051600289810b92908b900b9133917f0c396cd989a39f4459b5fa1aed6a9a8dcdbc45908acfd67e028cd568da98982c919081900360600190a450506000805460ff60f01b1916600160f01b179055509094909350915050565b60008060006126ed612bf0565b6126f785856143a1565b600285810b810b60009081526005602052604080822087840b90930b825281206003830154600681900b9367010000000000000082046001600160a01b0316928492600160d81b810463ffffffff169284929091600160f81b900460ff168061275f57600080fd5b6003820154600681900b985067010000000000000081046001600160a01b03169650600160d81b810463ffffffff169450600160f81b900460ff16806127a457600080fd5b50506040805160e0810182526000546001600160a01b0381168252600160a01b8104600290810b810b810b6020840181905261ffff600160b81b8404811695850195909552600160c81b830485166060850152600160d81b8304909416608084015260ff600160e81b8304811660a0850152600160f01b909204909116151560c08301529093508e810b91900b1215905061284d575093909403965090039350900390506128d0565b8a60020b816020015160020b12156128c1576000612869612c27565b602083015160408401516004546060860151939450600093849361289f936008938893879392916001600160801b031690613389565b9a9003989098039b5050949096039290920396509091030392506128d0915050565b50949093039650039350900390505b9250925092565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b60015481565b60056020526000908152604090208054600182015460028301546003909301546001600160801b03831693600160801b909304600f0b9290600681900b9067010000000000000081046001600160a01b031690600160d81b810463ffffffff1690600160f81b900460ff1688565b6000546001600160a01b031615612a1e576040805162461bcd60e51b8152602060048201526002602482015261414960f01b604482015290519081900360640190fd5b6000612a29826136a5565b9050600080612a41612a39612c27565b60089061446a565b6040805160e0810182526001600160a01b038816808252600288810b6020808501829052600085870181905261ffff898116606088018190529089166080880181905260a08801839052600160c0909801979097528154600160f01b73ffffffffffffffffffffffffffffffffffffffff19909116871762ffffff60a01b1916600160a01b62ffffff9787900b9790971696909602959095177fffffffffff00000000ffffffffffffffffffffffffffffffffffffffffffffff16600160c81b9091021761ffff60d81b1916600160d81b909602959095177fff0000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1692909217909355835191825281019190915281519395509193507f98636036cb66a9c19a37435efc1e90142190214e8abeb821bdba3f2990dd4c9592918290030190a150505050565b60008082600281900b620d89e71981612b9957fe5b05029050600083600281900b620d89e881612bb057fe5b0502905060008460020b83830360020b81612bc757fe5b0560010190508062ffffff166001600160801b03801681612be457fe5b0493505050505b919050565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614612c2557600080fd5b565b4290565b60008060008460020b8660020b81612c3f57fe5b05905060008660020b128015612c6657508460020b8660020b81612c5f57fe5b0760020b15155b15612c7057600019015b8315612ce557600080612c82836144b6565b600182810b810b600090815260208d9052604090205460ff83169190911b80016000190190811680151597509294509092509085612cc757888360ff16860302612cda565b88612cd1826144c8565b840360ff168603025b965050505050612d63565b600080612cf4836001016144b6565b91509150600060018260ff166001901b031990506000818b60008660010b60010b8152602001908152602001600020541690508060001415955085612d4657888360ff0360ff16866001010102612d5c565b8883612d5183614568565b0360ff168660010101025b9650505050505b5094509492505050565b60008060008360020b12612d84578260020b612d8c565b8260020b6000035b9050620d89e8811115612dca576040805162461bcd60e51b81526020600482015260016024820152601560fa1b604482015290519081900360640190fd5b600060018216612dde57600160801b612df0565b6ffffcb933bd6fad37aa2d162d1a5940015b70ffffffffffffffffffffffffffffffffff1690506002821615612e24576ffff97272373d413259a46990580e213a0260801c5b6004821615612e43576ffff2e50f5f656932ef12357cf3c7fdcc0260801c5b6008821615612e62576fffe5caca7e10e4e61c3624eaa0941cd00260801c5b6010821615612e81576fffcb9843d60f6159c9db58835c9266440260801c5b6020821615612ea0576fff973b41fa98c081472e6896dfb254c00260801c5b6040821615612ebf576fff2ea16466c96a3843ec78b326b528610260801c5b6080821615612ede576ffe5dee046a99a2a811c461f1969c30530260801c5b610100821615612efe576ffcbe86c7900a88aedcffc83b479aa3a40260801c5b610200821615612f1e576ff987a7253ac413176f2b074cf7815e540260801c5b610400821615612f3e576ff3392b0822b70005940c7a398e4b70f30260801c5b610800821615612f5e576fe7159475a2c29b7443b29c7fa6e889d90260801c5b611000821615612f7e576fd097f3bdfd2022b8845ad8f792aa58250260801c5b612000821615612f9e576fa9f746462d870fdf8a65dc1f90e061e50260801c5b614000821615612fbe576f70d869a156d2a1b890bb3df62baf32f70260801c5b618000821615612fde576f31be135f97d08fd981231505542fcfa60260801c5b62010000821615612fff576f09aa508b5b7a84e1c677de54f3e99bc90260801c5b6202000082161561301f576e5d6af8dedb81196699c329225ee6040260801c5b6204000082161561303e576d2216e584f5fa1ea926041bedfe980260801c5b6208000082161561305b576b048a170391f7dc42444e8fa20260801c5b60008460020b131561307657806000198161307257fe5b0490505b64010000000081061561308a57600161308d565b60005b60ff16602082901c0192505050919050565b60008080806001600160a01b03808916908a1610158187128015906131245760006130d88989620f42400362ffffff16620f42406132d9565b9050826130f1576130ec8c8c8c6001614652565b6130fe565b6130fe8b8d8c60016146cd565b955085811061310f578a965061311e565b61311b8c8b838661478a565b96505b5061316e565b8161313b576131368b8b8b60006146cd565b613148565b6131488a8c8b6000614652565b935083886000031061315c5789955061316e565b61316b8b8a8a600003856147d6565b95505b6001600160a01b038a81169087161482156131d15780801561318d5750815b6131a35761319e878d8c60016146cd565b6131a5565b855b95508080156131b2575081155b6131c8576131c3878d8c6000614652565b6131ca565b845b945061321b565b8080156131db5750815b6131f1576131ec8c888c6001614652565b6131f3565b855b9550808015613200575081155b613216576132118c888c60006146cd565b613218565b845b94505b8115801561322b57508860000385115b15613237578860000394505b81801561325657508a6001600160a01b0316876001600160a01b031614155b15613265578589039350613282565b61327f868962ffffff168a620f42400362ffffff166141a9565b93505b50505095509550955095915050565b6000600160ff1b82106132a357600080fd5b5090565b808203828113156000831215146132bd57600080fd5b92915050565b818101828112156000831215146132bd57600080fd5b600080806000198587098686029250828110908390030390508061330f576000841161330457600080fd5b508290049050613382565b80841161331b57600080fd5b6000848688096000868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010186841190950394909402919094039290920491909117919091029150505b9392505050565b60008063ffffffff8716613430576000898661ffff1661ffff81106133aa57fe5b60408051608081018252919092015463ffffffff8082168084526401000000008304600690810b810b900b6020850152600160581b83046001600160a01b031694840194909452600160f81b90910460ff16151560608301529092508a161461341c57613419818a8988614822565b90505b806020015181604001519250925050613510565b8688036000806134458c8c858c8c8c8c6148d2565b91509150816000015163ffffffff168363ffffffff161415613477578160200151826040015194509450505050613510565b805163ffffffff8481169116141561349f578060200151816040015194509450505050613510565b8151815160208085015190840151918390039286039163ffffffff80841692908516910360060b816134cd57fe5b05028460200151018263ffffffff168263ffffffff1686604001518660400151036001600160a01b031602816134ff57fe5b048560400151019650965050505050505b97509795505050505050565b600295860b860b60009081526020979097526040909620600181018054909503909455938301805490920390915560038201805463ffffffff600160d81b6001600160a01b036701000000000000008085048216909603169094027fffffffffff0000000000000000000000000000000000000000ffffffffffffff90921691909117600681810b90960390950b66ffffffffffffff1666ffffffffffffff199095169490941782810485169095039093160263ffffffff60d81b1990931692909217905554600160801b9004600f0b90565b60008082600f0b121561365457826001600160801b03168260000384039150816001600160801b03161061364f576040805162461bcd60e51b81526020600482015260026024820152614c5360f01b604482015290519081900360640190fd5b6132bd565b826001600160801b03168284019150816001600160801b031610156132bd576040805162461bcd60e51b81526020600482015260026024820152614c4160f01b604482015290519081900360640190fd5b60006401000276a36001600160a01b038316108015906136e1575073fffd8963efd1fc6a506488495d951d5263988d266001600160a01b038316105b613716576040805162461bcd60e51b81526020600482015260016024820152602960f91b604482015290519081900360640190fd5b77ffffffffffffffffffffffffffffffffffffffff00000000602083901b166001600160801b03811160071b81811c67ffffffffffffffff811160061b90811c63ffffffff811160051b90811c61ffff811160041b90811c60ff8111600390811b91821c600f811160021b90811c918211600190811b92831c979088119617909417909217179091171717608081106137b757607f810383901c91506137c1565b80607f0383901b91505b908002607f81811c60ff83811c9190911c800280831c81831c1c800280841c81841c1c800280851c81851c1c800280861c81861c1c800280871c81871c1c800280881c81881c1c800280891c81891c1c8002808a1c818a1c1c8002808b1c818b1c1c8002808c1c818c1c1c8002808d1c818d1c1c8002808e1c9c81901c9c909c1c80029c8d901c9e9d607f198f0160401b60c09190911c678000000000000000161760c19b909b1c674000000000000000169a909a1760c29990991c672000000000000000169890981760c39790971c671000000000000000169690961760c49590951c670800000000000000169490941760c59390931c670400000000000000169290921760c69190911c670200000000000000161760c79190911c670100000000000000161760c89190911c6680000000000000161760c99190911c6640000000000000161760ca9190911c6620000000000000161760cb9190911c6610000000000000161760cc9190911c6608000000000000161760cd9190911c66040000000000001617693627a301d71055774c8581026f028f6481ab7f045a5af012a19d003aa9198101608090811d906fdb2df09e81959a81455e260799a0632f8301901d600281810b9083900b146139c257886001600160a01b03166139a682612d6d565b6001600160a01b031611156139bb57816139bd565b805b6139c4565b815b9998505050505050505050565b6000806000898961ffff1661ffff81106139e757fe5b60408051608081018252919092015463ffffffff8082168084526401000000008304600690810b810b900b6020850152600160581b83046001600160a01b031694840194909452600160f81b90910460ff161515606083015290925089161415613a575788859250925050613510565b8461ffff168461ffff16118015613a7857506001850361ffff168961ffff16145b15613a8557839150613a89565b8491505b8161ffff168960010161ffff1681613a9d57fe5b069250613aac81898989614822565b8a8461ffff1661ffff8110613abd57fe5b825191018054602084015160408501516060909501511515600160f81b027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6001600160a01b03909616600160581b027fff0000000000000000000000000000000000000000ffffffffffffffffffffff60069390930b66ffffffffffffff16640100000000026affffffffffffff000000001963ffffffff90971663ffffffff199095169490941795909516929092171692909217929092161790555097509795505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b1781529251825160009485949389169392918291908083835b60208310613c025780518252601f199092019160209182019101613be3565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114613c64576040519150601f19603f3d011682016040523d82523d6000602084013e613c69565b606091505b5091509150818015613c97575080511580613c975750808060200190516020811015613c9457600080fd5b50515b613ccd576040805162461bcd60e51b81526020600482015260026024820152612a2360f11b604482015290519081900360640190fd5b5050505050565b604080513060248083019190915282518083039091018152604490910182526020810180516001600160e01b03166370a0823160e01b17815291518151600093849384936001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001693919290918291908083835b60208310613d6d5780518252601f199092019160209182019101613d4e565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855afa9150503d8060008114613dcd576040519150601f19603f3d011682016040523d82523d6000602084013e613dd2565b606091505b5091509150818015613de657506020815110155b613def57600080fd5b808060200190516020811015613e0457600080fd5b50519250505090565b808201828110156132bd57600080fd5b604080513060248083019190915282518083039091018152604490910182526020810180516001600160e01b03166370a0823160e01b17815291518151600093849384936001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016939192909182919080838360208310613d6d5780518252601f199092019160209182019101613d4e565b6000808361ffff1611613ef3576040805162461bcd60e51b81526020600482015260016024820152604960f81b604482015290519081900360640190fd5b8261ffff168261ffff1611613f09575081613382565b825b8261ffff168161ffff161015613f4f576001858261ffff1661ffff8110613f2e57fe5b01805463ffffffff191663ffffffff92909216919091179055600101613f0b565b50909392505050565b80600f81900b8114612beb57600080fd5b6000806000613f76612bf0565b613f88846020015185604001516143a1565b6040805160e0810182526000546001600160a01b0381168252600160a01b8104600290810b810b900b602080840182905261ffff600160b81b8404811685870152600160c81b84048116606080870191909152600160d81b8504909116608086015260ff600160e81b8504811660a0870152600160f01b909404909316151560c08501528851908901519489015192890151939461402c9491939092909190614acf565b93508460600151600f0b6000146141a157846020015160020b816020015160020b12156140815761407a6140638660200151612d6d565b6140708760400151612d6d565b8760600151614c84565b92506141a1565b846040015160020b816020015160020b12156141775760045460408201516001600160801b03909116906140d3906140b7612c27565b60208501516060860151608087015160089493929187916139d1565b6000805461ffff60c81b1916600160c81b61ffff938416021761ffff60b81b1916600160b81b939092169290920217905581516040870151614123919061411990612d6d565b8860600151614c84565b93506141416141358760200151612d6d565b83516060890151614cc8565b92506141518187606001516135ef565b600480546001600160801b0319166001600160801b0392909216919091179055506141a1565b61419e6141878660200151612d6d565b6141948760400151612d6d565b8760600151614cc8565b91505b509193909250565b60006141b68484846132d9565b9050600082806141c257fe5b84860911156133825760001981106141d957600080fd5b6001019392505050565b6040805160609490941b6bffffffffffffffffffffffff1916602080860191909152600293840b60e890811b60348701529290930b90911b60378401528051808403601a018152603a90930181528251928201929092206000908152929052902090565b60608060008361ffff1611614287576040805162461bcd60e51b81526020600482015260016024820152604960f81b604482015290519081900360640190fd5b865167ffffffffffffffff8111801561429f57600080fd5b506040519080825280602002602001820160405280156142c9578160200160208202803683370190505b509150865167ffffffffffffffff811180156142e457600080fd5b5060405190808252806020026020018201604052801561430e578160200160208202803683370190505b50905060005b87518110156143945761433f8a8a8a848151811061432e57fe5b60200260200101518a8a8a8a613389565b84838151811061434b57fe5b6020026020010184848151811061435e57fe5b60200260200101826001600160a01b03166001600160a01b03168152508260060b60060b81525050508080600101915050614314565b5097509795505050505050565b8060020b8260020b126143e1576040805162461bcd60e51b8152602060048201526003602482015262544c5560e81b604482015290519081900360640190fd5b620d89e719600283900b1215614424576040805162461bcd60e51b8152602060048201526003602482015262544c4d60e81b604482015290519081900360640190fd5b620d89e8600282900b1315614466576040805162461bcd60e51b815260206004820152600360248201526254554d60e81b604482015290519081900360640190fd5b5050565b6040805160808101825263ffffffff9283168082526000602083018190529282019290925260016060909101819052835463ffffffff1916909117909116600160f81b17909155908190565b60020b600881901d9161010090910790565b60008082116144d657600080fd5b600160801b82106144e957608091821c91015b68010000000000000000821061450157604091821c91015b640100000000821061451557602091821c91015b62010000821061452757601091821c91015b610100821061453857600891821c91015b6010821061454857600491821c91015b6004821061455857600291821c91015b60028210612beb57600101919050565b600080821161457657600080fd5b5060ff6001600160801b0382161561459157607f1901614599565b608082901c91505b67ffffffffffffffff8216156145b257603f19016145ba565b604082901c91505b63ffffffff8216156145cf57601f19016145d7565b602082901c91505b61ffff8216156145ea57600f19016145f2565b601082901c91505b60ff821615614604576007190161460c565b600882901c91505b600f82161561461e5760031901614626565b600482901c91505b60038216156146385760011901614640565b600282901c91505b6001821615612beb5760001901919050565b6000836001600160a01b0316856001600160a01b03161115614672579293925b8161469f5761469a836001600160801b03168686036001600160a01b0316600160601b6132d9565b6146c2565b6146c2836001600160801b03168686036001600160a01b0316600160601b6141a9565b90505b949350505050565b6000836001600160a01b0316856001600160a01b031611156146ed579293925b7bffffffffffffffffffffffffffffffff000000000000000000000000606084901b166001600160a01b03868603811690871661472957600080fd5b8361475957866001600160a01b031661474c8383896001600160a01b03166132d9565b8161475357fe5b0461477f565b61477f6147708383896001600160a01b03166141a9565b886001600160a01b0316614cf7565b979650505050505050565b600080856001600160a01b0316116147a157600080fd5b6000846001600160801b0316116147b757600080fd5b816147c95761469a8585856001614d02565b6146c28585856001614de3565b600080856001600160a01b0316116147ed57600080fd5b6000846001600160801b03161161480357600080fd5b816148155761469a8585856000614de3565b6146c28585856000614d02565b61482a61564a565b600085600001518503905060405180608001604052808663ffffffff1681526020018263ffffffff168660020b0288602001510160060b81526020016000856001600160801b03161161487e576001614880565b845b6001600160801b031673ffffffff00000000000000000000000000000000608085901b16816148ab57fe5b048860400151016001600160a01b0316815260200160011515815250915050949350505050565b6148da61564a565b6148e261564a565b888561ffff1661ffff81106148f357fe5b60408051608081018252919092015463ffffffff81168083526401000000008204600690810b810b900b6020840152600160581b82046001600160a01b031693830193909352600160f81b900460ff1615156060820152925061495890899089614ed8565b15614990578663ffffffff16826000015163ffffffff16141561497a57613510565b8161498783898988614822565b91509150613510565b888361ffff168660010161ffff16816149a557fe5b0661ffff1661ffff81106149b557fe5b60408051608081018252929091015463ffffffff811683526401000000008104600690810b810b900b60208401526001600160a01b03600160581b8204169183019190915260ff600160f81b90910416151560608201819052909250614a6c57604080516080810182528a5463ffffffff811682526401000000008104600690810b810b900b6020830152600160581b81046001600160a01b031692820192909252600160f81b90910460ff161515606082015291505b614a7b88836000015189614ed8565b614ab2576040805162461bcd60e51b815260206004820152600360248201526213d31160ea1b604482015290519081900360640190fd5b614abf8989898887614f9b565b9150915097509795505050505050565b6000614ade60078787876141e3565b60015460025491925090600080600f87900b15614c24576000614aff612c27565b6000805460045492935090918291614b499160089186918591600160a01b810460020b9161ffff600160b81b83048116926001600160801b0390921691600160c81b900416613389565b9092509050614b8360058d8b8d8b8b87898b60007f000000000000000000000000000000000000000000000000000000000000000061513b565b9450614bba60058c8b8d8b8b87898b60017f000000000000000000000000000000000000000000000000000000000000000061513b565b93508415614bee57614bee60068d7f0000000000000000000000000000000000000000000000000000000000000000615325565b8315614c2057614c2060068c7f0000000000000000000000000000000000000000000000000000000000000000615325565b5050505b600080614c3660058c8c8b8a8a61538b565b9092509050614c47878a8484615437565b600089600f0b1215614c75578315614c6457614c6460058c6155cc565b8215614c7557614c7560058b6155cc565b50505050505095945050505050565b60008082600f0b12614caa57614ca5614ca085858560016146cd565b613291565b6146c5565b614cbd614ca085858560000360006146cd565b600003949350505050565b60008082600f0b12614ce457614ca5614ca08585856001614652565b614cbd614ca08585856000036000614652565b808204910615150190565b60008115614d755760006001600160a01b03841115614d3857614d3384600160601b876001600160801b03166132d9565b614d50565b6001600160801b038516606085901b81614d4e57fe5b045b9050614d6d614d686001600160a01b03881683613e0d565b6155f8565b9150506146c5565b60006001600160a01b03841115614da357614d9e84600160601b876001600160801b03166141a9565b614dba565b614dba606085901b6001600160801b038716614cf7565b905080866001600160a01b031611614dd157600080fd5b6001600160a01b0386160390506146c5565b600082614df15750836146c5565b7bffffffffffffffffffffffffffffffff000000000000000000000000606085901b168215614e91576001600160a01b03861684810290858281614e3157fe5b041415614e6257818101828110614e6057614e5683896001600160a01b0316836141a9565b93505050506146c5565b505b614e8882614e83878a6001600160a01b03168681614e7c57fe5b0490613e0d565b614cf7565b925050506146c5565b6001600160a01b03861684810290858281614ea857fe5b04148015614eb557508082115b614ebe57600080fd5b808203614e56614d68846001600160a01b038b16846141a9565b60008363ffffffff168363ffffffff1611158015614f0257508363ffffffff168263ffffffff1611155b15614f1e578163ffffffff168363ffffffff1611159050613382565b60008463ffffffff168463ffffffff1611614f46578363ffffffff1664010000000001614f4e565b8363ffffffff165b64ffffffffff16905060008563ffffffff168463ffffffff1611614f7f578363ffffffff1664010000000001614f87565b8363ffffffff165b64ffffffffff169091111595945050505050565b614fa361564a565b614fab61564a565b60008361ffff168560010161ffff1681614fc157fe5b0661ffff169050600060018561ffff16830103905060005b506002818301048961ffff87168281614fee57fe5b0661ffff8110614ffa57fe5b60408051608081018252929091015463ffffffff811683526401000000008104600690810b810b900b60208401526001600160a01b03600160581b8204169183019190915260ff600160f81b9091041615156060820181905290955061506557806001019250614fd9565b898661ffff16826001018161507657fe5b0661ffff811061508257fe5b60408051608081018252929091015463ffffffff811683526401000000008104600690810b810b900b60208401526001600160a01b03600160581b8204169183019190915260ff600160f81b909104161515606082015285519094506000906150ed908b908b614ed8565b905080801561510657506151068a8a8760000151614ed8565b15615111575061512e565b8061512157600182039250615128565b8160010193505b50614fd9565b5050509550959350505050565b60028a810b900b600090815260208c90526040812080546001600160801b031682615166828d6135ef565b9050846001600160801b0316816001600160801b031611156151b4576040805162461bcd60e51b81526020600482015260026024820152614c4f60f01b604482015290519081900360640190fd5b6001600160801b03828116159082161581141594501561528a578c60020b8e60020b1361525a57600183018b9055600283018a90556003830180547fffffffffff0000000000000000000000000000000000000000ffffffffffffff166701000000000000006001600160a01b038c16021766ffffffffffffff191666ffffffffffffff60068b900b161763ffffffff60d81b1916600160d81b63ffffffff8a16021790555b6003830180547effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff16600160f81b1790555b82546001600160801b0319166001600160801b038216178355856152d35782546152ce906152c990600160801b9004600f90810b810b908f900b6132c3565b613f58565b6152f4565b82546152f4906152c990600160801b9004600f90810b810b908f900b6132a7565b8354600f9190910b6001600160801b03908116600160801b0291161790925550909c9b505050505050505050505050565b8060020b8260020b8161533457fe5b0760020b1561534257600080fd5b60008061535d8360020b8560020b8161535757fe5b056144b6565b600191820b820b60009081526020979097526040909620805460ff9097169190911b90951890945550505050565b600285810b80820b60009081526020899052604080822088850b850b83529082209193849391929184918291908a900b126153d1575050600182015460028301546153e4565b8360010154880391508360020154870390505b6000808b60020b8b60020b121561540657505060018301546002840154615419565b84600101548a0391508460020154890390505b92909803979097039b96909503949094039850939650505050505050565b6040805160a08101825285546001600160801b0390811682526001870154602083015260028701549282019290925260038601548083166060830152600160801b900490911660808201526000600f85900b6154d65781516001600160801b03166154ce576040805162461bcd60e51b815260206004820152600260248201526104e560f41b604482015290519081900360640190fd5b5080516154e5565b81516154e290866135ef565b90505b60006155098360200151860384600001516001600160801b0316600160801b6132d9565b9050600061552f8460400151860385600001516001600160801b0316600160801b6132d9565b905086600f0b6000146155565787546001600160801b0319166001600160801b0384161788555b60018801869055600288018590556001600160801b03821615158061558457506000816001600160801b0316115b156155c2576003880180546001600160801b031981166001600160801b039182168501821617808216600160801b9182900483168501909216021790555b5050505050505050565b600290810b810b6000908152602092909252604082208281556001810183905590810182905560030155565b806001600160a01b0381168114612beb57600080fd5b6040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915290565b6040805160808101825260008082526020820181905291810182905260608101919091529056fea164736f6c6343000706000a",
  "linkReferences": {},
  "deployedLinkReferences": {}
} as const;

export default ABI;
