const express = require ('express');
const app = express();

app.get('/', (req, res) => {
    res.send("JCWebb.com on its way");
});

const port = process.env.port || 3000;
app.listen(port, () => {
    console.log("Wazzappppp");
});

