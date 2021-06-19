import "./Note.css";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

const Note = (props) => {
  const deleteitems = () => {
    props.deleteItem(props.id);
  };
  return (
    <>
      <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={deleteitems}>
          <DeleteOutlineIcon />
        </button>
      </div>
    </>
  );
};

export default Note;
