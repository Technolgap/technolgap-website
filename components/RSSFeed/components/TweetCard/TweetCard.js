import { TwitterTweetEmbed } from 'react-twitter-embed';
import styles from "./TweetCard.module.scss";

export default function TweetCard({ tweets }) {
    return(
      <TwitterTweetEmbed tweetId={tweets[0].id_str}/>
    );
}


