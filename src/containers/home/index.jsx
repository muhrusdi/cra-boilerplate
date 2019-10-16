import React from "react";
import { useOvermind } from "overmind-state";

const Home = () => {
  const { state, actions } = useOvermind();

  console.log(process.env.PORT_DEV);
  return (
    <div>
      <div>asdf</div>
    </div>
  );
};

export default Home;
