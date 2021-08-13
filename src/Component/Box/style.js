import styled from "styled-components";

// Flexible box
export const FlexibleDiv = styled("div")`
  display: flex;
  justify-content: ${(props) => props.justifyContent || "center"};
  align-items: ${(props) => props.alignItems || "center"};
  flex-wrap: ${(props) => props.flexWrap || "wrap"};
  flex-direction: ${(props) => props.flexDir || "row"};
  width: ${({ width }) => width || "100%"};
  height: ${({ width }) => width || "auto"};
  background: ${(bgColor) => bgColor || "red"};
`;

// Gridable box
export const GridableDiv = styled("div")`
  display: grid;
  grid-template-columns: ${(props) => props.gridCol || "1fr"};
  grid-template-rows: ${(props) => props.gridRow || "auto"};
  grid-gap: ${(props) => props.gap || "10px"};
`;
