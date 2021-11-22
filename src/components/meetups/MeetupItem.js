import React, { useContext } from "react";
import classess from "./meetupItem.module.css";
import FavoritiesContext from "../../store/favorities-contex";

function MeetupItem(props) {
  const favoritesCtx = useContext(FavoritiesContext);
  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);
  function toogleFavoritesStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        image: props.image,
        description: props.description,
        address: props.address,
      });
    }
  }
  return (
    <div className={classess.card}>
      <div className="card">
        <img src={props.image} className="card-img-top" alt={props.title} />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <p className="card-text">{props.address}</p>
          <button
            className="btn btn-primary"
            onClick={toogleFavoritesStatusHandler}
          >
            {itemIsFavorite ? "Remove from Favorites" : "To Favorities"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MeetupItem;
