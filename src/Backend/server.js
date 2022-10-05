const express = require('express')
const connectToMongoose = require('./database')

const app = express();
connectToMongoose();


const port = 5000

//middleware for using request
app.use(express.json())

//Available routes
app.use('/api/auth' , require('./routes/auth'))



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
