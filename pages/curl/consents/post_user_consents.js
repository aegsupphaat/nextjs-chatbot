import styles from "@/styles/Menu.module.css";

export default function post_use_consents(){
    return(
        <div className={styles.center}>
            <pre className={styles.pre}> 
                {`curl --location 'https://iam.trueid-preprod.net/identity/v4/accounts/{id}/consents/transactions/allow' \\
--header 'Content-Type: application/json' \\
--header 'Authorization: ••••••' \\
--data '{
  "purposes": [
	   {
	         "Id": "56322f89-66d7-45a2-a98e-a295d650d383"
	   }
   ]
}'`}
            </pre>
        </div>
    )
}