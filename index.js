const newTask = (title, description) => {
  const task = {
    title: title,
    description: description,
    complete: false,

    logTaskState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    completeTask: function() {
      this.complete = true;
    }

  };
  return task;
};




// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", 'Take out all of the 💩 out!');
const task2 = newTask("Do Laundry", "Laundry Time! ♻️");
const tasks = [task1, task2];
task2.completeTask();
task1.completeTask();
task2.logTaskState();
task1.logTaskState();
console.log(tasks);






