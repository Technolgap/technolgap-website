import styles from "./RSSFeed.module.scss";
import Title from "../Title/Title";
import TweetCard from "./components/TweetCard/TweetCard";

const RSSFeed = () => {
    return(
  <div className={styles.RSSFeed}> 
    <Title> RSSFeed </Title>
    <TweetCard/>
  </div>
    );
}

export default RSSFeed;


