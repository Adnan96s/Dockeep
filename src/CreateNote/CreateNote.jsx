import "./CreateNote.css";
import AddIcon from "@material-ui/icons/Add";
import { useState } from "react";

const CreateNote = (props) => {
  const [expend, setExpend] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;

    setNote((pervData) => {
      return {
        ...pervData,
        [name]: value,
      };
    });
  };

  const btnEvent = () => {
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };

  return (
    <>
      <div className="createNote">
        <input
          className="title"
          type="text"
          placeholder="Title"
          autoComplete="off"
          name="title"
          value={note.title}
          onChange={inputEvent}
          onClick={() => setExpend(true)}
          onDoubleClick={() => setExpend(false)}
        />

        {expend ? (
          <>
            <textarea
              className="writeNote"
              rows=""
              colums=""
              placeholder="Write a Note..."
              value={note.content}
              name="content"
              onChange={inputEvent}
            />

            <div className="relativeone">
              <button className="delicon" onClick={btnEvent}>
                <AddIcon />
              </button>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default CreateNote;
