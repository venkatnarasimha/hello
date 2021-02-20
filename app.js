const express=require('express');

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req,resp) => {
    resp.send('Hello World!');
});

app.get('/alien', (req,resp) => {
    resp.send("Welcome Back ALIEN");
});

app.get('/alien/:id', (req,resp) => {
    const id=req.params.id;
    resp.send("Welcome "+ id);
})

app.listen(port, () => {
    console.log(`running @ ${port}`);
})