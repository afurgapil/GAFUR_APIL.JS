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

## Step 4

> The process of data fetching and saving to localStorage is continued by defining a function named loadData. First, localStorage is checked using a predefined localKey. If a dataset with a matching ID is found, it is retrieved from localStorage. If no matching entry exists, the data is fetched remotely via a GET request and then stored in localStorage.

> A manual verification is performed by logging the number of elements in the dataset. Since the dataset is expected to be dynamic, no hard-coded validation is applied. However, two if statements are included to ensure that an array is received and that it is not empty.

## Step 5

> First, a control mechanism is needed here, as the story section on the e-bebek site loads slightly slower than the rest of the page. If we run our code before the stories are fully loaded, we may encounter errors. Therefore, a control can be added at the beginning of the `buildHtml` function to check this. By doing so, we can ensure a stable structure by verifying both the presence of the story section and the custom carousel.

> Since we need to build a pixel-perfect design, the first task is to access the current CSS file via the browser. We can save this file as `style.css` and use the class names from it to speed up the design process.

> Another important point to note is that the existing styles might affect the elements within our new section. To proceed more safely, it would be beneficial to use a "custom" prefix in naming to isolate our styles.

> After this preparation, we can create the banner and carousel structure with the correct dimensions. A potential issue here is that the carousel arrows are defined as static SVG images. We can solve this by downloading the SVG source files and embedding their inline SVG code directly into our section.
