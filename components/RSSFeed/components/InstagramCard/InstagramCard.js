import InstagramEmbed from 'react-instagram-embed';

export default function InstagramCard() {
    return(
        <>
        <InstagramEmbed
        url='https://www.instagram.com/p/CEx0outnlNN/'
        maxWidth={320}
        hideCaption={true}
        containerTagName='div'
        protocol=''
        injectScript
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
        />
         </>
    );
}


