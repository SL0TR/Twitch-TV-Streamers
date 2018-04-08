$(document).ready(function(){
    
    
        // https://wind-bow.glitch.me/twitch-api/streams/ESL_SC2
        // https://wind-bow.glitch.me/twitch-api/users/freecodecamp
    
        var api = "https://wind-bow.glitch.me/twitch-api/";
        // var type = ["users", "streams"];
    
    
        function fetchApiData (type, streamer) {
            $.ajax({    
                url: (api + type + '/' + streamer),
                type: 'GET',
                dataType: 'jsonp',
                success: function(data) {   

                streamApiFetches(data.logo, data.display_name, data.stream);

                },
                error: function() { console.log('Failed!'); },
            });
    
    
        };

        var streamer = ["ESL_SC2", "freecodecamp", "riotgames" ];



        for(var i = 0; i < streamer.length; i ++ ) {
    
            
                fetchApiData("streams", streamer[i]);
                fetchApiData("users", streamer[i]);


            function streamApiFetches(logo, name, status) {      
                                
                    
                $(".streamer-name").eq(i).text(name);
                $(".streamer-logo").eq(i).attr("src", logo);

                if (status === null) {
                    status = "Offline";
                }

                $(".status").eq(i).text(status);

                console.log(i);
        
            }   
            
        }
    });