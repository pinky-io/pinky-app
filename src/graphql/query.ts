import { gql } from "@apollo/client";

export const GET_EVENTS_DOCUMENT = gql`
  {
    lends(first: 5) {
      id
      collectionAddress
      tokenID
      owner
      pricePerDay
      duration
    }
    rents(first: 5) {
      id
      collectionAddress
      tokenID
      borrower
    }
  }
`;

export const GET_RENTS_DOCUMENT = gql`
  query getRentsByBorrower($BorrowerToFind: String!) {
    rents(where: { borrower: $BorrowerToFind }) {
      id
      collectionAddress
      tokenID
      borrower
    }
  }
`;
