import styled from "styled-components";

const Flex = styled.div(
  {
    display: "flex",
  },
  ({ gutter }) => ({
    marginLeft: -gutter,
    marginRight: -gutter,
    "& > *": {
      paddingLeft: gutter,
      paddingRight: gutter,
    },
  }),
  ({ children, forwardedComponent, ...props }) => ({ ...props }),
);

export default Flex;
