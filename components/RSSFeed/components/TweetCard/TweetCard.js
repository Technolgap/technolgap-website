import { TwitterTweetEmbed } from 'react-twitter-embed';
const Twitter = require('twitter');
const client = new Twitter({
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  access_token_key: process.env.access_token_key,
  access_token_secret: process.env.access_token_secret
});
const params = {screen_name: 'technolgap', exclude_replies: true};

export async function getStaticProps() {
    const res = await client.get('statuses/user_timeline', params)
      .then(function (tweets) {
        console.log(tweets);
      })
      .catch(function (error) {
        throw error;
      })

    const tweetId = await res.json()
    console.log(res.json());
  
    return {
      props: {
        tweetId,
      },
    }
  }

export default function TweetCard({ tweetId }) {
    return(
    <>
        {console.log(tweetId)}
        <TwitterTweetEmbed
            tweetId={'1298684274598727683'}
        />
    </>
    );
}


