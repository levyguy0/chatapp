import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="bg-black w-full h-screen flex flex-col">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <div className="p-10 mt-auto w-full bg-amber-300"> 
          <input className='mt-auto'/>
        </div>
      </main>
    </div>
  )
}
