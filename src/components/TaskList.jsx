import { StyledCard } from "./styles";

const TaskList = ({ tasks }) => {
  return (
    <StyledCard>
      <div className="item">
        {tasks.length === 0 ? (
          <div className="text-center text-bold">No tasks added yet</div>
        ) : (
          <ol>
            {tasks.map((task) => (
              <li key={task.id}>{task.content[0]}</li>
            ))}
          </ol>
        )}
      </div>
    </StyledCard>
  );
};

export default TaskList;
