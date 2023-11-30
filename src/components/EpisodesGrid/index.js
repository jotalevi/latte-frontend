import "./style.css";
import "./style_mobile.css";

import EpisodePlayCard from "../EpisodePlayCard";

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

function EpisodesGrid(props) {
  let epGrid = [];

  for (const chunks of arrChunk(props.episodes, 4)) {
    let epRow = [];
    for (const ep of chunks) {
      epRow.push(<EpisodePlayCard episodeId={ep} animeId={props.animeId} />);
    }
    epGrid.push(<div className="eps-row">{epRow}</div>);
  }

  return <div className="eps-grid">{epGrid}</div>;
}

export default EpisodesGrid;
