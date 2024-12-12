import styles from "@/styles/Menu.module.css";
import NavbarCurl from "@/components/NavbarCurl";

export default function get_account_info(){
    return(
        <div>
            <NavbarCurl/>
            <div className={styles.center}>
                <pre className={styles.pre}> 
                    {`curl --location 'https://iam.trueid-preprod.net/identity/v4/accounts/{id}' \\
    --header 'Authorization: ••••••' \\`}
                </pre>
            </div>
        </div>
    )
}