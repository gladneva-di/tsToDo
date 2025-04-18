import { ToDo } from "../../models/todo-item"
import classes from "./ListItem.module.css";

export const ListItem = ({todo}: {todo: ToDo}) => {
    return (
            <a target="_blank" className={`${classes.link} ${todo.isDone ? classes.done : classes.notdone}`} href={`/app/list/${todo.id}`}>{todo.text}</a>
    )
}