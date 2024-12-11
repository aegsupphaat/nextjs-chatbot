import styles from "@/styles/Menu.module.css";

export default function get_account_info(){
    return(
        <div className={styles.center}>
            <pre className={styles.pre}> 
                {`curl --location 'https://identity-internal-api.trueid-preprod.net/identity/v4/accounts/{id}' \\
--header 'Authorization: ••••••' \\
--header 'client_id: 212' \\
--header 'client_secret: xxxxx'`}
            </pre>
        </div>
    )
}