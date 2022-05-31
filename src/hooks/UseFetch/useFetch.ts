import axios from "axios";
import { API_KEY, API_HOST } from "./constants";
import { useEffect, useState } from "react";
import { Filter } from "../../components/GameList/types";
import { Game } from "../../types";

type Response = {
  games: Game[];
  error?: string;
};

export const useFetch = (params: Filter): Response => {
  const [games, setGames] = useState<Game[]>([]);
  const [err, setErr] = useState<string>("");
  const { platform, genre, tag, sortBy } = params;

  useEffect(() => {
    axios
      .get("/games", {
        baseURL: `https://${API_HOST}/api`,
        headers: {
          "x-rapidapi-key": API_KEY,
          "x-rapidapi-host": API_HOST,
        },
        params: {
          platform,
          category: genre,
          tag,
          "sort-by": sortBy, //sap xep lai filter
        },
      })
      .then((res) => setGames(res.data))
      .catch((e) => setErr(e.message));
  }, [platform, genre, tag, sortBy]);
  return {
    games,
    error: err,
  };
};
