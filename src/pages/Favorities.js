import React, { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavoritiesContext from "../store/favorities-contex";

function Favorities() {
  const favoritiesCtx = useContext(FavoritiesContext);
  let content;
  if (favoritiesCtx.totalFavorites === 0) {
    content = <p>You got no favorites yet. You have start to add</p>;
  } else {
    content = <MeetupList meetups={favoritiesCtx.favorities} />;
  }
  return (
    <div>
      <h3>Favorities</h3>
      {content}
    </div>
  );
}

export default Favorities;
