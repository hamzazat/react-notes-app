import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [note, updateNote] = useState({ title: "", content: "" });
  const [isExpanded, setExpanded] = useState(false);

  function handleChange(event) {
    const newValue = event.target.value;
    if (event.target.name === "title") {
      console.log("update content");

      updateNote((prevValue) => {
        return { title: newValue, content: prevValue.content };
      });
    } else {
      console.log("update content");
      updateNote((prevValue) => {
        return { title: prevValue.title, content: newValue };
      });
    }
    console.log(note);
  }
  function expand() {
    setExpanded(true);
  }
  return (
    <div>
      <form method="post" className="create-note">
        {isExpanded && (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={note.title}
          />
        )}
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          value={note.content}
          onClick={expand}
        />
        <Zoom in={isExpanded}>
          <Fab
            onClick={(event) => {
              props.addNote(note);
              event.preventDefault();
              updateNote({ title: "", content: "" });
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
