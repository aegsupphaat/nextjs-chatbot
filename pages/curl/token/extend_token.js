import NavbarCurl from "@/components/NavbarCurl";
import styles from "@/styles/Menu.module.css";

export default function revoke(){
    return(
        <div>
            <NavbarCurl/>
        <div className={styles.center}>
            <pre className={styles.pre}> 
                {`curl --location 'https://identity-internal-api.trueid-preprod.net/identity/v4/oauth2/extend' \\
--header 'Authorization: ••••••' \\
--header 'client_id: 212' \\
--header 'client_secret: xxxxx' \\
--form 'access_token="xxxxx"'`}
            </pre>
        </div>
        </div>
    )
}