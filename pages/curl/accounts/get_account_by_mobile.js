import NavbarCurl from "@/components/NavbarCurl";
import styles from "@/styles/Menu.module.css";

export default function get_account_by_mobile(){
    return(
        <div>
            <NavbarCurl/>
            <div className={styles.center}>
                <pre className={styles.pre}> 
                    {`curl --location 'https://identity-internal-api.trueid-preprod.net/identity/v4/accounts?last_access_flag=all' \\
    --header 'Authorization: ••••••' \\
    --header 'X-Client-Identifier: 212' \\
    --header 'X-Client-Secret: xxxxx' \\
    --header 'X-Account-Identifier: 081xxxxxxx'`}
                </pre>
            </div>
        </div>
    )
}