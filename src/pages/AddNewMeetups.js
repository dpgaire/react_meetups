import { useNavigate } from "react-router-dom";
import MeetUpForm from "../components/meetups/MeetUpForm";
function AddNewMeetups() {
  const nevigate = useNavigate();
  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-getting-started-ce2dd-default-rtdb.firebaseio.com/meetup.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      nevigate("/");
    });
  }
  return (
    <div>
      <h3>Add Meetups</h3>
      <MeetUpForm addMeetups={addMeetupHandler} />
    </div>
  );
}

export default AddNewMeetups;
