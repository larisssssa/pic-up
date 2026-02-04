# Client Side Requirements
## Data Requirements
1. You must have an ERD for your project.
1. You must have a user-related data scheme. This means that different people can authenticate with your application, and the resources that are created must be assigned to individual users.
1. In addition to having user-related data, you need to have at least one more 1 -> many relationships defined in your ERD.
1. Having a many -> many relationship is recommended, but not required for your client side project.
1. You are required to use the persistent storage tool that you were taught (i.e. json-server, firebase, SQL Server, SQLite, etc.).
## Application Design Requirements
1. You must support CRUD in your application. Create data, Read data, Update data, Delete data
1. You are required to use React.
1. You must have a form that allows a user to create a new resource.
1. Your form must include `<select>` element, radio button group, or checkbox group that allows a user to choose a related resource. For example, if your application allows users to create new plants for their home, one of the fields in the form must allow them to select something like the following items:
    - The room it will be in.
    - The level of sunlight it needs.
    - It's type.
1. You must show your proficiency with writing modular code that follows the the Single Responsibility Principle.
1. Your application must support multiple routes to show different views to the user, and the user must be able to navigate to each route/view.
1. Customer must be able to delete their own data, and be prevented from deleting other customers' data.
1. Customer must be able to edit their own data, and be prevented from editing other customers' data.
1. You must be able to implement a flexible layout for your UI by either (a) authoring your own CSS using Flexbox, or (b) using a 3rd party framework like Bootstrap.
1. All copy for your application must be legible, so pay attention to colors, margins, padding, and font sizes.

## Proposal
🧨 This section provides information about what must be include in your proposal when you submit it.
1. Your proposal must clearly articulate the problem it is solving for your customers.
1. Your proposal must define a minimum of four user stories that describe the core functionality of your application. Registration and login do not count since you are given the code for those.
1. Your proposal must include a hyperlink to your ERD and it must be accessible by the instructors. Do not include a picture of your ERD.
1. Your proposal must include wireframes that comprehensively show the journey of a user through your application.
    - Each view must be represented. Do not include login/register unless you need to customize those views for your user experience.
    - Buttons or links must be included with notes/arrows describing what happens when the customer clicks on it.
1. If you are using an external API, gather all sample data and be prepared to demo your API during your one on one (via Postman and with an HTTP request in code (i.e. fetch, axios, etc.) before committing to use the API.
- For help on authoring good user stories, please refer to the Behavior Driven Development Wikipedia entry

---
## Guidelines After MVP
Once your capstone MVP is complete, you want to make sure it is ready to impress your professional network, which includes all future employers? Then make sure you complete this checklist. These are not part of your official NSS proficiency assessment, but can make a huge impact on how others perceive you and your professionalism.

### General
1. Project details
    1. Make sure your project name is in the `<title>` tag of public/index.html.
    1. Make sure your project name is correct in the name property in your package.json.
1. Have a comprehensive README that has the following sections.
    1. Introduction
    1. Purpose & motivation for project
    1. How does the application work? (animations are always good)
    1. How was the application developed?
    1. How to install and run the application.
    1. Difficulties & challenges faced during process.
    1. Public link (if exists).
1. No zombie code. Having chunks of code that are commented out is unprofessional.
1. No console logs.
1. The console in your Developer Tools should not have any errors.
1. Student should be able to explain any warnings in the console.
1. Professional/meaningful commit and PR messages.
1. Write a minimum of 4 integration tests for your client and/or server side project.
### Design
1. Limited color palette (3 colors)
1. Most text copy should be left aligned
1. Use of padding/margins
1. Consistency: views, cards, fonts, sizes, etc.
1. If you use images in your application, they must be resized, if needed, for display in the UI and the correct ratio must be maintained.