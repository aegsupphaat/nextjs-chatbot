import styles from "@/styles/Menu.module.css";

export default function get_collectionpoints(){
    return(
        <div className={styles.center}>
            <pre className={styles.pre}> 
                {`curl --location 'https://iam.trueid-preprod.net/identity/v4/consents/collectionpoints' \\
--header 'Authorization: ••••••'`}
            </pre>
        </div>
    )
}