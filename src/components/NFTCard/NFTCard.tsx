import { Typography } from "@mui/material";
import { Button } from "../Button";
import { Content, SubContent, Row, Subtitle, Column, DurationSpan, Price, Image } from "..";

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
