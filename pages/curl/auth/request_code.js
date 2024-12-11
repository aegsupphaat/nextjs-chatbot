import styles from "@/styles/Menu.module.css";

export default function request_code(){
    return(
        <div className={styles.center}>
            <pre className={styles.pre}> 
                {`curl --location 'https://iam.trueid-preprod.net/auth/v4/oauth2/request_code' \\
--form 'client_id="212"' \\
--form 'redirect_uri="http://localhost:3000"' \\
--form 'scope="public_profile"' \\
--form 'account="081xxxxxxx"' \\
--form 'ip_address="155.5.5.5"' \\
--form 'response_type="code"' \\
--form 'state="99999"' \\
--form 'device_model="iPhone"' \\
--form 'latlong="unknown"' \\
--form 'user_id="xxxxx"' \\
--form 'device_id="4585-44EA-B694"'`}
            </pre>
        </div>
    )
}