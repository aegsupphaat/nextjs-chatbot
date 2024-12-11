import Link from "next/link";
import styles from "@/styles/Menu.module.css"
import DialogflowMessenger from "@/components/DialogflowMessenger";

export default function Navbar(){
    return(
        <nav>
            <div className={styles.navtextcontainer}>
                <h1 className={styles.navtext}>Docs Portal</h1>
            </div>
            
            <Link href="./">Home</Link>
            <Link href="./">Docs</Link>
            <Link href="./">About</Link>

            <DialogflowMessenger/>
        </nav>
    )
}