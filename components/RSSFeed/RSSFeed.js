import styles from "./RSSFeed.module.scss";
import Title from "../Title/Title";
import TweetCard from "./components/TweetCard/TweetCard";
import InstagramCard from "./components/InstagramCard/InstagramCard";

const RSSFeed = (props) => {
    return(
        <div className={styles.RSSFeed}> 
            <Title> RSSFeed </Title>
            <TweetCard {...props} /> 
            <InstagramCard/>
        </div>
    );
}

export default RSSFeed;


