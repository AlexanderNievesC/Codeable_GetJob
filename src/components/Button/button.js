import styled from "styled-components";
import COLORS from "../../constant";

function Button({ children, size, color }) {
  return (
    <StyledButton size={size} color={color}>
      {children}
    </StyledButton>
  );
}

const ColorDetail = (color) => {
  switch (color) {
    case "primary":
      return `background-color:${COLORS.white}; 
              &:hover{background:${COLORS.pink[50]}};  
              border: 1px solid ${COLORS.pink[100]};
              color:${COLORS.gray[100]}`;
    default:
      return `background-color:${COLORS.pink[100]}; 
              &:hover{background:${COLORS.pink[150]}}; 
              border:none;
              color:${COLORS.white}`;
  }
};

const SizeStatus = (size) => {
  switch (size) {
    case "primary":
      return `width:129px; height:40px; `;
    case "secondary":
      return `width:264px; height:56px;}`;
    default:
      return " width:177px; height:56px;";
  }
};

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-weight: 500px;
  gap: 8px;
  letter-spacing: 1.25px;
  border-radius: 16px;
  text-decoration: none;
  ${({ size }) => SizeStatus(size)};
  ${({ color }) => ColorDetail(color)};
`;

export default Button;
