import styles from "@/styles/Menu.module.css";

export default function put_use_consents(){
    return(
        <div className={styles.center}>
            <pre className={styles.pre}> 
                {`curl --location --request PUT 'https://iam.trueid-preprod.net/identity/v4/accounts/{id}/consents/transactions/withdraw' \\
--header 'Content-Type: application/json' \\
--header 'Authorization: ••••••' \\
--data '{
    "PurposeId": "74247904-1adb-43db-a8a7-a93cfef93591",
    "withdrawnBy": "useracct"
}'`}
            </pre>
        </div>
    )
}
