# PIS (Pharmacy Information System) by Alimate
[url]: https://www.enterpriseappstoday.com/wp-content/uploads/2023/04/Pharmacy-Information-Systems-Market.jpg
![pharmacy information system][url]
### Description
to run this project on your pc you can __clone__ this project to your project : 
#### 1. change directory to your main project dir :
```
cd PIS-Pharmacy-information-System
```
#### 2. clone this project to your project : 
```
git clone <repo address>
```
#### 3. install the package dependency of your project : 
* install the dependencies for React with buldler tool (like vite)
  ```
  npm init
  ```
* install the requirement for node js project to run the server.js
  ```
  npm install express nodemon
  ```

#### 4. to run the project after this works  : 
**for run react project**
```
npm run dev
```
**to run the server of PIS**
```
nodemon server.js
```
or if you add nodemon to your __pakcage.json__ as script you can run with :
```
npm run nodemon
```
#### running first server with nodeJs 
  ```
  const express = require('express')
  const app = express()

  app('/' , (req , res) => {
    res.send('this is test server');
  })

  app.listen(3000 , (err) => {
    console.log('server is running on port 3000 ....');
  })
  ```


