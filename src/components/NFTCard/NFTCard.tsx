import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { Button } from "../Button";

export type NFTStatus = "LENT" | "AVAILABLE" | "OWNED";

export type NFTData = {
  collection: {
    name: string;
    address: string;
  };
  tokenId: string;
  lendPrice?: number;
  lendDuration?: number;
  status: NFTStatus;
};

type NFTCardProps = NFTData & {
  openLendModal(nft: NFTData): void;
};

const Content = styled(Box)`
  border: 1px solid rgba(233, 69, 96, 0.4);
  border-radius: 5px;
`;

const Row = styled(Box)`
  display: flex;
  justify-content: space-between;
`;

const Column = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const DurationSpan = styled.span`
  font-size: 0.75rem;
`;

const Price = styled(Typography)`
  font-size: 2.125rem;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  border-radius: 5px 5px 0 0;
`;

const SubContent = styled.div`
  padding: 1rem;
`;

export const Subtitle = styled.span`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.75rem;
`;

export const NFTCard = ({
  collection,
  status,
  tokenId,
  lendDuration,
  lendPrice,
  openLendModal,
}: NFTCardProps) => {
  return (
    <Content>
      <Image src="/nft.png" />
      <SubContent>
        <Typography variant="h5">{collection.name}</Typography>
        <Row>
          <Subtitle>#{tokenId}</Subtitle>
          <Column>
            <Subtitle>Max duration</Subtitle>
            <DurationSpan>{lendDuration} days</DurationSpan>
          </Column>
        </Row>
        <Row>
          <Price>
            {lendPrice} ETH <Subtitle>per day</Subtitle>
          </Price>
        </Row>
        {status === "AVAILABLE" && (
          <Button
            onClick={() =>
              openLendModal({
                lendPrice,
                collection,
                tokenId,
                lendDuration,
                status,
              })
            }
          >
            Lend
          </Button>
        )}
      </SubContent>
    </Content>
  );
};
