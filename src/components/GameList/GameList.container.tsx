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

  const onFilterChange = useCallback(
    (event: ChangeEvent<HTMLFormElement>) => {
      setFilter((prev) => ({
        // ...current,
        // [e.target.name]: e.target.value,

        ...prev,
        [event.target.name]: event.target.value,
      }));
      event.preventDefault();
    },
    [games]
  );

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
