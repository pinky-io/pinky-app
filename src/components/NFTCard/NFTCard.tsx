import { Typography } from "@mui/material";
import { Button } from "../Button";
import { Content, SubContent, Row, Subtitle, DurationSpan, Price } from "..";

import s from "./NFTCard.module.css";
import { utils } from "ethers";
import { Asset } from "@center-inc/react";
import styled from "@emotion/styled";
import { Opensea } from "../Icons";

export type NFTStatus = "AVAILABLE" | "MYWALLET" | "BORROWED" | "LENT";

export type NFTData = {
  collection: {
    name: string;
    address: string;
  };
  tokenId: string;
  lendPrice?: number;
  lendDuration?: number;
  currency: string;
  type: NFTStatus;
};

type NFTCardProps = NFTData & {
  openLendModal?: (nft: NFTData) => void;
};

export const ImageContainer = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const NFTCard = ({
  collection,
  tokenId,
  lendDuration,
  lendPrice,
  currency,
  openLendModal,
  type,
}: NFTCardProps) => {
  const handleLend = () => {
    openLendModal?.({
      collection,
      tokenId,
      lendDuration,
      lendPrice,
      currency,
      type,
    });
  };

  return (
    <Content className={s.container}>
      <div className={s.imageContainer}>
        <a
          href={`https://testnets.opensea.io/assets/goerli/${collection.address}/${tokenId}`}
          target="_blank"
        >
          <Opensea width="48px" className={s.openSea} />
        </a>
        <ImageContainer>
          <Asset
            network="ethereum-goerli"
            tokenId={tokenId}
            address={collection.address}
          />
        </ImageContainer>
      </div>
      <SubContent>
        <Row marginBottom={2}>
          <div>
            {collection.name ? (
              <Typography variant="h5">{collection.name}</Typography>
            ) : null}
            {tokenId ? <Subtitle>#{tokenId}</Subtitle> : null}
          </div>
          {type !== "MYWALLET" && lendDuration ? (
            <div className={s.nftInfos}>
              {type === "AVAILABLE" ? <Subtitle>Max duration</Subtitle> : null}
              {type === "BORROWED" ? <Subtitle>Return Date</Subtitle> : null}
              {type === "LENT" ? <Subtitle>Duration</Subtitle> : null}
              <DurationSpan>{lendDuration} days</DurationSpan>
            </div>
          ) : null}
        </Row>
        {["AVAILABLE", "LENT"].includes(type) && lendPrice && currency ? (
          <Row marginBottom={2}>
            <Price>
              {/* {utils.formatEther(lendPrice)} {currency}{" "} */}
              {lendPrice} {currency} <Subtitle>per day</Subtitle>
            </Price>
          </Row>
        ) : null}
        {type === "BORROWED" && lendDuration ? (
          <Row marginBottom={2}>
            <Price>19 days left</Price>
          </Row>
        ) : null}
        {type === "MYWALLET" && <Button onClick={handleLend}>Lend</Button>}
        {type === "AVAILABLE" && <Button onClick={handleLend}>Borrow</Button>}
      </SubContent>
    </Content>
  );
};
