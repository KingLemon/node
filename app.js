const express = require ('express');
const app = express();

app.get('/', (req, res) => {
    res.send("JCWebb.com is a media site for Christian men");
});

const port = process.env.port || 3000;
app.listen(port, () => {
    console.log("Wazzappppp");
});

