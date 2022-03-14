/* eslint-disable no-lone-blocks */
import Image from 'next/image';
import Layout from '../components/layout';
import styles from '../styles/Home.module.css';

function Home() {
  return (
    <Layout pageTitle="Homepage">
      <Image src="/hairpin.png" width={200} height={200} alt="profile" />
      <img src="/hairpin.png" style={{ width: 200, height: 200 }} alt="" />
      <h1 className={styles['title-homepage']}>Welcome Yoo guys</h1>
    </Layout>
  );
}

export default Home;

{ /* jika gunakan IMAGE dari next , maka akan di compile ke webp sehingga ukuran lebih kecil */ }
// eslint-disable-next-line no-lone-blocks
{ /* sehingga proses untuk menampilkan gambar lebih cepat dan tidak berat */ }
