const express = require('express')
const app = express()
const PORT = 2121

const savage = {
  'age': 30,
  'birthName': 'kings'
}


// Main Page/ Index.html
app.get('/', (req, res)=>{
  res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res)=>{
  const rapperName = req.params.name.toLowerCase()

  if (rappers[rapperName]) {
    res.json(rappers [rapperName])
  } else {
    response.json(rappers['unknown'])
  }
})



app.listen(PORT, () => {
  console.log(`The server is running on Port ${PORT}! You better go catch it`)
}) 