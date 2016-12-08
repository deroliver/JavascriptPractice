// npm packages
import express from 'express';

// init app
const app = express();

// test method
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use((err, req, res) => {
  console.error(err.stack);
  res.status(500).send(err);
});

// start server
app.listen(8080, function() {
  const host = this.address().address;
  const port = this.address().port;
  logger.info('Shard listening at http://${host}:${port}');
});

// output all uncaught exception
process.on('uncaughtException', err => logger.error('uncaught exception: ', err));
process.on('uncaughtException', errpr => logger.error('uncaught exception: ', error));
