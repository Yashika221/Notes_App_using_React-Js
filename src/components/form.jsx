import React,{useState} from "react";
function Form({setNotes}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const inputHandler = (e) => {
    if (e.target.id === "title") {
      setTitle(e.target.value);
    } else {
      setDescription(e.target.value);
    }
  };
  const addNotesHandler = (e) => {
    e.preventDefault();
    if (title !== "" && description !== "") {
      setNotes((note) => {
        return [
          ...note,
          {
            title: title,
            description: description,
            id: new Date().getTime(),
          },
        ];
      });
    }
    setTitle("");
    setDescription("");
  };
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <form
              style={{
                border: "2px solid #ced4da",
                borderRadius: "10px",
                padding: "30px",
              }}
            >
              <div className="mb-3">
                <label for="title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder="Enter Your Title"
                  value={title}
                  onChange={inputHandler}
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Description
                </label>
                <textarea
                  name="description"
                  id="description"
                  rows="3"
                  className="form-control"
                  placeholder="Enter Your Description"
                  value={description}
                  onChange={inputHandler}
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                onClick={addNotesHandler}
              >
                Add Notes
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Form;
