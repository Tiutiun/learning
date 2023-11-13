import { useParams } from "react-router-dom";
import "./movie-details.scss";

const MovieDetails = () => {
  return (
    <div className="body">
      <div className="mainpic">
        <div className="board">
          <div className="top_cont">
            <div className="m1">MaileHershenko</div>
            <div className="slash">/</div>
            <div className="m2">Movies</div>
          </div>
          <div className="name">Avengers: Endgame</div>
        </div>
        <img src="mainpic.png"></img>
      </div>
      <div className="newcont">
        <div className="pic2">
          <img src="pic2.png"></img>
        </div>
        <div className="details_right_container">
          <div className="title">Part of the journey is the end.</div>
          <div className="description">
            After the devastating events of Avengers: Infinity War, the universe
            is in ruins due to the efforts of the Mad Titan, Thanos. With the
            help of remaining allies, the Avengers must assemble once more in
            order to undo Thanos' actions and restore order to the universe once
            and for all, no matter what consequences may be in store.
          </div>

          <div>
            <div className="rate_1">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.15333 2.34001L10.3267 4.68668C10.4867 5.01334 10.9133 5.32668 11.2733 5.38668L13.4 5.74001C14.76 5.96668 15.08 6.95334 14.1 7.92668L12.4467 9.58001C12.1667 9.86001 12.0133 10.4 12.1 10.7867L12.5733 12.8333C12.9467 14.4533 12.0867 15.08 10.6533 14.2333L8.66 13.0533C8.3 12.84 7.70667 12.84 7.34 13.0533L5.34667 14.2333C3.92 15.08 3.05333 14.4467 3.42667 12.8333L3.9 10.7867C3.98667 10.4 3.83333 9.86001 3.55333 9.58001L1.9 7.92668C0.926667 6.95334 1.24 5.96668 2.6 5.74001L4.72667 5.38668C5.08 5.32668 5.50667 5.01334 5.66667 4.68668L6.84 2.34001C7.48 1.06668 8.52 1.06668 9.15333 2.34001Z"
                  stroke="#FFAD49"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>8.3</span>
            </div>
          </div>

          <div className="specification">
            <span className="specification_title">Type</span>
            <span className="specification_text">Movie</span>
          </div>

          <div className="specification">
            <span className="specification_title">Release Date:</span>
            <span className="specification_text">2019-04-24</span>
          </div>

          <div className="specification">
            <span className="specification_title">Run time</span>
            <span className="specification_text">181 min</span>
          </div>

          <div className="specification">
            <span className="specification_title">Genres</span>
            <span className="specification_text">2019-04-24</span>
          </div>

          <div className="specification">
            <span className="specification_title">Release Date:</span>
            <span className="specification_text">
              Adventure, Science Fiction, Action
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
