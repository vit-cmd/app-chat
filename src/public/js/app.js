const socket = io.connect();
const chatHistory = document.getElementById('chatHistory');

$('#chatForm').submit(function(){
  socket.emit('chatMessage', $('#msg').val());
  $('#msg').val('');
  return false;
});

socket.on('messageTo', (msg) => {
  chatHistory.innerHTML += ` <li class="clearfix">
  <div class="message my-message">${msg}</div>                                    
</li> `;
})