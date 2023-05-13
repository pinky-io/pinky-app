import { Box, Modal, Typography } from "@mui/material";
import { colors } from "../../constants";

type ActionModalProps = {
  children: React.ReactNode;
  open: boolean;
  handleClose: () => void;
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  color: colors.FONT_ALTERNATE,
} as const;

export const ActionModal = ({
  children,
  open,
  handleClose,
}: ActionModalProps) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography color="black" variant="h6" component="h2">
          Text in a modal
        </Typography>
        {children}
      </Box>
    </Modal>
  );
};
