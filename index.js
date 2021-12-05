const express = require('express')
const app = express()
const port = 3000 || process.env.PORT

app.get('/', (req, res) => res.json({
    "message": "hii",
    "messdage": "hii",
    "medsssage": "hii",
    "messsage": "hii"
}));



app.listen(port, () => console.log(`Example app listening on port ${port}!`))