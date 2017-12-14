$(document).ready(function(){

    var api = "https://wind-bow.glitch.me/twitch-api/streams/ESL_SC2";

    $.ajax({    
        url: (api),
        type: 'GET',
        dataType: 'jsonp',
        success: function(a) {
            
        pageJsonData = a;
        console.log(pageJsonData);

         
        
        },
        error: function() { console.log('Failed!'); },
    });



});