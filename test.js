const port = process.env.PORT || 10000;
const server = require("http").Server();

var io = require("socket.io") (server);


io.on("connection", function(socket){
    console.log("connect");
    //allusers.push(socket.id);
    //console.log(allusers);
    
    //socket.emit("yourid", socket.id);
    
    //io.emit("userjoined", allusers);
    socket.on("joinroom", function(data){
        console.log("joinroom", data);
        
        socket.join(data);
        socket.myRoom = data;
    })
    
    socket.on ("disconnect", function(){
        
        
    })
});

server.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false;
    }
    
    console.log("Port is running");
})









