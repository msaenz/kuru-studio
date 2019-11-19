import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import playIcon from "../../src/assets/static/play-icon.png";
import "./styles/NewsItem.scss";

const NewsItem = props => {
  const { id, title, subtitle, autor, active, cover, source, type } = props;
  return (
    <div className="news-item">
      <img className="news-item__img" src={cover} alt={title} />
      <div className="news-item__details">
        <div>
          <Link to="./src/">
            <img
              className="news-item__details--img"
              src={playIcon}
              alt="Play Music"
            />
          </Link>
        </div>
        <p className="news-item__details--title">{title}</p>
        <p className="news-item__details--subtitle">{subtitle}</p>
      </div>
    </div>
  );
};

// const mapDispatchToProps = {
//   setFavorite,
//   deleteFavorite,
// }

export default connect(
  null,
  null
)(NewsItem);
