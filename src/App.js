import "./App.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import CreateNote from "./CreateNote/CreateNote";
import Note from "./Note/Note";
import { useState } from "react";
function App() {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    setAddItem((oldData) => {
      return [...oldData, note];
    });
  };

  const delitem = (id) => {
    setAddItem((oldperv) =>
      oldperv.filter((currentdata, index) => {
        return id !== index;
      })
    );
  };

  return (
    <div>
      <Header />
      <CreateNote passNote={addNote} />

      {addItem.map((val, index) => {
        return (
          <Note
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={delitem}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
