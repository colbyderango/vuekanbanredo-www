var client = io.connect('https://vuekanban.herokuapp.com/api/');

client.on('message', function(data){
    console.log(data);
});