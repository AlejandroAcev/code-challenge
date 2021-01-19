import express, { static } from 'express';
import favicon from 'express-favicon';
import { join } from 'path';
const port = process.env.PORT || 8080;
const app = express();

app.use(favicon(__dirname + '/build/favicon.ico'));
app.use(static(__dirname));
app.use(static(join(__dirname, 'build')));

app.get('/health', function (req, res) {
 return res.send('Everything is okay!');
});
app.get('/health', ((req, res) =>
  res.send('Everything is okay!')
));

app.get('/*', ((req, res) => { 
  res.sendFile(join(__dirname, 'build', 'index.html'))
}));

app.listen(port);