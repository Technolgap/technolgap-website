import { TwitterTweetEmbed } from 'react-twitter-embed';
const Twitter = require('twitter');
const client = new Twitter({
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  access_token_key: process.env.access_token_key,
  access_token_secret: process.env.access_token_secret
});
const params = {screen_name: 'technolgap', exclude_replies: true};

export default function TweetCard() {
    const tweetId = () => {
        client.get('statuses/user_timeline', params, function(error, tweets, response) {
            if (!error) {
                console.log(tweets[0].id);
                return tweets[0].id;
            };
        });
    };
    return(
        <TwitterTweetEmbed
            tweetId={'1302781761928261632'}
        />
    );
}


