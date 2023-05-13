import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";

export type NFTStatus = "LENT" | "AVAILABLE" | "OWNED";

type NFTCardProps = {
  collection: {
    name: string;
    address: string;
  };
  tokenId: string;
  lendPrice?: number;
  lendDuration?: number;
  status: NFTStatus;
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

const Image = styled.img`
  display: block;
  width: 100%;
  border-radius: 5px 5px 0 0;
`;

const SubContent = styled.div`
  padding: 1rem;
`;

const styles = {
  title: {},
  subtitle: {
    color: "rgba(255, 255, 255, 0.6)",

    fontSize: "0.75rem",
  },
  rightBox: {
    float: "right",
  },
};

export const NFTCard = ({
  collection,
  status,
  tokenId,
  lendDuration,
  lendPrice,
}: NFTCardProps) => {
  return (
    <Content>
      <Image src="/nft.png" />
      <SubContent>
        <Typography variant="h5" style={styles.title}>
          {collection.name}
        </Typography>
        <Row>
          <span style={styles.subtitle}>#{tokenId}</span>
          <Column>
            <span style={styles.subtitle}>Max duration</span>
            <DurationSpan>{lendDuration} days</DurationSpan>
          </Column>
        </Row>
        <Row>
          <Price>
            {lendPrice} ETH <span style={styles.subtitle}>per day</span>
          </Price>
        </Row>
      </SubContent>
    </Content>
  );
};
