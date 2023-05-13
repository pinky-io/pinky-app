import { Box, Modal, Typography } from "@mui/material";
import { colors } from "../../constants";
import styled from "@emotion/styled";
import { Image } from "../NFTCard";

type ActionModalProps = {
  children: React.ReactNode;
  open: boolean;
  handleClose: () => void;
  title: string;
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: colors.PRIMARY,

  boxShadow: 24,
  p: 4,
  color: colors.FONT,
  borderRadius: "24px",
} as const;

const Content = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: ${colors.PRIMARY};

  box-shadow: 24px;
  padding: 42px;
  color: ${colors.FONT};
  border-radius: 24px;
`;

const Flex = styled(Box)`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
`;

export const ActionModal = ({
  children,
  open,
  handleClose,
  title,
}: ActionModalProps) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Content>
        <Typography variant="h6" component="h2">
          {title}
        </Typography>
        <Flex>
          {children}
        </Flex>
      </Content>
    </Modal>
  );
};
