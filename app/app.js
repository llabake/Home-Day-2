var request        = require('request'),
   readline       = require('readline'),
   requestPromise = require('request-promise'),
   apiUrl         = "";

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

console.log("Please enter your github username");
rl.question('==>  ', (username) => {
   apiUrl = "https://api.github.com/users/" + username;
   getGithubData(username);
   rl.close();
});

function getGithubData(username){
   console.log(apiUrl);
   var options = {
       uri: apiUrl,
       headers: {
           'User-Agent': username 
       }
   };

   requestPromise(options)
   .then(function(response){
       var data = JSON.parse(response)
       displayData(data);
   })
   .catch(function(err){
       console.log(err);
   })
}

function displayData(gitData){
   console.log(gitData);
   console.log("----------These are your infos----------");
   console.log("Location:     " + gitData['location']);
   console.log("Followers:    " + gitData['followers']);
   console.log("Following:    " + gitData['following']);
   console.log("Public repos: " + gitData['public_repos']);
   console.log("Public gists: " + gitData['public_gists']);
}