import "./style.css";
import "./style_mobile.css";

import AnimeContentPlayCard from "../AnimeContentPlayCard";

function AnimeContentRow(props) {
  if (props.skeleton) {
    return (
      <div className="subts-row">
        <AnimeContentPlayCard skeleton={true} />
        <AnimeContentPlayCard skeleton={true} />
        <AnimeContentPlayCard skeleton={true} />
        <AnimeContentPlayCard skeleton={true} />
        <AnimeContentPlayCard skeleton={true} />
      </div>
    );
  }

  let animeCards = [];

  for (const anime of props.cardsData) {
    animeCards.push(
      <AnimeContentPlayCard
        skeleton={false}
        animeData={anime}
        isFavorite={props.favorites.includes(anime.anime)}
      />
    );
  }

  while (animeCards.length % 5 != 0) {
    animeCards.push(<AnimeContentPlayCard skeleton={true} static={true} />);
  }

  return <div className="subts-row">{animeCards}</div>;
}

export default AnimeContentRow;
