import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium tenetur magni voluptate corrupti quo, deserunt amet, ad nam sapiente, et cumque qui veniam corporis totam nisi id. Soluta, in explicabo!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe asperiores nostrum cum cupiditate adipisci vitae quia. Ipsam quas placeat id nemo nostrum quia quisquam vel mollitia? Commodi reprehenderit quas non.</p>
      <Link href="/ninjas">
        <a>See Ninja Listing</a>
      </Link>
      <Footer />
    </div>
  )
}
