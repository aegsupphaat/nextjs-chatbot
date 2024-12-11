import styles from "@/styles/Menu.module.css";

export default function get_account_info(){
    return(
        <div className={styles.center}>
            <pre className={styles.pre}> 
                {`curl --location 'https://iam.trueid-preprod.net/identity/v4/accounts/{id}' \\
--header 'Authorization: ••••••' \\`}
            </pre>
        </div>
    )
}