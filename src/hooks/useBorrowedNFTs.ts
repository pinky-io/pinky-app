import { useQuery } from "@apollo/client";
import { GET_RENTS_DOCUMENT } from "../graphql";

export const useBorrowedNFTs = (address: string) => {
  const { data, loading: eventsLoading } = useQuery(GET_RENTS_DOCUMENT, {
    variables: { BorrowerToFind: address },
  });

  return { data, eventsLoading };
};
