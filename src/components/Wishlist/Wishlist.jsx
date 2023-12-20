import { useState } from "react";
import { GrInProgress } from "react-icons/gr";
import { MdDone } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
export default function Wishlist() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const handleInput = (evt) => {
    setInput(evt.target.value);
  };

  const addList = () => {
    if (input) {
      setList([...list, { text: input, completed: false }]);
      setInput("");
    }
  };

  const toggleComplete = (i) => {
    setList(
      list.map((newList, index) => {
        if (index === i) {
          return { ...newList, completed: !newList.completed };
        }
        return newList;
      })
    );
  };

  const deleteList = (i) => {
    //->
    // const selectedList = list.map((newList, index) =>
    //   index != i ? newList : null
    // );
    // setList(selectedList.filter((newList) => newList != null));
    setList(list.filter((newlist, l) => l !== i));
  };

  return (
    <>
      <div className="bg-primary text-white p-5 text-center">
        <h1>WISH LIST</h1>
        <p>Add New List</p>
        <input
          type="text"
          name="list"
          id="list"
          value={input}
          onChange={handleInput}
          className="rounded"
        />
        <button
          type="submit"
          className="btn btn-outline-white text-white"
          onClick={addList}
        >
          Add
        </button>
      </div>
      <div className="d-flex justify-content-center m-4">
        <ul className="w-50">
          {list.map((newList, index) => (
            <li
              className="list-group-item d-flex justify-content-evenly p-2 col-12 border rounded m-1"
              key={index}
            >
              <div className="col-8 ">
                <h5
                  style={{
                    textDecoration: newList.completed ? "line-through" : "none",
                  }}
                >
                  {newList.text}
                </h5>
              </div>
              <div className=" col-2 ">
                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    toggleComplete(index);
                  }}
                >
                  {/* {newList.completed ?  "done" :"in progress"} */}
                  {newList.completed ? <MdDone /> : <GrInProgress />}
                </button>
              </div>
              <div className=" col-2  d-flex justify-content-end">
                <button
                  className="btn btn-outline-danger"
                  onClick={() => {
                    deleteList(index);
                  }}
                >
                  <AiFillDelete />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
