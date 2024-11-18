const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

let tasks = []

app.get('/', (req, res)=>{
    res.send(tasks)
})

app.post('/', (req, res) =>{
    tasks.push(req.body.task)
    res.send('Added Successfully')
})

app.put('/', (req, res) =>{
    tasks.push(req.body.task)
    res.send('Added Successfully')
})

app.delete('/:id', (req,res) =>{
    let id = req.params.id
    tasks.splice(id, 1)
    res.send('Deleted Successfully')
})

app.listen(port, () =>{
    console.log(`app listening to port ${port}`)
})