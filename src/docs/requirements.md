Data Requirements
You must have an ERD for your project.
You must have a user-related data scheme. This means that different people can authenticate with your application, and the resources that are created must be assigned to individual users.
In addition to having user-related data, you need to have at least one more 1 -> many relationships defined in your ERD.
Having a many -> many relationship is recommended, but not required for your client side project.
You are required to use the persistent storage tool that you were taught (i.e. json-server, firebase, SQL Server, SQLite, etc.).
Application Design Requirements
You must support CRUD in your application. Create data, Read data, Update data, Delete data
You are required to use React.
You must have a form that allows a user to create a new resource.
Your form must include <select> element, radio button group, or checkbox group that allows a user to choose a related resource. For example, if your application allows users to create new plants for their home, one of the fields in the form must allow them to select something like the following items:
The room it will be in.
The level of sunlight it needs.
It's type.
You must show your proficiency with writing modular code that follows the the Single Responsibility Principle.
Your application must support multiple routes to show different views to the user, and the user must be able to navigate to each route/view.
Customer must be able to delete their own data, and be prevented from deleting other customers' data.
Customer must be able to edit their own data, and be prevented from editing other customers' data.
You must be able to implement a flexible layout for your UI by either (a) authoring your own CSS using Flexbox, or (b) using a 3rd party framework like Bootstrap.
All copy for your application must be legible, so pay attention to colors, margins, padding, and font sizes.

Proposal
🧨 This section provides information about what must be include in your proposal when you submit it.
Your proposal must clearly articulate the problem it is solving for your customers.
Your proposal must define a minimum of four user stories that describe the core functionality of your application. Registration and login do not count since you are given the code for those.
Your proposal must include a hyperlink to your ERD and it must be accessible by the instructors. Do not include a picture of your ERD.
Your proposal must include wireframes that comprehensively show the journey of a user through your application.
Each view must be represented. Do not include login/register unless you need to customize those views for your user experience.
Buttons or links must be included with notes/arrows describing what happens when the customer clicks on it.
If you are using an external API, gather all sample data and be prepared to demo your API during your one on one (via Postman and with an HTTP request in code (i.e. fetch, axios, etc.) before committing to use the API.
For help on authoring good user stories, please refer to the Behavior Driven Development Wikipedia entry
