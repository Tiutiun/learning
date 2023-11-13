import "./card.module.scss";
import style from "./card.module.scss";

const Card = ({ data }) => {
  return (
    <div className={style.card}>
      <div className={style.rate}>
        <img src="star.png" />
        {data.rate}
      </div>
      <img className={style.poster} src={data.img} />
      <div className={style.card_title}>{data.title}</div>
    </div>
  );
};

export default Card;
