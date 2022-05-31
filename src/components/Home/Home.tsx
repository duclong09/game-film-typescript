import React from "react";
import { GameListContainer } from "../GameList/GameList.container";

export const Home: React.FC = ({}) => {
  return (
    <div>
      <main>
        <GameListContainer />
      </main>
    </div>
  );
};
