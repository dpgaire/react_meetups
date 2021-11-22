import React, { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";
function AllMeetups() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingMeetups, setLoadingMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-getting-started-ce2dd-default-rtdb.firebaseio.com/meetup.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadingMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading....</p>
      </section>
    );
  }
  return (
    <section>
      <h3>All Meetups</h3>
      <MeetupList meetups={loadingMeetups} />
    </section>
  );
}

export default AllMeetups;
