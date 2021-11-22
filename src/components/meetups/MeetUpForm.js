import { useRef, React } from "react";

function MeetUpForm(props) {
  const titleInputRef = useRef();
  const imageUrlInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();
  function handleSubmit(event) {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImageUrl = imageUrlInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImageUrl,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.addMeetups(meetupData);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <label htmlFor="inputTitle3" className="col-sm-2 col-form-label">
            Title
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="inputTitle3"
              ref={titleInputRef}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputImage3" className="col-sm-2 col-form-label">
            Image Url
          </label>
          <div className="col-sm-10">
            <input
              type="url"
              className="form-control"
              id="inputImage3"
              ref={imageUrlInputRef}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputAddress3" className="col-sm-2 col-form-label">
            Address
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="inputAddress3"
              ref={addressInputRef}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label
            htmlFor="inputDescription3"
            className="col-sm-2 col-form-label"
          >
            Description
          </label>
          <div className="col-sm-10">
            <textarea
              type="text"
              className="form-control"
              id="inputDescription3"
              row="10"
              ref={descriptionInputRef}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Add Meetups
        </button>
      </form>
    </div>
  );
}

export default MeetUpForm;
