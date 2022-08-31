import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
        <link rel="shortcut icon" href="logo.png" type="image/x-icon" />
      </Head>
      <div>
        <h1 className={styles.title} >Welcome</h1>

        <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo consequuntur quos quo error! Reprehenderit corporis autem voluptatem impedit voluptatum dolorum numquam eos omnis cumque aspernatur quidem distinctio adipisci sint reiciendis tenetur sunt, possimus corrupti. Ut fugiat labore unde sit distinctio, eos corporis adipisci voluptatibus voluptas assumenda. Consectetur exercitationem animi sed, doloribus eaque asperiores iure, ad aliquid facilis magni quasi consequuntur reiciendis tenetur similique eius reprehenderit ex repudiandae neque, minima aut nisi. Libero, exercitationem perferendis, explicabo debitis soluta quia eos consectetur atque vero qui sit nisi ab animi maiores error similique deleniti consequatur ratione iusto blanditiis! Id vel asperiores porro temporibus.</p>

        <Link href="/ninjas"><a className={styles.btn} >See Ninja Listing</a></Link>
      </div>
    </>
  )
}
