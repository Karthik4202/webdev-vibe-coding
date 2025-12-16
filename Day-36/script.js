async function fetchUserData() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Failed to fetch : ",error);
    }
}

fetchUserData();

function task1() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Task 1 completed"), 1000);
  });
}

function task2() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Task 2 completed"), 1500);
  });
}

function task3() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Task 3 completed"), 500);
  });
}

async function runTasks() {
  try {
    console.log("Completing the tasks...")
    const results = await Promise.all([
      task1(),
      task2(),
      task3()
    ]);
    console.log("Tasks Completed")
    console.log(results);
  } catch (error) {
    console.error("One of the tasks failed:", error);
  }
}
//Promise.all executes promises in parallel, so the total time taken is equal to the slowest promise
runTasks();
