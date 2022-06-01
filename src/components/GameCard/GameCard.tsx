import { Link } from "react-router-dom";
import windowIcon from "../../assets/icons/window.svg";
import browserIcon from "../../assets/icons/browser.svg";
import {
  StyledLink,
  Img,
  Title,
  Details,
  Description,
  Genre,
  Icon,
} from "./styles";
import { Game } from "../../types";
import { BROWSER, WINDOWS } from "./Constants";

interface GameCardProps {
  content: Game;
}

export const GameCard: React.FC<GameCardProps> = ({ content }) => {
  const { id, title, thumbnail, short_description, genre, platform } = content;
  const icons = platform.split(",").map((p) => {
    let icon = null;
    //trim trừ khoảng trắng
    switch (p.trim()) {
      case BROWSER:
        icon = (
          <Icon key={`${id}-browser`} alt="browser icon" src={browserIcon} />
        );
        break;
      case WINDOWS:
        icon = (
          <Icon key={`${id}-windows`} alt="windows icon" src={windowIcon} />
        );
        break;
      default:
        console.log("message not loaded api game platform");
        break;
    }
    return icon;
  });

  return (
    //style đường dẫn đến dia chi id cua game
    <StyledLink to={`/game/${id}`}>
      <Img alt={`${title}`} src={thumbnail} />
      <Details>
        <Title>{title}</Title>
        <Description>{short_description}</Description>
        <Genre>{genre}</Genre>
      </Details>
    </StyledLink>
  );
};
