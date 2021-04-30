let express = require('express')
let bodyParser = require('body-parser');
let app = express();
let http =require('http').Server(app);
let io = require('socket.io')(http);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname));

// defin an variable 
let messages = [

    {name: 'Ash', message:"What is up"}
    
]

app.get('/messages', (req, res)=>{

    res.send(messages);
});

app.post('/messages', (req, res)=>{

    messages.push(req.body);
    io.emit('message', req.body);
    console.log(req.body);  
    res.sendStatus(200); 
})

io.on('connection',(Socket)=>{

    console.log("A user is connected");
})


let server = http.listen(1212, () =>{

    console.log('server is listiniig on port', server.address().port );
});


git
