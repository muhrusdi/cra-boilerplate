import styled from "styled-components";

// eslint-disable-next-line import/prefer-default-export
export const BackgroundImage = styled.div(
  ({ background }) => ({
    position: "relative",
    ":before": {
      background: `url(${background}) center`,
      backgroundSize: "cover",
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      zIndex: "-1",
      content: "' '",
    },
    ":after": {
      background: "#263238",
      opacity: ".76",
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      zIndex: "-1",
      content: "' '",
    },
  }),
);
