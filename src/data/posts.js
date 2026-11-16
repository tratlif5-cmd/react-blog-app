// Static blog post data. Each post includes its own starter comments.
const posts = [
  {
    id: 1,
    title: "Getting Started with React and Vite",
    author: "Chase Ratliff",
    date: "2026-10-12",
    likes: 12,
    content:
      "Vite makes starting a React project fast. Instead of waiting on a slow bundler, the dev server starts almost instantly and updates the page as soon as you save. In this post I walk through creating a project, organizing components into folders, and passing data down with props.",
    comments: [
      { id: 1, name: "Maya", text: "This helped me set up my first project. Thanks!" },
      { id: 2, name: "Jordan", text: "I didn't realize how much faster Vite is than Create React App." },
    ],
  },
  {
    id: 2,
    title: "Understanding Props and State",
    author: "Chase Ratliff",
    date: "2026-10-15",
    likes: 8,
    content:
      "Props let a parent component pass data to its children, while state lets a component remember information that changes over time. A good rule of thumb is to keep state in the closest common parent of the components that need it, and pass it down as props.",
    comments: [
      { id: 1, name: "Alex", text: "The closest common parent tip finally made it click for me." },
    ],
  },
  {
    id: 3,
    title: "Making Accessible Web Pages",
    author: "Chase Ratliff",
    date: "2026-10-18",
    likes: 5,
    content:
      "Accessibility means everyone can use what we build. Using semantic HTML elements like header, nav, main, and footer, adding labels to form inputs, and keeping strong color contrast are simple habits that make a big difference for people using screen readers or keyboards.",
    comments: [
      { id: 1, name: "Priya", text: "Great reminder to always label form inputs." },
      { id: 2, name: "Sam", text: "Would love a follow up on keyboard navigation!" },
    ],
  },
];

export default posts;
