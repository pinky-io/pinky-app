interface Nft {
  collection: string
  number: number
  maxDuration: number
  pricePerDay: number
  currency: string
}

export const catalogue: Array<Nft> = [
  {
    collection: "DeGod",
    number: 1314,
    maxDuration: 90,
    pricePerDay: 0.208,
    currency: "Eth",
  },
  {
    collection: "Doodles",
    number: 864,
    maxDuration: 25,
    pricePerDay: 0.018,
    currency: "Eth",
  },
  {
    collection: "Nyoling",
    number: 4541,
    maxDuration: 54,
    pricePerDay: 0.003,
    currency: "Eth",
  },
  {
    collection: "mfer",
    number: 3946,
    maxDuration: 14,
    pricePerDay: 0.048,
    currency: "Eth",
  },
  {
    collection: "DeGod",
    number: 1314,
    maxDuration: 90,
    pricePerDay: 0.208,
    currency: "Eth",
  },
]
