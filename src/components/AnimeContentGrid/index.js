import "./style.css";

import AnimeContentPlayCard from "../AnimeContentPlayCard";

const arrChunk = function* (itr, size) {
  let chunk = [];
  for (const v of itr) {
    chunk.push(v);
    if (chunk.length === size) {
      yield chunk;
      chunk = [];
    }
  }
  if (chunk.length) yield chunk;
};

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

  for (const chunks of arrChunk(props.cardsData, 5)) {
    let chunkCards = [];
    for (const anime of chunks) {
      chunkCards.push(
        <AnimeContentPlayCard
          skeleton={false}
          animeData={anime}
          isFavorite={props.favorites.includes(anime.anime)}
        />
      );
    }
    animeCards.push(<div className="subts-row">{chunkCards}</div>);
  }

  return <div className="subts-grid">{animeCards}</div>;
}

export default AnimeContentGrid;
