$.ajax({
    url: 'http://localhost:8080/characterList/kontusbonde',
    type: 'GET',
    headers: {
        'Access-Control-Allow-Origin': '*'
    }, // <-------- set this
    dataType: 'json', // // <-------- use JSONP
    success: function (data) {
        $.each(data, function (i, obj) {
            if (obj.league == "Metamorph") {
                $('.charactes').append('<p>' + obj.name + ' is playing in ' + obj.league + ' and is level ' + obj.level + '</p>');
            }
            //use obj.id and obj.name here, for example:
            console.log(obj.name);

        });
    }

});