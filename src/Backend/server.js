const express = require('express')
const connectToMongoose = require('./database')
const cors = require('cors')

const app = express();
connectToMongoose();


const port = 5000

//middleware for using request
app.use(express.json())
app.use(cors())

//Available routes
app.use('/api/auth' , require('./routes/auth'))
app.use('/api/kurti' , require('./routes/kurti'))



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
