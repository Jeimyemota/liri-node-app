var action= process.argv[2];

var nodeArg= process.argv;

var value= "";

//loop through the words in the node arg

for (var i= 3; i <nodeArg.length; i++){
    
    if (i > 3 && i < nodeArg.length) {
        value = value + "+" + nodeArg[i];
    } else {
        value = value + nodeArg[i];
    }
}

//switch for apps

switch (action) {
    case 'my-tweets':
        twitter();
        break;
    case 'spotify-this-song':
        spotify();
        break;
        case "do-what-it-says":
            dwis();
        break;
}

//--------------------Spotify---------
function spotify(){
    if (value !=false){
        var spotify = require('spotify');
        
        spotify.search({
            type: 'track',
            query: value + '&limit=1&'},
                function(error, data) { 
                        if (error) {
            console.log('Error! '+ error);
            return;
        }
                                        
         console.log('-------------------');
         console.log('Here is your song! ' + value + '.');
         console.log(' ');
         console.log('Here are the specs!');
         cosole.log('Title: '+ data.tracks.items[0].name); 
         console.log("Artist Name: " + data.tracks.items[0].artists[0].name);
         console.log(' ');
        console.log('Preview URL: ' + data.tracks.items[0].preview_url);
        console.log(' ');
            }
        });
        
    } else {
        var spotify = require('spotify');
        
        spotify.search({
            type: 'track',
            query: 'ace+of+base+sign' + '&limit=1&' }, 
                       function(error) {
            console.log('Error!: '+ error);
            return;
        }
                 console.log('-------------------');
         console.log('Boo! You didnt enter a song!, I guess I will give you one! ' + alue + '.');
         console.log(' ');
         cosole.log('Title: '+ data.tracks.items[0].name); 
         console.log("Artist Name: " + data.tracks.items[0].artists[0].name);
         console.log(' ');
        console.log('Preview URL: ' + data.tracks.items[0].preview_url);
                                                });          
        }
    }
}

//--------------------twitter---------

function twitter(){
    var fs = require('fs');
    
    var twitKey = require ('./key.js');
    
    var twit = require('twitter');
    
    var client = new Twitter(twittKey.twitterkeys);
    
    var parameters = {screen_name: value, count:20};
    client.get('statuses/user_timeline', parameters, function(error, tweet, response){
        if (!error) {
            console.log('-----------')
            console.log('Tweeting....');
            
            for (var i = 0; i < tweets.length; i++){
                console.log('----------');
                console.log('Tweeted on: '+ tweets[i].created_at);
                console.log(tweets[i].text);
            }
        }
    });
}

//----------------------IMDB-----------

function imdb(){
    var request = require('request');
    
    request('http://www.omdbapi.com/?t=' + value + '&y=&plot=short&tomatoes=true&r=json', function(error, response, body) {
        if (value != false) {
            console.log('')
        }
}