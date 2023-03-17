import "../styles/todoList.css";
import { useState } from "react";
import Todo from "./Todo";
import EditTodo from "./EditTodo";
import {doc,updateDoc,deleteDoc} from "firebase/firestore"
import {db} from "../firebase"

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
function TodoList({ id, title, description, completed }) {
  const [checked, setChecked] = useState(completed);
  const [open, setOpen] = useState({ edit: false, view: false });

  const handleClose = () => {
    setOpen({ edit: false, view: false });
  };

  /* function to update document in firestore */
  const handleCheckedChange = async()=>{
    const todoDocRef = doc(db,'todos',id)
    try{
      await updateDoc(todoDocRef,{
        completed:checked     })
    }
    catch(err){alert(err)}
  }
  /* function to delete a document from firstore */
  const handleDelete = async() =>{
    const todoDocRef = doc(db,'todos',id)
    try{
      await deleteDoc(todoDocRef)
    }catch(err){
      alert(err)
    }
  }
  return (
    <div className={`todoList ${checked && "todoList--borderColor"}`}>
      <div>
        <input
          id={`checkbox-${id}`}
          className="checkbox-custom"
          name="checkbox"
          checked={checked}
          type="checkbox"
          onChange = {handleCheckedChange}
        />
        <label
          htmlFor={`checkbox-${id}`}
          className="checkbox-custom-label"
          onClick={() => setChecked(!checked)}
        ></label>
      </div>
      <div className="todoList__body">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="todoList__buttons">
          <div className="todoList__deleteNedit">
            <button
              className="todoList__editButton"
              onClick={() => setOpen({ ...open, edit: true })}
            >
              <EditIcon/>
            </button>
            <button className="todoList__deleteButton" onClick={handleDelete}><DeleteIcon/></button>
          </div>
          <button onClick={() => setOpen({ ...open, view: true })}><VisibilityIcon/></button>
        </div>
      </div>

      {open.view && (
        <Todo
          onClose={handleClose}
          title={title}
          description={description}
          open={open.view}
        />
      )}

      {open.edit && (
        <EditTodo
          onClose={handleClose}
          toEditTitle={title}
          toEditDescription={description}
          open={open.edit}
          id={id}
        />
      )}
    </div>
  );
}

export default TodoList;
