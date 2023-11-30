import "./style.css";

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

  return <div className="subts-row">{animeCards}</div>;
}

export default AnimeContentRow;
