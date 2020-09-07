import styles from "./RSSFeed.module.scss";
import Title from "../Title/Title";
import TweetCard from "./components/TweetCard/TweetCard";
import Head from "next/head";

const RSSFeed = () => {
    return(
  <div className={styles.RSSFeed}> 
    <Title> RSSFeed </Title>
    <p>hello</p>
    <TweetCard/>
  </div>
    );
}

export default RSSFeed;


