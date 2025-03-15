# Tech Quiz Application

## License

This project is licensed under the [MIT License](LICENSE).

## Description

The Tech Quiz application is a fully functional quiz platform built with the MERN stack. Users can take a quiz consisting of ten randomly selected questions and view their final score. This project enhances the existing application by integrating Cypress for both component and end-to-end testing.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Contribution Guidelines](#contribution-guidelines)
- [Questions](#questions)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/tech-quiz-app.git
   ```
2. Navigate to the project directory:
   ```sh
   cd tech-quiz-app
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Set up environment variables in a `.env` file:
   ```sh
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```
5. Start the development server:
   ```sh
   npm run develop
   ```

## Usage

- Start a quiz with ten randomly generated questions.
- Answer the questions and submit your responses.
- View the final score upon completion.

## Testing

### Cypress Installation

1. Install Cypress as a dev dependency:
   ```sh
   npm install cypress --save-dev
   ```
2. Open Cypress for configuration:
   ```sh
   npx cypress open
   ```

### Component Testing
- Create a Cypress component test for the quiz component.
- Ensure the quiz component renders correctly.
- Validate that questions display properly.

### End-to-End Testing
- Write an end-to-end test for the quiz flow.
- Simulate a user completing the quiz.
- Verify that the final score is displayed correctly.

## Contribution Guidelines

Contributions are welcome! Follow these steps:

1. Fork the repository.
2. Create a new feature branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

## Questions

If you have any questions, please feel free to reach out:

GitHub: jutalexa2024
Email: justin@example.com
