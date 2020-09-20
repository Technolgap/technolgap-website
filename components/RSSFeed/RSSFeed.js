import styles from "./RSSFeed.module.scss";
import Title from "../Title/Title";
import TweetCard from "./components/TweetCard/TweetCard";
import InstagramCard from "./components/InstagramCard/InstagramCard";

const RSSFeed = (props) => {
    return(
        <>
            <Title> RSSFeed </Title>
            <div className={styles.RSSFeed}> 
                <TweetCard {...props} /> 
                <InstagramCard/>
            </div>
        </>
    );
}

export default RSSFeed;


