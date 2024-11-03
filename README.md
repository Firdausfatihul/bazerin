# Bazerin

## Overview


Bazerin is a **Next.js** application built with **TypeScript**, **Tailwind CSS**, **tRPC**, and **Prisma**. It is designed to help users enhance their Instagram engagement by performing tasks such as commenting on posts, purchasing comments for corporate accounts, engaging with followers, and managing their profiles. The platform offers a seamless and responsive user experience, ensuring users can efficiently navigate and complete tasks to boost their Instagram presence.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Folder Structure](#folder-structure)
- [Scripts](#scripts)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)
---
## Features

- **Responsive Design**
  - Mobile-friendly interface developed with Tailwind CSS for optimal user experience across devices.
- **API Integration**
  - Utilizes tRPC for type-safe API calls, ensuring seamless communication between frontend and backend.
- **Progressive Web App (PWA)**
  - Configured with manifest and meta tags to support PWA features, enhancing performance and user engagement.
- **State Management**
  - Efficient state handling within the application to manage user data and task progression.
--
## Tech Stack
- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **API**: [tRPC](https://trpc.io/)
- **Database**: [Prisma ORM](https://www.prisma.io/) with PostGre
- **Fonts**: [Geist UI Sans](https://github.com/geist-org/geist-ui)
## Getting Started
### Prerequisites
- **Node.js**: Ensure you have Node.js installed. [Download Node.js](https://nodejs.org/)
- **Package Manager**: npm or yarn
### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/bazerin.git
   cd bazerin
   ```

2. **Install Dependencies**
   Using npm:   ```npm install```
   Or using yarn: ```   yarn install```
3. **Set Up Environment Variables**
   Create a `.env` file in the root directory based on `.env.example` (if available).
   ```   cp .env.example .env```
   
   Populate the `.env` file with necessary environment variables:
   ```DATABASE_URL="postgresql://postgres:password@localhost:5432/bazerin"```
4. **Set Up the Database**
   Initialize the Prisma ORM and migrate the database schema:
   ```   npx prisma migrate dev```
   
### Running the Project
Start the development server:
Using npm:
```npm run dev```

Using yarn:
```yarn dev```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Contributing
Contributions are welcome! To ensure a smooth collaboration process, please follow these guidelines:
1. **Fork the Repository**
   Click the "Fork" button on the repository page to create your own copy.
2. **Clone Your Fork**

   ```bash
   git clone https://github.com/yourusername/bazerin.git
   cd bazerin
   ```
3. **Create a Feature Branch**

   ```bash
   git checkout -b feature/YourFeatureName
   ```
4. **Make Your Changes**
   Implement your feature or fix. Ensure your code follows the project's coding standards.
   
5. **Commit Your Changes**

   ```bash
   git commit -m "Description of your changes"
   ```

6. **Push to Your Fork**

   ```bash
   git push origin feature/YourFeatureName
   ```

7. **Open a Pull Request**
   Navigate to the original repository and open a pull request from your fork and feature branch. Provide a clear description of your changes and the problem they solve.
### Code Standards
- **Formatting**
  - Use Prettier for consistent code formatting.
  - Run `npm run format` before committing.
- **Linting**
  - Ensure code passes all ESLint checks.
  - Run `npm run lint` to identify and fix linting errors.
- **Testing**
  - Write tests for new features and ensure existing tests pass.
  - (If applicable) Utilize testing frameworks like Jest or React Testing Library.
  - 
### Reviewing Process
All pull requests are subject to review. The maintainer will ensure that:

- Code follows project standards.
- Features are fully implemented and functional.
- Tests are provided and passing.
- Documentation is updated accordingly.
---
This project is licensed under the [MIT License](LICENSE).
---
If you have any questions or need further assistance, feel free to reach out via the project's issue tracker.
