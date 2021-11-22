import React from "react";
import MeetupItems from "./MeetupItem";
function MeetupList(props) {
  return (
    <div>
      {props.meetups.map((meetup) => {
        return (
          <MeetupItems
            key={meetup.id}
            id={meetup.id}
            title={meetup.title}
            image={meetup.image}
            description={meetup.description}
            address={meetup.address}
          />
        );
      })}
    </div>
  );
}

export default MeetupList;
