import { useEffect, useState } from "react";
import "./home.scss";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { films, movies } from "../../movies";
import Card from "../../components/card/Card";

const Home = ({ onSwitchPage }) => {
  const [movie, setMovie] = useState({});

  const params = useParams();

  useEffect(() => {
    const movie = films.find((el) => el.id === Number(params.id));

    console.log({ movie });
  }, [params]);

  return (
    <div className="home_container">
      <div className="body">
        <div className="title_container">
          <h1>MaileHershenko</h1>
          <p>
            List of movies and TV Shows, I,{" "}
            <span className="colortext">Pramod Poudel</span> have watched till
            date. Explore what I have watched and also feel free to make a
            suggestion. 😉
          </p>
        </div>
        <div className="container_search">
          <input type="text" placeholder="Search Movies or TV Shows" />
          {/* <svg> */}
          <div className="icon">
            <img src="search-normal.png"></img>
          </div>
          {/* </svg> */}
          {/* <div className="search">Search Movies or TV Shows</div> */}
        </div>
        <div className="switcher">
          <div className="input_container">
            <input type="radio" name="switcher" id="films" />
            <label htmlFor="all">All</label>
          </div>
          <div className="input_container">
            <inlput type="radio" name="switcher" id="films" />
            <label htmlFor="films">Movies</label>
          </div>
          <div className="input_container">
            <input type="radio" name="switcher" id="films" />
            <label htmlFor="anime">TV Shows</label>
          </div>
        </div>
        <div className="allfims">
          All {""}
          <span className="colortext1">(120)</span>
        </div>
      </div>

      <ul className="list">
        {films.map((item, index) => {
          return (
            <li key={item.id} onClick={onSwitchPage}>
              <Link to={`/details/${item.id}`}>
                <Card data={item} />
                {/* <div className="card">
                  <div className="rate">
                    <img src="star.png" />
                    {item.rate}
                  </div>
                  <img className="poster" src={item.img} />
                  <div className="card_title">{item.title}</div>
                </div> */}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
