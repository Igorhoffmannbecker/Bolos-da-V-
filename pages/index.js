import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {motion} from "framer-motion"

export default function Home() {
   
  return (
  <>
   <section id="top" className="top">
   <motion.div initial={{ opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5}}>
     <div className="nav container">
       <div className="nav-logo"><b>Bolos da Vó</b></div>
       <div className="nav-links">
        <div className="nav-link"><Link href="/">Home</Link></div>
        <div className="nav-link"><Link href="/#novidade">Novidade</Link></div>
        <div className="nav-link"><Link href="/#vantagens">Vantagens</Link></div>
        <div className="nav-link"><Link href="/#promocao">Promoção</Link></div>
       </div>
     </div>
     </motion.div>
     <div className="content container">
       <div className="texts">
        <motion.div initial={{ opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5}}>
         <h1 className="title">Venha comer bolos feitos com aquele amor de vó!</h1>
         <p className="text">Aqui você encontra os melhores bolos caseiros do mercado! Temos grande diversidade de sabores!</p>
         <div className="button"><button><Link href="/#vantagens">Vantagens</Link></button></div>
        </motion.div>   
       </div>
       <div className="image">
       <motion.div animate={{rotate: 100}} transition={{duration: 1}}>
         <img className="bolo" width="600" height="600" src="/bolo.png" />
       </motion.div>
       </div>
     </div>
   </section>
   <section id="novidade" className="container">
      <motion.div initial={{ opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5}} >
        
          <h1 className="h1-novidade">Novidade!</h1>
          <p className="text-novidade">Confira o novo lançamento da Bolos da Vó</p>
        
        <div className="produto">
          <div className="image"><img src="/bolo-cenoura.jpg" width="450" height="450"/></div>
          <div className="text">
            <h1><b>Bolo de cenoura com avela e castanha!</b></h1>
            <div>
              <Image src="/estrela.png" width="20px" height="20px"/>
              <Image src="/estrela.png" width="20px" height="20px"/>
              <Image src="/estrela.png" width="20px" height="20px"/>
              <Image src="/estrela.png" width="20px" height="20px"/>
              <Image src="/estrela.png" width="20px" height="20px"/>
            </div>
            <p>
              Esse novo sabor de bolo tem cobertura de avela com caramelo, massa de sabor cenoura, recheio de avela com canela. 
              A nova maravilha da Bolos da Vó!
              <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit lacus sollicitudin sem facilisis elementum. Nulla in magna risus. Curabitur tristique, augue sit amet viverra varius, dui dolor facilisis ligula, vitae faucibus urna ante in urna. Fusce eget metus neque. Aenean eleifend vulputate lacinia. Quisque pellentesque quis sem nec auctor. Pellentesque lacinia libero dolor, vitae facilisis orci interdum et. Cras elementum malesuada consequat. Phasellus condimentum pretium mauris at pulvinar.
            </p>
          </div> 
        </div>
      </motion.div>  
   </section>
   <section id="vantagens">
      <motion.div initial={{ opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5}}>
        <div className="novidade container">
          <h1>Vantagens</h1>
          <p>Veja as principais vantagens de comprar conosco</p>
        </div>
        <div className="vantagens container">
          <div className="vantagem-item">
            <div className="box-image">
              <Image src="/receitas.png" width="100" height="100" />
            </div>
            <h2>Receitas exclusivas!</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra, neque at porta congue, nunc ex fermentum augue.</p>
          </div>
          <div className="vantagem-item">
          <div className="box-image">
              <Image src="/vo.png" width="100" height="100" />
            </div>
            <h2>Feito com amor de Vó!</h2>
            <p>Nulla porta blandit ex, volutpat pharetra neque tempus vitae. Nam egestas eu purus eu rutrum. Cras et vulputate justo.</p>
          </div>
          <div className="vantagem-item">
          <div className="box-image">
              <Image src="/delivery.png" width="100" height="100" />
            </div>
            <h2>Delivery rapido!</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra, mauris in turpis. Donec eu odio lacinia, efficitur nibh eget, tincidunt est.</p>
          </div>
        </div>
      </motion.div>
   </section>
   <section id="promocao">
     <motion.div initial={{ opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5}}>
       <div className="promocao container">
         <div className="text">
           <div>
            <h1><b>Promoção do dia!</b> <br/><span className="desconto">Bolo de Chocolate 20% OFF</span></h1>
           </div>
            <p>Pellentesque quis augue tempus, dictum odio vehicula, vehicula metus. Nam sit amet feugiat nisl. Proin efficitur lectus nulla, ut ultricies urna condimentum vel. Nulla facilisi. In porttitor eros non dolor aliquam eleifend</p>
         </div>
         <div className="image">
           <Image src="/bolo-chocolate.png"  width="450" height="300" />
         </div>
       </div>
     </motion.div>
   </section>
   <footer>
    <div className="footer container">
      <b>Bolos da Vó</b>
      <div className="links">
        <h3>Links</h3>
        <div className="footer-link"><Link href="/">Home</Link></div>
        <div className="footer-link"><Link href="/#novidade">Novidade</Link></div>
        <div className="footer-link"><Link href="/#vantagens">Vantagens</Link></div>
        <div className="footer-link"><Link href="/#promocao">Promoção</Link></div>
      </div>
    </div>
    <div className="jaba">
      <h4>Desenvolvido com &hearts; por Igor Hoffmann Becker</h4>
    </div>
   </footer>
  </>
  )
}
