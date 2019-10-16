import styled from "styled-components";

const Container = styled.div(
  {
    paddingLeft: 16,
    paddingRight: 16,
    margin: "0 auto",
  },
  ({ type }) => {
    switch (type) {
      default:
        return {
          maxWidth: type,
        };
    }
  },
);

export default Container;

Container.defaultProps = {
  type: 1200,
};
