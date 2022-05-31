import { ChangeEvent, useCallback, useState } from "react";
import { useFetch } from "../../hooks/UseFetch/useFetch";
import { GameListRender } from "./GameList.render";
import { Filter } from "./types";

export const GameListContainer = () => {
  const [filter, setFilter] = useState<Filter>({
    platform: "browser",
    sortBy: "relevance",
  });
  const { games, error } = useFetch(filter);

  const onFilterChange = useCallback((e: ChangeEvent<HTMLFormElement>) => {
    setFilter((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
    e.preventDefault();
  }, []);

  return (
    <div>
      <GameListRender
        err={error}
        games={games}
        onFilterChange={onFilterChange}
      />
    </div>
  );
};
