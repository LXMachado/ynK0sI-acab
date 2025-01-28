<div style="background: black;">
<p align="center" style="margin: 0;"</p>
<h1 align="center" style="margin: 0;">ACAB - A Job Management App</h1>

<a  style="margin: 0;" target="_blank" href="https://marblism.com">
<p align="center" style="margin: 0; letter-spacing: 3px;
text-decoration: none;">
marblism
</p>
</a>
</div>
<div style="height: 50px; background: linear-gradient(#000000, transparent);"></div>

## Overview

ACAB is a job management application designed to streamline operations across multiple departments, focusing on client management, job tracking, material handling, and collaboration. This app aims to enhance operational efficiency, improve communication between departments, and enable seamless job tracking and client management.

## Core Features

### 1. Authentication

- Secure user login and registration system with password protection.
- Role-based access control to restrict or allow access to specific app sections.

### 2. Dashboard

A centralized home page displaying:

- Real-time analytics and insights from all departments (Representatives, Curtains, Tracks, Blinds, Installation).
- Quick links to manage clients, jobs, materials, worksheets, and stock.

### 3. Client Management

- Add, edit, delete, search, filter, and view client details.
- Fields: Name, Surname, Email, Address (Street, Suburb, State), Phone (Australian format), Company details.
- Auto-generate unique Client IDs for database consistency.
- Link each client to their associated jobs for quick access.

### 4. Job Management

- Add, edit, delete, and view jobs with assigned details.
- Fields: Job Name, Job Address, Client, Representative, Material Requirements.
- Auto-generate unique Job IDs for consistent tracking.
- Job Status Tracking with predefined statuses.

### 5. Material Details

- Specify materials with descriptions, quantities, and status (Ordered, In Stock, Backorder).
- Provide department-specific job overviews for Tracks, Blinds, and Curtains.

### 6. Worksheets

- Create department-specific worksheets before starting manufacturing.
- Export worksheets as PDFs for use by manufacturing and installation teams.

### 7. Stock Management

- Centralized inventory tracking for all departments.
- Display stock status: Ordered, Delivered, Backorder, Cancelled.

### 8. Installation Features

- Weekly schedules with assigned jobs, progress tracking, and required materials.
- Status updates for each job during the installation process.

### 9. Export/Reporting

- Export worksheets and job details as PDFs.
- Generate reports summarizing materials required, job progress, and department performance.

## Technical Considerations

- Responsive and functional across devices, especially iPads.
- Clean and intuitive UI/UX for users with minimal technical experience.
- Scalability to accommodate additional user stories or departments in the future.

## Installation

<div style="color: red;">

> ⚠️ **Important**<br/>Make sure the following tools are installed on your computer

<p align="center">

<a target="_blank" href="https://www.docker.com/get-started/">![Docker Desktop Version](https://img.shields.io/badge/Docker%20Desktop-4.19.0-black?logo=docker)</a>
<a target="_blank" href="https://nodejs.org/en">![Node.js version](https://img.shields.io/badge/Node.js-20.11.0-black?logo=nodedotjs)</a>
<a target="_blank" href="https://www.npmjs.com/">![npm Version](https://img.shields.io/badge/npm-10.2.4-black?logo=npm)</a>

</p>
</div>

<br />

```bash
$ pnpm run init
Development
$ pnpm run dev
View your application in your browser

Production
$ pnpm run build
$ pnpm run start
Support
We reply FAST on our <a target="_blank" href="https://discord.gg/GScNz7kAEu">Discord server</a>.

Stay in touch
```
