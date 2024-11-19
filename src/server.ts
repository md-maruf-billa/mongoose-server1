// import app
import app from './app';
import { connect } from 'mongoose';
// define port
const port = 5000;

async function run() {
  // 4. Connect to MongoDB
  try {
    await connect(
      'mongodb+srv://admin:admin123@cluster0.fp7vkua.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    );
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (err) {
    console.error(err);
  }
}

run();
