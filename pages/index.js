import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <div>
      <ul>
        <li><Image
          src="/images/pic01.jpg"
          width="300"
          height="300"
          alt="Seja Grato Hoje"
        />
          <Link href="#"><a>Saiba Mais</a></Link>
        </li>
        <li><Image
          src="/images/pic02.jpg"
          width="300"
          height="300"
          alt="Visite Cidades"
        />
          <Link href="#"><a>Saiba Mais</a></Link>
        </li>
        <li><Image
          src="/images/pic03.jpg"
          width="300"
          height="300"
          alt="Busque Vida"
        />
          <Link href="#"><a>Saiba Mais</a></Link>
        </li>
      </ul>
      <h2>Discover the cities</h2>
      <p>Tenha o mundo em suas mãos, fotografe, crie vídeos, mostre ao mundo as
          maravilhas que você vê ao seu redor. Conheça outras cidades navegando
          com seu celular, em cada cidade você pode ver as maravilhas que
          existem, divulgue o que você faz, o que você gosta e garantir que
          outros possam vê-lo.</p>
      <h2>Seja Grato Hoje</h2>
      <p>BeGraTo e veja fotos reais nos locais. Descubra o que cada cidade pode
          oferecer. Lugares, eventos, música e cultura local. Espalhe sua
          cultura, suas ideias e sua visão. Seja grato hoje e faça os outros
          gratos por suas ideias</p>
      <h2>Onde há vida?</h2>
      <p>Encontre o que há para fazer, onde há diversão, emoção, boas
          vibrações. Mostre para que todos possam ver e se sentir gratos onde
          quer que parem. Espalhe sua criatividade, seus produtos, suas vendas.
          Faça as coisas acontecerem. Seja grato hoje. BEGRATO!</p>
      </div>
      <Footer />
    </div>
  )
}
