import { TwitterTweetEmbed } from 'react-twitter-embed';
import styles from "./TweetCard.module.scss";

export default function TweetCard({ tweets }) {
    return(
      <div className={styles.TweetCard}>
        <TwitterTweetEmbed tweetId={tweets[1].id_str} />
      </div>
    );
}


