import NavbarCurl from "@/components/NavbarCurl";
import styles from "@/styles/Menu.module.css";

export default function get_use_consents(){
    return(
        <div>
            <NavbarCurl/>
        <div className={styles.center}>
            <pre className={styles.pre}> 
                {`curl --location 'https://iam.trueid-preprod.net/identity/v4/accounts/{id}/consents' \\
--header 'Authorization: ••••••'`}
            </pre>
        </div>
        </div>
    )
}