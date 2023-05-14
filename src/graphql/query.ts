import { gql } from "@apollo/client";

export const GET_AVAILABLE_LENDS_DOCUMENT = gql`
  query getLendsByNotOwner($ExcludedOwner: String!) {
    lends(where: { owner_not: $ExcludedOwner }) {
      id
      collectionAddress
      tokenID
      owner
      pricePerDay
      duration
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

export const GET_LEND_BY_OWNER_DOCUMENT = gql`
  query getLendsByOwner($OwnerToFind: String!) {
    lends(where: { owner: $OwnerToFind }) {
      id
      collectionAddress
      tokenID
      owner
    }
  }
`;
