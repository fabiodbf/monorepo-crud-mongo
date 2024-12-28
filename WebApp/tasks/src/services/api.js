// fake-api.js

// Simulated delay function to mimic async API calls
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Mock database
const mockDatabase = {
  users: [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Charlie", email: "charlie@example.com" },
  ],
  posts: [
    {
      id: 1,
      title: "Hello World",
      content: "This is my first post!",
      userId: 1,
    },
    {
      id: 2,
      title: "React is Great",
      content: "React makes UI development so much easier.",
      userId: 2,
    },
    {
      id: 3,
      title: "Mock APIs",
      content: "Simulating APIs is super useful for development.",
      userId: 3,
    },
  ],
};

// Fake API methods
export const fetchUsers = async () => {
  await delay(500); // Simulate network delay
  return mockDatabase.users;
};

export const fetchUserById = async (id) => {
  await delay(500);
  return mockDatabase.users.find((user) => user.id === id) || null;
};

export const fetchPosts = async () => {
  await delay(500);
  return mockDatabase.posts;
};

export const fetchPostsByUserId = async (userId) => {
  await delay(500);
  return mockDatabase.posts.filter((post) => post.userId === userId);
};

// Example of adding new data
export const addPost = async (title, content, userId) => {
  await delay(500);
  const newPost = {
    id: mockDatabase.posts.length + 1,
    title,
    content,
    userId,
  };
  mockDatabase.posts.push(newPost);
  return newPost;
};
