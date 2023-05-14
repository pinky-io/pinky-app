import { useQuery } from "@apollo/client";
import { GET_EVENTS_DOCUMENT } from "../graphql";

export const useAvailableNFTBorrow = () => {
  const { data, loading: eventsLoading } = useQuery(GET_EVENTS_DOCUMENT);

  return { data, eventsLoading };
};
