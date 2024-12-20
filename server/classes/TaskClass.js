class TasksC {
  constructor(userID) {
    this.userID = userID;
    this.tasks = [];
  }
}

class TaskC {
  constructor(ID, title, description, creationDate, dueDate, priority, status) {
    this._id = ID;
    this.title = title;
    this.description = description;
    this.creationDate = creationDate;
    this.dueDate = dueDate;
    this.priority = priority;
    this.status = status;

    this.steps = [];

    this.taskRewards = [
      {
        type: "XP",
        amount: 100,
      },
      {
        type: "Gold",
        amount: 100,
      },
      {
        type: "Item",
        amount: 100,
      },
    ];
  }

  updateCounter() {
    this.counter = steps.length;
  }
}

class StepC {
  constructor(ID, description, status) {
    this._id = ID;
    this.description = description;
    this.status = status;
  }
}

export { TasksC, TaskC, StepC };
