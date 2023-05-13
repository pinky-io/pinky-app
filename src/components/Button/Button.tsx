import styled from "@emotion/styled";
import { colors } from "../../constants";

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.6rem 2rem;

  width: 100%;
  height: 2.5rem;
  background-color: ${colors.SECONDARY};
  color: ${colors.FONT};
  border: 0;
  border-radius: 4px;
  font-weight: 700;
  cursor: pointer;
`;
