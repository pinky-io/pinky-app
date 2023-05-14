import { useQuery } from "@apollo/client";
import { GET_LEND_BY_OWNER_DOCUMENT } from "../graphql";

export const useGetLendByOwner = (address: string) => {
  const { data, loading: getLendByOwnerLoading } = useQuery(
    GET_LEND_BY_OWNER_DOCUMENT,
    {
      variables: { OwnerToFind: address },
    }
  );

  

  return { data, getLendByOwnerLoading };
};
