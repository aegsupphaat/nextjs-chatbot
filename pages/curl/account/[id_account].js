import React from 'react';
import { useRouter } from 'next/router';
import styles from "@/styles/Menu.module.css";

export default function CurlAccounts() {
  const router = useRouter()
  const {id_account} = router.query

  console.log("id_account xxxx"+id_account)

  if (id_account === '1')
  return (
        <div className={styles.codeBlock}>
            <p className={styles.curl}>curl --location 'https://iam.trueid-preprod.net/identity/v4/accounts/1' 
                --header 'Authorization: ••••••'</p>
        
        </div>
  )
  else if (id_account === '2')
    return (
        <div className={styles.codeBlock}>
            <p className={styles.curl}>curl --location 'https://iam.trueid-preprod.net/identity/v4/accounts/2' --header 'Authorization: ••••••'</p>
        
        </div>
  )
  else
    return <p>Not found</p>
}