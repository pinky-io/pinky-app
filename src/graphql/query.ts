import { gql } from "@apollo/client";

export const GET_EVENTS_DOCUMENT = gql`
  {
    lends(first: 5) {
      id
      collectionAddress
      tokenID
      owner
    }
    rents(first: 5) {
      id
      collectionAddress
      tokenID
      borrower
    }
  }
`;
