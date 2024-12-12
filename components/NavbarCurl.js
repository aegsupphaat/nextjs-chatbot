import Link from "next/link";
import styles from "@/styles/Menu.module.css"

export default function NavbarCurl(){
    return(
        <nav>
            <div className={styles.navcurltextcontainer}>
                <h1 className={styles.navcurltext}>cURL for Identity API</h1>
            </div>
            
        </nav>
    )
}