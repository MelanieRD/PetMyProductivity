import "./TaskDetail.css";

export const TaskDetail = () => {
  return (
    <>
      <hr />
      <div className="Task">
        <div className="infoTask">
          <label>
            <input type="checkbox" name="CheckBox" /> <a>Task</a>
          </label>
          <p>Description, Time</p>
        </div>

        <div className="infoCoin">
          <img src="" alt="" />
          <p>Coins: 30</p>
        </div>
      </div>
    </>
  );
};
