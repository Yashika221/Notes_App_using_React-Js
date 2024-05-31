import React, { useState } from "react";
function EditModal({editId, notes, setNotes, element}) {
  const [editedNote,setEditedNote]=useState({...element});
  const handleChange =(e)=>{
    if(e.target.id==="edittitle"){
     setEditedNote((note)=>{
      return{
        title:e.target.value,
        description:note.description
      }
     })
    }else{
      setEditedNote((note)=>{
        return{
          title:note.value,
          description:e.target.value
        }
       })
      
    }
    

  }
  const updateHandler = () => {
    const updateNotes = notes.map((elem) => {
      if (editId === elem.id) {
        return {
          ...elem,
          title: document.getElementById("edittitle").value,
          description: document.getElementById("editdescription").value,
        };
      } else {
        return elem;
      }
    });
    console.log(updateNotes);
    setNotes(updateNotes);
  };
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Notes
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label for="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="edittitle"
                    placeholder="Enter Your Title"
                    onChange={handleChange}
                    value={editedNote.title}
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Description
                  </label>
                  <textarea
                    name="description"
                    id="editdescription"
                    rows="3"
                    className="form-control"
                    placeholder="Enter Your Description"
                    onChange={handleChange}
                    value={editedNote.description}
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={updateHandler}
              >
                Edit Note
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default EditModal;
