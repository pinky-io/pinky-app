import { Box, Modal, Typography } from "@mui/material"
import { colors } from "../../constants"
import styled from "@emotion/styled"

type ActionModalProps = {
  children: React.ReactNode
  open: boolean
  handleClose: () => void
  title: string
}

const Content = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 720px;
  max-width: 100%;
  background-color: ${colors.PRIMARY};

  box-shadow: 24px;
  color: ${colors.FONT};
  border-radius: 24px;
`

const Flex = styled(Box)`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
`

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
        {children}
      </Content>
    </Modal>
  )
}
