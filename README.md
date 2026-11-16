# Module 11 React Blog Lab

This is my React blog project from Module 10, updated to use an API.

## Run the project

1. Open this folder in VS Code.
2. Open Terminal.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the localhost link shown in Terminal.

You need internet access to load blog posts.

## What I added

- The home page gets posts from JSONPlaceholder using `fetch`, `useEffect`, and `useState`.
- Clicking Read more opens that post using its ID in the URL.
- Each post loads its author and comments from the API.
- The comment form uses a POST request and shows the new comment.
- There are loading messages and error messages (my bonus feature).

JSONPlaceholder is a test API. Comments posted to it are not permanently saved.

I kept the Contact page and theme switch from Module 10.
