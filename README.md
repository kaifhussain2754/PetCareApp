# Pet Care Web Application

## Overview

Simba's Care is a web application designed initially for our cat Simba, but it has evolved into a professional tool for all pet owners. The application aims to provide a seamless and valuable experience for managing and caring for pets. 

<img width="1470" alt="Screenshot 2024-07-27 at 5 11 37 PM" src="https://github.com/user-attachments/assets/f6c433f5-70df-4845-9a14-963eed3c26d2">
<img width="1470" alt="Screenshot 2024-07-27 at 5 13 19 PM" src="https://github.com/user-attachments/assets/aad14e97-afa9-4090-a08e-fa4a9182530a">
<img width="1470" alt="Screenshot 2024-07-27 at 5 13 49 PM" src="https://github.com/user-attachments/assets/4dbb0602-4c6d-4ec2-b2de-938f0292ab52">
<img width="1470" alt="Screenshot 2024-07-27 at 5 14 16 PM" src="https://github.com/user-attachments/assets/e63fcc0a-d205-43c4-8578-a12aedeb9d04">

### Features
- **Task Management**: Track and manage tasks related to your pet’s care.
- **Expense Tracking**: Keep track of your pet-related expenses.
- **Reminders**: Set and manage reminders for pet care activities.
- **Chatbot**: Access a chatbot for instant help and information.
- **Responsive Design**: Enjoy a user-friendly interface on both desktop and mobile devices.

### Tech Stack
- **Frontend**: React with Vite, MUI (Material-UI), FontAwesome
- **Backend**: Node.js with Sequelize
- **Database**: SQL (MySQL)
- **Styling**: Bootstrap, MUI (Material-UI)

### Getting Started

#### Frontend

1. **Clone the repository**:
   ```bash
   git clone [https://github.com/kaifhussain2754/PetCareApp.git]
   ```

2. **Navigate to the project directory**:
   ```bash
   cd simbas-care
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Set up the environment variables**:
   - Create a `.env` file in the root directory and add the following:
     ```env
     VITE_APP_API_URL=http://localhost:5000/api/expenses
     ```

5. **Run the frontend application**:
   ```bash
   npm run dev
   ```

6. **Open your browser** and go to `http://localhost:3000`.

#### Backend

1. **Navigate to the backend directory** (if it’s in a separate folder):
   ```bash
   cd backend
   ```

2. **Install backend dependencies**:
   ```bash
   npm install
   ```

3. **Set up the environment variables**:
   - Create a `.env` file in the backend directory and add the necessary configurations:
     ```env
     DATABASE_URL=mysql://user:password@localhost:3306/simba-app
     PORT=5000
     ```

4. **Run database migrations** (if applicable):
   ```bash
   npm run migrate
   ```

5. **Start the backend server**:
   ```bash
   npm start
   ```

### Contributing

Contributions are welcome! Please submit issues or pull requests to improve the application.

### License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to adjust any sections or add more details specific to your project.
