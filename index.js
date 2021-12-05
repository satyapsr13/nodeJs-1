const express = require('express')
const app = express()
const port = 3000 || process.env.PORT
const user=require("./routes/user.js")
 app.use(express.json() );
app.use("/", user);



app.listen(port, () => console.log(`Example app listening on port ${port}!`))