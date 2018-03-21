const port = process.env.PORT; //|| 10000;
const server = require("http").Server();

var io = require("socket.io") (server);
var allusers1 = [];
var allusers2 = [];

io.on("connection", function(socket){
    console.log("connect");
    //allusers.push(socket.id);
    //console.log(allusers);
    
    //socket.emit("yourid", socket.id);
    
    //io.emit("userjoined", allusers);
    socket.on("joinroom", function(data){
        console.log(data)
        socket.join(data);
        
        socket.myRoom = data;
        socket.emit("yourid", socket.id);
        
        
        if(data == "room1"){
            allusers1.push(socket.id);
            io.to(data).emit("userjoined", allusers1);
            
        } else if (data == "room2"){
            allusers2.push(socket.id);
            io.to(data).emit("userjoined", allusers2);
        }
    });
    
    socket.on("mymove", function(data){
    socket.to(this.myRoom).broadcast.emit("newmove", data);    
    });
    
    
    socket.on("disconnect", function(){
        var index = allnames.indexOf(socket.id);
        allnames.splice(index, 1);
        io.emit("userjoined2", allnames);
        

    })
});

server.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false;
    }
    
    console.log("Port is running");
})









