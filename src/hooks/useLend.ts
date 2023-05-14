import { useWaitForTransaction } from "wagmi";
import { useErc721Approve, usePinkyProtocolLend } from "../contract/generated";
import { useEffect, useState } from "react";
import { parseEther } from "viem";

type FormData = {
  tokenId: string;
  duration: number;
  price: number;
  address: string;
};

export const CONTRACT_ADDRESS =
  "0x342a93f32e7884001d8929af68afe50464606fb0" as const;

export const useLend = (address: string) => {
  const [formData, setData] = useState<FormData | null>(null);
  const { write: approve, data: approveData } = useErc721Approve({
    // @ts-ignore
    address,
  });

  const { data, isLoading, isSuccess, isError } = useWaitForTransaction({
    hash: approveData?.hash,
  });

  const { write } = usePinkyProtocolLend({
    address: CONTRACT_ADDRESS,
  });

  useEffect(() => {
    if (data && !isLoading && formData) {
      write({
        args: [
          address as `0x${string}`,
          BigInt(formData.tokenId),
          BigInt(formData.duration),
          // @ts-ignore
          BigInt(parseEther(formData.price.toString(), "wei")),
        ],
      });
    }
  }, [
    address,
    data,
    formData?.duration,
    formData?.price,
    formData?.tokenId,
    isLoading,
    write,
    formData,
  ]);

  function lend(data: FormData) {
    setData(data);

    approve({
      args: [CONTRACT_ADDRESS, BigInt(data.tokenId)],
    });
  }

  return { lend, isLoading, isSuccess, isError };
};
