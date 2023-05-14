import { useQuery } from "@apollo/client";
import { GET_AVAILABLE_LENDS_DOCUMENT } from "../graphql";
import { useAccount } from "wagmi";

export const useAvailableNFTBorrow = () => {
  const { address } = useAccount();
  const { data, loading: eventsLoading } = useQuery(
    GET_AVAILABLE_LENDS_DOCUMENT,
    { variables: { ExcludedOwner: address || "" } }
  );

  return { data: data, eventsLoading };
};
