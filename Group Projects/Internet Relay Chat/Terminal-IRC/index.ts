var http = require('http');


var server = http.createServer(this);
var port = 3000

const stuffCtrl = require('./Controller/stuff');
const roomCtrl = require('./Controller/room');

var io = require('socket.io')(server);



io.on('connection', (socket: any) => {
    console.log('a user just connected')
    console.log(socket.id); // x8WIv7-mJelg7on_ALbx

    socket.on('disconnect', (evt: any) => {
        console.log('some people left')
    })
    
    socket.on("create-room", (username: any, room:any) => {
        roomCtrl.createThing(username, room, (data:any) =>{
            io.to(socket.id).emit("emite", data)
        })
        
      });
    
    socket.on("use-room", (username: any, room:any) =>{
        roomCtrl.addUser(username, room.split('\n')[0], (data:any) =>{
            io.to(socket.id).emit("emite", data)
        })
    });
    
    socket.on("join-room", (username: any, room:any) => {
        console.log(`you just joined ${room} room`);
    });
    
    socket.on("delete-room", (username: any, room:any) => {
        console.log(`you left ${room} room`);
    });
    
    socket.on("users-list", (username: any, room:any) => {
        stuffCtrl.getAllStuff((data:any) =>{
            io.to(socket.id).emit("emite", data)
        })
    });
    
    socket.on("private-message", (username: any, room:any) => {
        console.log(`new private chat : `)
    });
    
    socket.on("add-friend", (username: any, room:any) =>{
        console.log(`you added ${username} as your friend`)
    });

    socket.on("chat-history", (username: any, room:any) =>{
        console.log(username)
    });

    socket.on('message', (evt: any, nickname:String,) => {
        console.log(evt, "ooooooooooo")
        socket.broadcast.emit('message', evt)
    })
})





module.exports = io;

server.listen(port, () => console.log(`server listening on port: ${port}`))