import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Accordion from "@/components/Accordion";

export default function Home() {
  return (
    <>
      <Head>
        <title>Docs Portal</title>
        <meta name="keywords" content="docs"></meta>
      </Head>

      <Navbar/>
      <Accordion/>
    </>
  );
}
