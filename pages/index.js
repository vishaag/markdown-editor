import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [text, setText] = useState(
    '# 🐶'
  );

  function handleOnChange(e) {
    setText(e.target.value);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Markdown Editor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1>Markdown Editor</h1>
      </header>

      <main className={styles.app}>
        <textarea onChange={e => handleOnChange(e)} value={text}/>
        <ReactMarkdown source={text} className={styles.preview} />
      </main>
    </div>
  )
}
