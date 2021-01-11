// 加载Express模块
const express = require("express");
// 加载CORS模块
const cors = require("cors");
// 加载body-parser模块(在Express4.5及以上的版本,自带body-parser中间件)
const bodyParser = require("body-parser");
// 加载MD5模块
const md5 = require("md5");
// 加载MySQL模块
const mysql = require("mysql");
// 创建WEB服务器
const server = express();

// 为所有的HTTP请求使用CORS模块
server.use(
  cors({
    origin: ["http://127.0.0.1:8080", "http://localhost:8080"],
  })
);
// 为所有的HTTP请求使用body-parser模块
server.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

//创建MySQL连接池
const pool = mysql.createPool({
  // 数据库服务器的地址
  host: "127.0.0.1",
  // 数据库服务器的端口号
  port: 3306,
  // 数据库用户的用户名
  user: "root",
  // 数据库用户的密码
  password: "",
  // 数据库名称
  database: "4UMovie",
  // 最大连接数
  connectionLimit: 15,
});

// 