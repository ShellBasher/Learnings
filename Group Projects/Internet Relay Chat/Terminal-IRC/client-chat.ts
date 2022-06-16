var socket = require('socket.io-client')('http://localhost:3000');
  const repl = require('repl')
  let username: any = null
  let room: any = ""
  let actuelRoom: any = ""
  let friend: any = ""
  let receiver: any = ""

    socket.on('disconnect', function() {
        socket.emit('disconnect')
  });

    socket.on('connect', () => {
        console.log('=== start chatting ===')
        username = process.argv[2]
  })

    socket.on('message', (data: any) => {
        const { cmd, username } = data
        console.log(username + ': ' + cmd.split('\n')[0]);
  }) 
  socket.on('emite', (data: any) => {
    console.log(data);
}) 

repl.start({
        prompt: '',
        eval: (cmd: any) => {
        let array =  cmd.split(" ");
        var commande = array[0];
        if (commande == "join-room") {
            room = array[1]
            socket.emit(commande, username, room )
        } else if (commande == "add-friend") {
            friend = array[1]
            socket.emit(  commande, username, friend )
        } else if (commande == "create-room") {
            room = array[1]
            socket.emit(  commande, username, room )
        } else if (commande == "use-room") {
            actuelRoom = array[1]
            room = array[1]
            socket.emit(  commande, username, room )
        } else if (commande == "private-message") {
            receiver = array[1]
            socket.emit(  commande, username, receiver )
        } else if (commande == "users-list") {
            room = array[1]
            socket.emit(  commande, username, room )
        } else if (commande == "delete-room") {
            room = array[1]
            socket.emit(  commande, username, room )
        } else if (commande == "chat-history") {
            room = array[1]
            socket.emit(  commande, username, room )
        } else {
            socket.emit(  commande, username, room )
        }
      }
  })

  export {};