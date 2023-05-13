export type NFTStatus = "LENT" | "AVAILABLE" | "OWNED"

interface Nft {
  collection: {
    name: string
    address: string
  }
  tokenId: string
  lendPrice?: number
  lendDuration?: number
  currency: string
  status: NFTStatus
}

export const catalogue: Array<Nft> = [
  {
    collection: { name: "DeGod", address: "0x000000000" },
    tokenId: "1314",
    lendDuration: 90,
    lendPrice: 0.208,
    currency: "Eth",
    status: "AVAILABLE",
  },
  {
    collection: { name: "Doodles", address: "0x000000000" },
    tokenId: "864",
    lendDuration: 25,
    lendPrice: 0.018,
    currency: "Eth",
    status: "AVAILABLE",
  },
  {
    collection: { name: "Nyoling", address: "0x000000000" },
    tokenId: "4541",
    lendDuration: 54,
    lendPrice: 0.003,
    currency: "Eth",
    status: "AVAILABLE",
  },
  {
    collection: { name: "mfer", address: "0x000000000" },
    tokenId: "3946",
    lendDuration: 14,
    lendPrice: 0.048,
    currency: "Eth",
    status: "AVAILABLE",
  },
  {
    collection: { name: "DeGod", address: "0x000000000" },
    tokenId: "1314",
    lendDuration: 90,
    lendPrice: 0.208,
    currency: "Eth",
    status: "AVAILABLE",
  },
]

export const mywallet: Array<Nft> = [
  {
    collection: { name: "DeGod", address: "0x000000000" },
    tokenId: "1314",
    lendDuration: 90,
    lendPrice: 0.208,
    currency: "Eth",
    status: "AVAILABLE",
  },
  {
    collection: { name: "Doodles", address: "0x000000000" },
    tokenId: "864",
    lendDuration: 25,
    lendPrice: 0.018,
    currency: "Eth",
    status: "AVAILABLE",
  },
  {
    collection: { name: "Nyoling", address: "0x000000000" },
    tokenId: "4541",
    lendDuration: 54,
    lendPrice: 0.003,
    currency: "Eth",
    status: "AVAILABLE",
  },
  {
    collection: { name: "mfer", address: "0x000000000" },
    tokenId: "3946",
    lendDuration: 14,
    lendPrice: 0.048,
    currency: "Eth",
    status: "AVAILABLE",
  },
  {
    collection: { name: "DeGod", address: "0x000000000" },
    tokenId: "1314",
    lendDuration: 90,
    lendPrice: 0.208,
    currency: "Eth",
    status: "AVAILABLE",
  },
]

export const nftborrowed: Array<Nft> = [
  {
    collection: { name: "DeGod", address: "0x000000000" },
    tokenId: "1314",
    lendDuration: 90,
    lendPrice: 0.208,
    currency: "Eth",
    status: "AVAILABLE",
  },
  {
    collection: { name: "Doodles", address: "0x000000000" },
    tokenId: "864",
    lendDuration: 25,
    lendPrice: 0.018,
    currency: "Eth",
    status: "AVAILABLE",
  },
  {
    collection: { name: "Nyoling", address: "0x000000000" },
    tokenId: "4541",
    lendDuration: 54,
    lendPrice: 0.003,
    currency: "Eth",
    status: "AVAILABLE",
  },
  {
    collection: { name: "mfer", address: "0x000000000" },
    tokenId: "3946",
    lendDuration: 14,
    lendPrice: 0.048,
    currency: "Eth",
    status: "AVAILABLE",
  },
  {
    collection: { name: "DeGod", address: "0x000000000" },
    tokenId: "1314",
    lendDuration: 90,
    lendPrice: 0.208,
    currency: "Eth",
    status: "AVAILABLE",
  },
]

export const nftlent: Array<Nft> = [
  {
    collection: { name: "DeGod", address: "0x000000000" },
    tokenId: "1314",
    lendDuration: 90,
    lendPrice: 0.208,
    currency: "Eth",
    status: "AVAILABLE",
  },
  {
    collection: { name: "Doodles", address: "0x000000000" },
    tokenId: "864",
    lendDuration: 25,
    lendPrice: 0.018,
    currency: "Eth",
    status: "AVAILABLE",
  },
  {
    collection: { name: "Nyoling", address: "0x000000000" },
    tokenId: "4541",
    lendDuration: 54,
    lendPrice: 0.003,
    currency: "Eth",
    status: "AVAILABLE",
  },
  {
    collection: { name: "mfer", address: "0x000000000" },
    tokenId: "3946",
    lendDuration: 14,
    lendPrice: 0.048,
    currency: "Eth",
    status: "AVAILABLE",
  },
  {
    collection: { name: "DeGod", address: "0x000000000" },
    tokenId: "1314",
    lendDuration: 90,
    lendPrice: 0.208,
    currency: "Eth",
    status: "AVAILABLE",
  },
]
