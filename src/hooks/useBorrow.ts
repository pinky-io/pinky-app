import { useWaitForTransaction } from "wagmi";
import {
  useErc721SetApprovalForAll,
  usePinkyProtocolRent,
} from "../contract/generated";
import { CONTRACT_ADDRESS } from "./useLend";
import { useEffect } from "react";

export const useBorrow = (
  address: string,
  tokenId: string,
  price: number,
  duration: number
) => {
  const { write: approve, data: approveData } = useErc721SetApprovalForAll({
    address: address as `0x${string}`,
  });

  const { data, isLoading } = useWaitForTransaction({
    hash: approveData?.hash,
  });

  // @ts-ignore
  const { write } = usePinkyProtocolRent({
    address: CONTRACT_ADDRESS,
  });

  useEffect(() => {
    if (data && !isLoading) {
      write({
        value: BigInt(price) * BigInt(duration),
        args: [address as `0x${string}`, BigInt(tokenId)],
      });
    }
  }, [address, data, isLoading, write, tokenId, price, duration]);

  function borrow() {
    approve({
      args: [CONTRACT_ADDRESS, true],
    });
  }

  return { borrow };
};
