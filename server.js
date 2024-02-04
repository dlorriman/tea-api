const express = require('express')
const app = express()
const cors = require('cors')
PORT = 8000

app.use(cors())

const tea = {
    'oolong': {
        'type': 'black',
        'origin': 'south',
        'waterTemp': 200,
        'steepTimeSeconds': 180,
        'caffinated': true,
        'flavor': 'delicious'
    },
    'matcha': {
        'type': 'green',
        'origin': 'east',
        'waterTemp': 220,
        'steepTimeSeconds': 240,
        'caffinated': false,
        'flavor': 'bland'
    },
    'unknown': {
        'type': 'unknown',
        'origin': 'unknown',
        'waterTemp': 0,
        'steepTimeSeconds': 0,
        'caffinated': false,
        'flavor': 'unknown'
    }
}

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on ${PORT}`)
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res) => {
	const teaName = req.params.name.toLowerCase()
	if (tea[teaName]) {
        res.json(tea[teaName])
    } else {
        res.json(tea['unknown'])
    }
})