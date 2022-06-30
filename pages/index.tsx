import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Profile from './components/Profile'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Profile><h2>みすたーちるどれん</h2></Profile>
    </div>
  )
}

export default Home
