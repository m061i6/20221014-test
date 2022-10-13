/*CONTRACT*/
export const CONTRACT_ADDRESS = "0xbd745674b82E7473f8247b33284C0a08083Ed5a5";
export const CONTRACT_ABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "nowStatus",
        type: "bool"
      }
    ],
    name: "changeStatus",
    type: "event"
  },
  {
    inputs: [],
    name: "toggle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "nowStatus",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];
