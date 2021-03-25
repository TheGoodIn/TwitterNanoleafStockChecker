

require('dotenv').config();



const AuroraAPI = require('nanoleafy-js');
const aurora = new AuroraAPI({
    host: process.env.ip,
    token: process.env.token
});
 
aurora.info().then(info =>
{
    console.log(info);
});




const Twitter = require('twit');
const twitterConf = {
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret,
    access_token: process.env.access_token,
    access_token_secret: process.env.access_token_secret,
  }

const twitterClient = new Twitter(twitterConf);



const stream = twitterClient.stream('statuses/filter', {
  follow: '1363974177099816968'
});

stream.on('tweet', tweet => {
    if (tweet.retweeted_status == undefined) {

        console.log(tweet)
     
        console.log(tweet.user.id_str)
       console.log(tweet.text)
       const zotac = process.env.keyword
       if (tweet.text.toLowerCase().includes(zotac.toLowerCase())){
           console.log('test')
           aurora.setEffect(process.env.effectname)
       }

    }
});


