import styles from "@/styles/Menu.module.css";

export default function revoke(){
    return(
        <div className={styles.center}>
            <pre className={styles.pre}> 
                {`curl --location 'https://iam.trueid-preprod.net/auth/v4/oauth2/revoke' \\
--header 'Authorization: Bearer *****' \\
--form 'ip_address="155.5.5.5"' \\
--form 'by="device"' \\
--form 'client_id="212"' \\
--form 'device_model="unknown"' \\
--form 'latlong="unknown"'`}
            </pre>
        </div>
    )
}