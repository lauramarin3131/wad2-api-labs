import React from "react";

const AddTaskForm = (props) => {

  return (
    <div>
       <form onSubmit={props.submit}>
            <label>
                Task title:
                <input type="text" name="title" required onChange={(event) => props.change(event)} />
            </label>
            <br />
            <label>
                Due date:
                <input type="date" name="deadline" required onChange={(event) => props.change(event)} />
            </label>
            <br />
            <label>
                Details:
                <input type="text" name="description" onChange={(event) => props.change(event)} />
            </label>
            <br/>
            <label>
                Priority:
                <select
                  name="priority"
                  value={props.priority}
                  onChange={props.change}
                  style={{
                    width: "100%",
                    padding: "12px 20px",
                    margin: "8px 0",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                    boxSizing: "border-box",
                  }}
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>

            </label>

        <input type="submit" value="Submit" />
        </form>
    </div>
  )
};

export default AddTaskForm;
