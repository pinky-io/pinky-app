import styled from "@emotion/styled";
import { NFTCard, NFTData } from "../NFTCard";

type NFTListProps = {
  nfts: NFTData[];
  openLendModal: (nft: NFTData) => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  gap: 1rem;
`;

export const NFTList = ({ nfts, openLendModal }: NFTListProps) => (
  <Container>
    {nfts.map((nft, index) => (
      <NFTCard
        key={`nft-list-${nft.collection}-${nft.tokenId}-${index}`}
        openLendModal={openLendModal}
        {...nft}
      />
    ))}
  </Container>
);
