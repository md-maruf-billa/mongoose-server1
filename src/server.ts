// import app
import app from './app';
import config from './app/config/index';

// define port
const port = 5000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
