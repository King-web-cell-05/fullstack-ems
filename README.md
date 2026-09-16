# 🏢 Employee Management System

A modern and responsive **Employee Management System (EMS)** built to simplify employee administration, attendance tracking, leave management, and payroll management.

The application provides separate experiences for **Administrators** and **Employees**, with a clean dashboard-driven interface designed for real-world business use.

---

## 🚀 Overview

The Employee Management System is a full-stack web application designed to help organizations manage their employees and daily HR operations from a centralized platform.

The system includes:

- 🔐 Authentication & role-based access
- 👥 Employee management
- 📊 Dashboard
- 🕐 Attendance management
- 🏖️ Leave management
- 💰 Payslip management
- 🖨️ Printable payslips
- 👤 Employee profile management
- 🔑 Password management
- 📱 Responsive user interface
- 🔔 Toast notifications
- ⚡ Modern React architecture

---

## ✨ Features

### 🔐 Authentication

Users can access the system through dedicated authentication portals.

- Admin login
- Employee login
- Role-based access
- Protected application routes
- Authentication-ready architecture

---

### 👨‍💼 Admin Dashboard

Administrators can manage important employee-related operations from a centralized dashboard.

Admin functionality includes:

- View employees
- Manage employee records
- Monitor attendance
- Manage leave requests
- Manage payslips
- Access system settings

---

### 👤 Employee Dashboard

Employees have access to their personal information and work-related records.

Employees can:

- View their dashboard
- View attendance information
- Submit/view leave information
- View payslips
- Print payslips
- Update their profile
- Change their password

---

### 👥 Employee Management

The employee management module provides a centralized location for employee records.

Employee information can include:

- First name
- Last name
- Email
- Position
- Employee information
- Other profile details

---

### 🕐 Attendance Management

The attendance module is designed to help organizations keep track of employee attendance.

Potential attendance information includes:

- Employee
- Date
- Check-in
- Check-out
- Attendance status

---

### 🏖️ Leave Management

Employees and administrators can manage leave records through the leave management system.

Features include:

- Leave requests
- Leave history
- Leave status
- Approval/rejection workflow
- Admin leave management

---

### 💰 Payslip Management

The payroll module allows employees and administrators to access payslip information.

Payslips contain:

- Employee name
- Email
- Position
- Pay period
- Basic salary
- Allowances
- Deductions
- Net salary

---

### 🖨️ Printable Payslips

Each payslip has its own printable page.

Example route:

```text
/print/payslips/:id
