import "./App.css";
import Navbar from "./components/navbar";
import Form from "./components/form";
import Notes from "./components/Notes";

import { useEffect, useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);
  
  useEffect(()=>{
    
    localStorage.setItem("notes", JSON.stringify(notes));
    console.log(notes);
  },[notes])
  
  return (
    <>
      
      <Navbar />
      <Form setNotes={setNotes} />
      <div className="Container">
        <div className="row justif-content-center">
          <div className="col-md-10">
            <h1 className="mb-3">Your Notes</h1>
            {notes.length === 0 ? (
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">Message</h5>
                  <p className="card-text">
                    No notes are available for reading.
                  </p>
                </div>
              </div>
            ) : (
              notes.map((element) => (
                <Notes
                  element={element}
                  key={element.id}
                  notes={notes}
                  setNotes={setNotes}
                  
                />
                
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
  function getNotesFromLs() {
    const note = JSON.parse(localStorage.getItem("notes"));
    if (note) {
      return note;
    } else {
      return [];
    }
  }
}

export default App;
