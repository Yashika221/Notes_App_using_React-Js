import React from "react";
import EditModal from "./editmodal"
function Notes({ element, notes, setNotes}) {
  
  console.log(element);
  const removeHandler = (id) => {
    const newNotes = notes.filter((elem) => {
      if (elem.id !== id) {
        return elem;
      }
    });
    setNotes(newNotes);
  };
  const editHandler = (id) => {
    
    notes.filter((elem) => {
      if (elem.id === id) {
        document.getElementById("edittitle").value = elem.title;
        document.getElementById("editdescription").value = elem.description;
      }
    });
  };
  return (
    <>
    <EditModal editId={element.id} notes={notes} setNotes={setNotes} element={element}/>
      <div className="card mb-3 ">
        <div className="card-body" style={{ textTransform: "capitalize" }}>
          <h5 className="card-title">{element.title}</h5>
          <p className="card-text">{element.description}</p>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={() => {
              editHandler(element.id);
            }}
          >
            Edit
          </button>

          <button
            className="btn btn-danger"
            onClick={() => {
              removeHandler(element.id);
            }}
          >
            Remove
          </button>
        </div>
      </div>
    </>
  );
}
export default Notes;
