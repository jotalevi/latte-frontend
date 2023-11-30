import "./style.css";
import "./style_mobile.css";

import AnimeContentPlayCard from "../AnimeContentPlayCard";

function AnimeContentGrid(props) {
  if (props.skeleton) {
    let animeCards = [];
    for (let i = 0; i <= 10; i++) {
      let chunkCards = [];
      for (let j = 0; j < 5; j++) {
        chunkCards.push(<AnimeContentPlayCard skeleton={true} />);
      }
      animeCards.push(<div className="subts-row">{chunkCards}</div>);
    }

    return <div className="subts-grid">{animeCards}</div>;
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

  return <div className="subts-grid">{animeCards}</div>;
}

export default AnimeContentGrid;
