const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());


app.get('/', (req, res) => {
    const data = {
        message: 'Hello, world!',
        name: 'Hitesh',
        class: 25,
    };
    res.json(data);
});

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});
