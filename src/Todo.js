import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import React from "react";
import "./Todo.css";

function Todo(props) {
  return (
    <div>
      <List className="todo__list">
        <ListItemAvatar></ListItemAvatar>
        <ListItem>
          <ListItemText primary={props.todo} secondary="Dummy DeadLine😢" />
        </ListItem>
      </List>
      {/* <li>{props.todo}</li> */}
    </div>
  );
}

export default Todo;
