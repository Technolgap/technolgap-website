import { TwitterTweetEmbed } from 'react-twitter-embed';

export default function TweetCard({ tweets }) {
    return(
      <TwitterTweetEmbed
          tweetId={tweets[0].id_str}
      />
    );
}


