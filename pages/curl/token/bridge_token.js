import NavbarCurl from "@/components/NavbarCurl";
import styles from "@/styles/Menu.module.css";

export default function revoke(){
    return(
        <div>
            <NavbarCurl/>
        <div className={styles.center}>
            <pre className={styles.pre}> 
                {`curl --location 'https://iam.trueid-preprod.net/identity/v4/oauth2/token' \\
--header 'client_id: 212' \\
--header 'client_secret: xxxxx' \\
--header 'Content-Type: application/json' \\
--header 'Authorization: ••••••' \\
--data '{
    "grant_type":"token-exchange",
    "requested_token_type":"urn:ietf:params:oauth:token-type:jwt",
    "subject_token":"xxxxx",
"audience":615,
"request_uri":["wemall.com"]
}'`}
            </pre>
        </div>
        </div>
    )
}