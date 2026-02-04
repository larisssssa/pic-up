# PicUp - a photographer application

PicUp is an application for project management app for photographers. PicUp offers the following capabilities:
 - For Projects:
    - Create new projects
    - View Project Details
    - Update project status
    - Delete Projects

---
## Components
- auth
  - login.css
  - Login.jsx
- nav
  - NavBar.jsx
  - NavBar.css
- welcome
  - Welcome.jsx
  - Welcome.css
- users
  - Users.jsx
- projects
  - Project.jsx
  - Project.css
  - ProjectList.jsx
  - ProjectList.css
- dashboard
  - Dashboard.jsx
  - Dashboard.css
- forms
  - ProjectNew.jsx
  - ProjectEdit.jsx
  - Form.css

## Views
- ApplicationViews.jsx
- Authorized.jsx

## Services
- userService.js
- projectService.js

## Database
- Tables
  - users
    - id
    - name
    - email
    - isAdmin
  - projects
    - id
    - name
    - data
    - userId
    - statusId
  - photos
    - id
    - fileName
    - link
  - status
    - id
    - status
  - projectPhotos
    - id
    - projectId
    - photoId

---
## Issues
Project setup
- create components
- create database

Starter Pages
- create welcome page
- create home dashboard
- navigation

View Project List
View Project Details
Create New Project
Update Project
Delete Project
