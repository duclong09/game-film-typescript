import { platform } from "os";
import { ChangeEvent } from "react";
import { GENRES, PLATFORMS, SORT_BY, TAGS } from "./constants";
import { Form, Label, Select } from "./styles";

type GameFilterProp = {
  onChange: (e: ChangeEvent<HTMLFormElement>) => void;
};
//option: key, value
export const GameFilter: React.FC<GameFilterProp> = ({ onChange }) => {
  return (
    <Form onChange={onChange}>
      <Label htmlFor="platform-select">
        Platform:
        <Select name="platform" id="platform-select">
          {/* platform gồm 2 trạng thái */}
          {PLATFORMS.map((platform) => (
            <option key={platform.value} value={platform.value}>
              {platform.display}
            </option>
          ))}
        </Select>
      </Label>
      <Label htmlFor="genre-select">
        Genre:
        <Select name="genre" id="genre-select">
          {/* Genres gồm 2 trạng thái": value, display */}
          <option value="">All Genres</option>
          {GENRES.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.display}
            </option>
          ))}
        </Select>
      </Label>

      <Label htmlFor="tag-select">
        Tag:
        <Select name="tag" id="tag-select">
          <option value="">All Tags</option>
          {TAGS.map((tag) => (
            <option key={tag.value} value={tag.value}>
              {tag.display}
            </option>
          ))}
        </Select>
      </Label>

      <Label htmlFor="sortBy-select">
        Sort By:
        <Select name="sortBy" id="sortBy-select">
          {SORT_BY.map((sortBy) => (
            <option key={sortBy.value} value={sortBy.value}>
              {sortBy.display}
            </option>
          ))}
        </Select>
      </Label>
    </Form>
  );
};
