import NavbarCurl from "@/components/NavbarCurl";
import styles from "@/styles/Menu.module.css";

export default function refresh_token(){
    return(
        <div>
            <NavbarCurl/>
            <div className={styles.center}>
                <pre className={styles.pre}> 
                    {`curl --location 'https://iam.trueid-preprod.net/auth/v4/oauth2/token' \\
    --form 'client_id="212"' \\
    --form 'client_secret="xxxxx"' \\
    --form 'grant_type="refresh_token"' \\
    --form 'refresh_token="xxxxx"' \\
    --form 'device_id="4585-44EA-B694"' \\
    --form 'device_model="iPhone15,3"' \\
    --form 'latlong="16.56523,100.13137"' \\
    --form 'ip_address="155.5.5.5"'`}
                </pre>
            </div>
        </div>

    )
}