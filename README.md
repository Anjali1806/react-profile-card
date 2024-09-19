# Frontend Developer Profile Card with Skills

This is a simple React app that displays a profile card along with a list of skills, using a modern, clean design. It includes an introductory section with an image, bio, and a skills section that lists the user's skills with indicators of their proficiency levels.

## Demo

![image](https://github.com/user-attachments/assets/accdc86d-971e-4fcc-b41e-d25e63160c6e)


## Features

- **Intro Section**: Displays the developer's name, profile picture, and bio.
- **Skills Section**: Lists key skills with color-coded proficiency levels.
- **Dynamic Data**: The skills and intro data are dynamically rendered from arrays.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **CSS**: For styling the profile card and layout.
  
## Installation and Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Anjali1806/react-profile-card.git
   cd profile-card-react

2. **Install dependencies: Ensure you have Node.js installed, then run**:
    ```bash
    npm install
    
3. **Run the app: Start the development server**:
    ```bash
    npm start

## Folder Structure
  ```bash
├── public
│   └── index.html
├── src
│   ├── index.js
│   ├── style.css
│   └── App.js
├── .gitignore
├── package.json
└── README.md
```
## Component Breakdown
**App.js**
The main component that renders the profile and skills list.

**Intro Component**
This component displays the user’s profile image, name, and bio.

**Skills Component**
Renders a list of skills. Each skill has a proficiency level indicated with a corresponding emoji:
- Beginner: 👶
- Intermediate: 👍
- Advanced: 💪
