import { ChangeEvent } from "react";
import { Game } from "../../types";
import { GameCard } from "../GameCard/GameCard";
import { GameFilter } from "../GameFilter/GameFilter";
import { List, ListItem } from "./styles";
interface GameListRenderProps {
  err?: string;
  games: Game[];
  onFilterChange: (e: ChangeEvent<HTMLFormElement>) => void;
}

export const GameListRender: React.FC<GameListRenderProps> = ({
  err,
  games,
  onFilterChange,
}) => {
  if (err) {
    return <p>Unable to fetch game</p>;
  }
  console.log(games?.length);
  //game.lenth: [?.] option length or [??] nullish coalescing operator
  if (!games?.length) {
    return <p>No games available</p>;
  }

  return (
    <>
      <GameFilter onChange={onFilterChange} />
      <List>
        {games.map((game) => (
          <ListItem key={game.id}>
            <GameCard content={game} />
          </ListItem>
        ))}
      </List>
    </>
  );
};
