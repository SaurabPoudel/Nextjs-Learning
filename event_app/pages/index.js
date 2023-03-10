import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Event App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav>
          <Link href="/" passHref>
            Home
          </Link>
          <Link href="/events" passHref>
            Events
          </Link>
          <Link href="/about-us" passHref>
            About Us
          </Link>
        </nav>
      </header>
      <main className={styles.main}>
        {data.map((ev) => (
          <Link key={ev.id} href={`/events/${ev.id}`} passHref>
            <Image width={300} height={300} alt={ev.title} src={ev.image} />{" "}
            <h2> {ev.title}</h2>
            <p>{ev.description}</p>
          </Link>
        ))}
      </main>
      <footer className={styles.footer}>
        <p>© 2023 Saurab Poudel </p>
      </footer>
    </>
  );
}
export async function getServerSideProps() {
  const { events_categories } = await import("/data/data.json");
  return {
    props: {
      data: events_categories,
    },
  };
}
