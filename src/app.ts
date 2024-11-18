import express from 'express';
import cors from 'cors';
import studentRoute from './app/students/student.route';
const app = express();

// use perse and middleware
app.use(express.json());
app.use(express.raw());
app.use(cors());
app.use(studentRoute);

app.get('/', (req, res) => {
  res.send('Server is running!!');
});

// export app for server
export default app;
