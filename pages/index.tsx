import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from "../components/Header"
import { FC } from 'react';

type HomeProps = {
}

const Home:FC<HomeProps> = () => {
  return (
    <div>
      <Header title={"Rahul's Blog"}/>
    </div>
  );
  // return (
  //   <div className={styles.container}>
  //     <Head>
  //       <title>Create Next App</title>
  //       <link rel="icon" href="/favicon.ico" />
  //     </Head>

  //     <main className={styles.main}>
  //       <h1 className={styles.title}>
  //         Welcome to <a href="https://nextjs.org">Next.js!</a>
  //       </h1>

  //       <p className={styles.description}>
  //         Get started by editing{' '}
  //         <code className={styles.code}>pages/index.js</code>
  //       </p>

  //       <div className={styles.grid}>
  //         <a href="https://nextjs.org/docs" className={styles.card}>
  //           <h3>Contact&rarr;</h3>
  //           <p>Contact here</p>
  //         </a>

  //         <a href="https://nextjs.org/learn" className={styles.card}>
  //           <h3>About &rarr;</h3>
  //           <p>Abou here</p>
  //         </a>

  //         <a
  //           href="https://github.com/vercel/next.js/tree/master/examples"
  //           className={styles.card}
  //         >
  //           <h3>Projects &rarr;</h3>
  //           <p>Projects here</p>
  //         </a>

  //         <a
  //           href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
  //           className={styles.card}
  //         >
  //           <h3>Blog &rarr;</h3>
  //           <p>
  //             Blog here
  //           </p>
  //         </a>
  //       </div>
  //     </main>

  //     <footer className={styles.footer}>
  //       <a
  //         href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         By Rahul Nakre
  //       </a>
  //     </footer>
  //   </div>
  // )
}

export default Home;