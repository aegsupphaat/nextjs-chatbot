import styles from "@/styles/Menu.module.css";

export default function authorization_code(){
    return(
        <div className={styles.center}>
            <pre className={styles.pre}> 
                {`curl --location 'https://iam.trueid-preprod.net/auth/v4/oauth2/token' \\
--form 'client_id="212"' \\
--form 'client_secret="xxxxx"' \\
--form 'code="9d719537c58d3d73966fe83a71541dd22c2bf158"' \\
--form 'grant_type="authorization_code"' \\
--form 'device_id="4585-44EA-B694"' \\
--form 'device_model="iPhone"' \\
--form 'latlong="16.56523,100.13137"' \\
--form 'ip_address="155.5.5.5"'`}
            </pre>
        </div>
    )
}