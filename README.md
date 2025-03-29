# Job Tracking Application for Curtains and Blinds Industry

## Overview
Job Tracking Application designed to streamline the management of customer orders, team assignments, job scheduling, and material procurement. The system integrates customers, teams, jobs, job sheets, scheduling, and ordering, providing a centralized platform to enhance visibility and efficiency for every stakeholder. The application aims to improve job tracking, boost team productivity, and reduce overhead by eliminating paperwork and manual processes.

## Core Features

### 1. User Authentication and Role Management
- Users can register, sign in, and access features based on their role.
- Role-based Access Control supports Administrators, Team Members, Customers, and Sales Representatives, each with specific permissions.

### 2. Home Dashboard
- Overview of assigned jobs, upcoming schedules, and pending tasks.
- Displays key performance metrics.
- Quick navigation to create new jobs or view customer details.

### 3. Customer Database Management
- Manage customer records including name, address, phone number, email, and associated jobs.
- Search, filter, and view all past, ongoing, and future jobs for each customer.
- Add, edit, and delete customers from the database using the GUI.

### 4. Job Management
- Create, track, and update jobs with detailed information including job type, assigned teams, customer details, and job sheets.
- View and modify job progress, assign team members, and access job details.

### 5. Calendar
- View scheduled jobs in daily, weekly, or monthly formats.
- Schedule, reschedule, or cancel jobs with notifications about changes.

### 6. Teams
- Manage different teams involved in sales, production, and installation.
- Assign members to teams, track team workload, and manage team roles and permissions.
- Create new jobs, assign teams, assign team members, and associate customers.

### 7. Materials
- Track and manage materials required for each job, including ordering, delivery, and backorders.
- Link materials to specific jobs and customers and track their status.

### 8. Job Sheets
- Create, manage, and store job sheet details digitally, including customer-specific measurements and order details.
- Link job sheets to specific jobs and customers for easy tracking.

## Installation

Clone the repository:
```sh
git clone https://github.com/LXMachado/ynK0sI-acab.git
cd ynK0sI-acab
```

Install dependencies:
```sh
npm install  # or yarn install
```

## Usage

Run the project:
```sh
npm start  # or yarn start
```

### Environment Variables
If the project requires environment variables, create a `.env` file and add the necessary keys:
```sh
ENV_VAR_NAME=value
```

## Tech Stack
- **Frontend:** React with TypeScript
- **Framework:** Vite Remix
- **UI Components:** Ant Design
- **Styling:** Tailwind CSS
- **API:** tRPC React Query
- **Database:** Prisma ORM / PostgreSQL

## Contributing
Feel free to submit issues and pull requests.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
