import { Typography } from "@mui/material";
import { Button } from "../Button";
import {
  Content,
  SubContent,
  Row,
  Subtitle,
  DurationSpan,
  Price,
  Image,
} from "..";

import s from "./NFTCard.module.css";
import { utils } from "ethers";

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
  url?: string;
};

type NFTCardProps = NFTData & {
  openLendModal?: (nft: NFTData) => void;
};

export const NFTCard = ({
  collection,
  tokenId,
  lendDuration,
  lendPrice,
  currency,
  openLendModal,
  type,
  url,
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
      <Image src={url || "/nft.png"} />
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
              {utils.formatEther(lendPrice)} {currency}{" "}
              <Subtitle>per day</Subtitle>
            </Price>
          </Row>
        ) : null}
        {type === "BORROWED" && lendDuration ? (
          <Row marginBottom={2}>
            <Price>
              {/* TODO CALCUL DAYS LEFT */}
              19 days left
            </Price>
          </Row>
        ) : null}
        {type === "MYWALLET" && <Button onClick={handleLend}>Lend</Button>}
        {type === "AVAILABLE" && <Button onClick={handleLend}>Borrow</Button>}
      </SubContent>
    </Content>
  );
};
