import styles from "./InstagramCard.module.scss";
import InstagramEmbed from 'react-instagram-embed';

export default function InstagramCard() {
    return(
        <div className ={styles.InstagramCard}>
            <InstagramEmbed
            url='https://www.instagram.com/p/CEx0outnlNN/'
            maxWidth={340}
            hideCaption={true}
            containerTagName='div'
            protocol=''
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
            />
        </div>
    );
}


