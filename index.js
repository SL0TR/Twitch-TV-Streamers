$(document).ready(function(){
    
    
        // https://wind-bow.glitch.me/twitch-api/streams/ESL_SC2
        // https://wind-bow.glitch.me/twitch-api/users/freecodecamp
    
        var api = "https://wind-bow.glitch.me/twitch-api/";
        // var type = ["users", "streams"];
        // var streamer = ["ESL_SC2", "freecodecamp", "riotgames" ];
    
    
    
        function fetchApiData (type, streamer) {
            $.ajax({    
                url: (api + type + '/' + streamer)  ,
                type: 'GET',
                dataType: 'jsonp',
                success: function(data) {
                    
                streamApiFetches(data.logo);
                },
                error: function() { console.log('Failed!'); },
            });
    
    
        };
    
        // RIOTGAMES
        function streamApiFetches(logo) {
             
    
            $(".riotgames-logo").attr("src", logo);
    
        }
    
    
    
        fetchApiData("users", "riotgames");   
    
        
    
    });