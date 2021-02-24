import Head from 'next/head'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Front end developer. Crossword puzzle fanatic." />
        <meta name="keywords" content="William Downey-Schell, front end developer, portfolio" />
        
        <title>WDS Portfolio</title>
      </Head>

      <main>
      <h1>hi there, im Will</h1>
      <h3>a Front End developer</h3>
      </main>
    </div>
  )
}
