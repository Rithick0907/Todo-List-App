import { StyledCard } from "./styles";

const TaskList = ({ tasks }) => {
  return (
    <StyledCard>
      <div className="item">
        {tasks.length === 0 ? (
          <div className="text-center text-bold">No tasks added yet</div>
        ) : (
          tasks.map((task) => <div>{task}</div>)
        )}
      </div>
    </StyledCard>
  );
};

export default TaskList;
