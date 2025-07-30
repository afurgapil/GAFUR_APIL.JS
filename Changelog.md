# Changelog

This `Changelog.md` file documents the thought process, implementation steps, and architectural decisions behind the product carousel project developed for the homepage.

---

## Step 1

> To ensure a successful development process, the project requirements were first defined with clear boundaries.

> All the necessary specifications were documented in the `Requirements.md` file.

## Step 2

> A simple roadmap was prepared to track ongoing development and to ensure that no gaps existed in the project requirements, thereby maintaining overall project integrity.

> The requirements were simplified, converted into backlog items, and a Kanban board was created to monitor progress.

## Step 3

> URL control was implemented by retrieving the current URL via `window.location.href` and comparing it against the target e-bebek homepage URLs. If a match was found, the script continued to run; otherwise, `"wrong page"` was logged to the console.

> Modular JavaScript functions were created to manage HTML, CSS, and event handling operations. This made it possible to dynamically inject a `<div>` element after the stories section, as required.

> Since 3rd party tools were not allowed in this project, styling solutions like SCSS modules were avoided. Instead, pure CSS was used with attention to responsive design.

> Although jQuery was permitted, it was considered unnecessary, as all required functionality could be achieved using vanilla JavaScript.
