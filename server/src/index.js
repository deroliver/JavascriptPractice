import app from './app';

// start server
app.listen(8080, function() {
  const host = this.address().address;
  const port = this.address().port;
  console.info('Shard listening at http://${host}:${port}');
});

// output all uncaught exception
process.on('uncaughtException', err => console.error('uncaught exception: ', err));
process.on('unhandledRejection', errpr => console.error('uncaught exception: ', error));
