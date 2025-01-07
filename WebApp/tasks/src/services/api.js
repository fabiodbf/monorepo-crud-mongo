// fake-api.js

// Simulated delay function to mimic async API calls
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Mock database
const mockDatabase = {
  tasks: [
    {
      id: "M5LTVUCCGDEOX1MM",
      text: "Complete project documentation",
      completed: false,
      order: 1,
    },
    {
      id: "M5LTWBHIBDOKDU1H",
      text: "Submit the weekly report",
      completed: true,
      order: 2,
    },
    {
      id: "M5LTWJ6LIAXSX4CK",
      text: "Fix the login bug",
      completed: false,
      order: 3,
    },
  ],
};

// Fake API methods
export const fetchTasks = async () => {
  await delay(500); // Simulate network delay
  return mockDatabase.tasks;
};

export const addTask = async (text, completed = false, order) => {
  await delay(500);
  const newTask = {
    id: mockDatabase.tasks.length + 1,
    text,
    completed,
    order: order || mockDatabase.tasks.length + 1,
  };
  mockDatabase.tasks.push(newTask);
  return newTask;
};

export const updateTasks = async (updatedTasks) => {
  await delay(500);
  mockDatabase.tasks = updatedTasks;
  return mockDatabase.tasks;
};

export const deleteCompletedTasks = async () => {
  await delay(500);
  mockDatabase.tasks = mockDatabase.tasks.filter((task) => !task.completed);
  return mockDatabase.tasks;
};
