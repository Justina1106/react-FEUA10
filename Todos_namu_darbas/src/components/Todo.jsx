import PropTypes from "prop-types";
import "./Todo.css";

const Todo = (props) => {
  const { todo, index } = props;
  return (
    <div className="todo-card">
      <h3>
        {index + 1}. {todo.title}
      </h3>
      <p>{todo.completed ? "Baigta" : "Nebaigta"}</p>
      <a href="#">Read more...</a>
    </div>
  );
};

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }),
  index: PropTypes.number.isRequired,
};

export default Todo;