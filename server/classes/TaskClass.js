class TasksC {
  constructor(ID, userID) {
    this._id = ID;
    this.userID = userID;
    tasks = [];
  }

  updateCounter() {
    this.counter = tasks.length;
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
        amount: 0,
      },
      {
        type: "Gold",
        amount: 0,
      },
      {
        type: "Item",
        amount: 0,
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
