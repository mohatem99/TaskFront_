
# 📝 Task Management System

### A web-based application for managing tasks efficiently with features like task categorization, priority levels, real-time notifications, and role-based access.

## 📌 Table of Contents

- [🌟 Overview](#-overview)
- [🚀 Features](#-featuers)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [Usage](#-usage)
- [API Documentation](#-api-documentation)
- [Authentication](#-authentication)
- [Contributing](#-contributing)
- [License](#-license)

## 🌟 Overview

The **Task Management System** is designed to help individuals and teams manage tasks effectively. The system allows users to create, update, delete, and categorize tasks with different priority levels. It includes real-time notifications, role-based user management, and data visualizations via a user-friendly dashboard. This project uses modern technologies to ensure scalability, security, and ease of use.

## 🚀 Features

- **Task Management**: Create, update, delete, and categorize tasks.
- **Real-Time Notifications**: Receive instant updates for task assignments and status changes via Socket.IO.
- **Task Filtering**: Filter tasks based on status, priority, category, or due date.
- **User Roles**: Admins can manage users, while regular users can manage their tasks.
- **Secure Authentication**: Registration and login using JWT for secure authentication.
- **Dashboard**: Visualize task stats (completed tasks, tasks by priority, etc.) using charts and graphs.
- **Responsive UI**: Designed for mobile and desktop users.

## 🛠 Tech Stack

**Frontend:**

- React.js , Vite
- TailwindCSS
- Flowbite

**Backend:**

- Node.js
- Express.js
- MongoDB (Database)
- Socket.IO (Real-time Notifications)

**Authentication:**

- JWT (JSON Web Tokens)
- bcrypt (Password Hashing)

## ⚙️ Installation

To get a local copy up and running, follow these steps:

1. **Clone the repository:**
    
    ```git clone https://github.com/mohatem99/task-management-system.git ```
    
2. **Install dependencies:**
    
    **Backend:**
    `cd backend npm install`
    
    **Frontend:**
    ```cd frontend npm install```
    
3. **Set up environment variables:** Create a `.env` file in both `frontend` and `backend` directories with the following keys:
    
    **Backend:**
    ```PORT=5000 MONGO_URI=your-mongodb-uri JWT_SECRET=your-jwt-secret SOCKET_PORT=5001```
    
    **Frontend:**
    ```REACT_APP_API_URL=http://localhost:5000/api```
    
4. **Run the application:**
    
    **Backend:**
    ```
    cd backend
    npm install
    npm start
   ```
    
    **Frontend:**
    ```npm run dev```

    
6. **Access the application:** Open your browser and go to `http://localhost:3000`.
    

## 💡 Usage

### Task Management

1. **Create Tasks**: Create tasks by specifying title, description, due date, priority, category, and assignee.
2. **Update/Delete Tasks**: Easily update task details or delete them if no longer needed.
3. **Categorization and Filtering**: Organize tasks by categories and filter them by status, priority, or due date.
4. **Real-Time Notifications**: Get instant alerts when tasks are assigned to you or when their status changes.

### Admin Features

- Admin users have the ability to manage tasks across the system and view analytics for all users.
- They can also assign tasks and track overall project progress.

## 📋 API Documentation


| **Endpoint**                      | **Method** | **Description**                                                                             |
| --------------------------------- | ---------- | ------------------------------------------------------------------------------------------- |
| **Auth Endpoints**                |            |                                                                                             |
| `/auth/register`                  | POST       | Register a new user                                                                         |
| `/auth/login`                     | POST       | Log in and receive a JWT token                                                              |
| `/auth/forgetPassword`            | POST       | Request password reset OTP                                                                  |
| `/auth/verify-otp`                | POST       | Verify the OTP for password reset                                                           |
| `/auth/reset-password`            | POST       | Reset the user's password after OTP verification                                            |
| **Categories Endpoints**          |            |                                                                                             |
| `/categories`                     | POST       | Create a new category                                                                       |
| `/categories/:cat_id`             | PUT        | Update an existing category (replace `:cat_id` with category ID)                            |
| `/categories/:user_id`            | GET        | Get categories for a specific user (replace `:user_id` with user ID)                        |
| `/categories/:cat_id`             | DELETE     | Delete a category (replace `:cat_id` with category ID)                                      |
| `/categories`                     | GET        | Get all categories for all users                                                            |
| **Tasks Endpoints**               |            |                                                                                             |
| `/tasks`                          | POST       | Create a new task                                                                           |
| `/dash-stats`                     | GET        | Get task statistics                                                                         |
| `/tasks`                          | GET        | Get tasks for the logged-in user                                                            |
| `/tasks/:task_id`                 | PUT        | Update an existing task (replace `:task_id` with task ID)                                   |
| `/tasks/:task_id`                 | DELETE     | Delete a task (replace `:task_id` with task ID)                                             |
| `/tasks/:task_id`                 | GET        | Get a specific task by its ID (replace `:task_id` with task ID)                             |
| **User Endpoints**                |            |                                                                                             |
| `/users`                          | GET        | Get a list of all users                                                                     |
| `/users/update-me`                | PUT        | Update the logged-in user's information                                                     |
| `/users/update-my-password`       | PUT        | Update the logged-in user's password                                                        |
| `/users/me`                       | GET        | Get the profile data for the logged-in user                                                 |
| **Notification Endpoints**        |            |                                                                                             |
| `/notifications`                  | GET        | Get notifications for the logged-in user                                                    |
| `/notifications/:notification_id` | PUT        | Update a task that triggers notifications (replace `:notification_id` with notification ID) |

##### Notes:

- Ensure to replace the parameters (like `:cat_id`, `:user_id`, `:task_id`, and `:notification_id`) with the actual values when making requests.



## 🔑 Authentication

1. **User Registration**: Users must register an account using an email and password.
2. **JWT Authentication**: Upon successful login, users will receive a JWT token that is stored securely in a cookie.
3. **Password Recovery**: If a user forgets their password, they can request an OTP to reset their password.

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.