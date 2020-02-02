$.ajax({
    url: 'http://localhost:8080/characterList/kontusbonde',
    type: 'GET',
    headers: {
        'Access-Control-Allow-Origin': '*' //Allowing access controll from node server
    },
    dataType: 'json',
    success: function (data) {
        $.each(data, function (i, obj) { //Iterate the JSON
            if (obj.league == "Metamorph") {
                $('.charactes').append('<p>' + obj.name + ' is playing in ' + obj.league + ' and is level ' + obj.level + '</p>');
            }
            //use obj.id and obj.name here, for example. Will return character name:
            console.log(obj.name);

        });
    }

});