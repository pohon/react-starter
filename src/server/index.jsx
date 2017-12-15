import express from 'express';
import react from 'react';
import { renderToString } from 'react-dom/server';
import App from '../client/App.jsx';
import fs from 'fs';
import path from 'path';

//HEROKU process.env
const port = process.env.PORT || 3000;
const publicPath = path.resolve('dist','public');
const index = fs.readFileSync(publicPath+'/index.html','utf-8');
const app = express();

app.use(express.static(publicPath));
app.get('/', (req,res) =>{
  const content = renderToString(<App initialName="Server rendered" />);
  const finalHtml = index.replace('<!--APP-->',content);  
  res.send(finalHtml);
});

app.listen(port, () => {
  console.log('server is up');
});

