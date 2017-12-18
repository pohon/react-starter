import express from "express";
import react from "react";
import { renderToString } from "react-dom/server";
//import StaticRouter
import { StaticRouter } from 'react-router-dom';
import App from "../client/App.jsx";
import fs from "fs";
import path from "path";

//HEROKU process.env
const port = process.env.PORT || 3000;
const publicPath = path.resolve("dist","public");
const index = fs.readFileSync(publicPath+"/index.html","utf-8");
const app = express();

app.use(express.static(publicPath));
app.get("/", (req,res) =>{

  //bukan lagi render <App /> tapi <App /> dibungkus
  //router kayak di browser bedanya di server kita
  //pake StaticRouter bukan BrowserRouter 
  const content = renderToString(
    <StaticRouter>
      <App />
    </StaticRouter>
  );

  const finalHtml = index.replace("<!--APP-->",content);  
  res.send(finalHtml);
});

app.listen(port, () => {
  console.log("server is up");
});

