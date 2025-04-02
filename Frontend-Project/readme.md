Paste Manager

Overview

Paste Manager is a web application that allows users to create, edit, view, copy, share, and delete text-based pastes. Built with React and Redux, it provides an intuitive interface with Tailwind CSS for styling.

Features

Create and update pastes with a title and content.

View existing pastes.

Copy pastes to clipboard.

Share pastes via link.

Delete pastes.

Technologies Used

React (Frontend framework)

Redux (State management)

React Router (Navigation)

Tailwind CSS (Styling framework)

Installation

Clone the repository:

git clone https://github.com/ranjansharma-ui/paste-manager.git
cd paste-manager

Install dependencies:

npm install

Start the development server:

npm start

Project Structure

Paste-Manager/
│── src/
│   ├── components/        # Reusable UI components
│   ├── pages/             # Application pages
│   ├── redux/             # Redux state management
│   ├── App.js             # Main app component
│   ├── index.js           # Entry point
│── public/
│── package.json
│── tailwind.config.js
│── README.md

Usage

Navigate to the homepage to create a new paste.

Click Edit to modify an existing paste.

Click Copy to copy the paste content to the clipboard.

Use Share to share the paste link.

Click Delete to remove a paste.