import styles from "@/styles/Menu.module.css";

export default function get_use_consents_internal(){
    return(
        <div className={styles.center}>
            <pre className={styles.pre}> 
                {`curl --location 'https://identity-internal-api.trueid-preprod.net/identity/v4/accounts/{id}/consents?client_id=xxx' \\
--header 'Authorization: ••••••'`}
            </pre>
        </div>
    )
}