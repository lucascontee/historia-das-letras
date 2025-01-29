import Footer from "@/app/components/Footer";
import MusicPage from "../../../components/MusicPage";
import Nav from "../../../components/Nav";
import ShortSong from "@/app/components/ShortSong";

const Yestarday: React.FC = () => {

  
  return (
    <div>
        <Nav />
        <MusicPage
        title="CÁLICE"
        description={
          <>
            A inspiração para <strong>&quot;Cálice&quot;</strong> surgiu do desejo de <strong>&quot;Chico Buarque e Gilberto Gil&quot;</strong> de expressar, através da música, a censura e a repressão impostas pela <strong>ditadura militar no Brasil</strong>. Durante os anos 1970, Chico Buarque já havia enfrentado diversos problemas com a censura e recorria a metáforas para conseguir lançar suas canções. O título da música, além da referência religiosa ao cálice sagrado, também soava como &quot;cale-se&quot;, remetendo ao silenciamento imposto pelo regime.
            <br />
            <br />
            A ideia da música nasceu em <strong>1973</strong>, quando Chico e Gil se reuniram para compor durante uma viagem a Mangaratiba. Gilberto Gil começou a brincar com a expressão &quot;Pai, afasta de mim este cálice&quot;, frase bíblica dita por Jesus antes da crucificação, e os dois perceberam o impacto que essa metáfora poderia ter. A frase passou a simbolizar o desejo de afastar o sofrimento e a repressão do regime militar, transformando-se no centro da composição.
            <br />
            <br />
            A censura da época rapidamente percebeu as críticas na letra e proibiu sua execução. Em <strong>1978</strong>, durante um show no Rio de Janeiro, Chico tentou cantá-la ao lado de Milton Nascimento, mas os microfones foram cortados para impedir que a canção fosse ouvida pelo público. Como forma de protesto, ambos continuaram cantando, mesmo sem som. A cena tornou-se um símbolo da resistência cultural ao regime.
            <br />
            <br />
            Musicalmente, <strong>&quot;Cálice&quot;</strong> se destaca por sua construção melancólica e seus versos que reforçam o tom de opressão. O arranjo tenso e sombrio amplia o impacto da letra, tornando-se um dos momentos mais marcantes da música popular brasileira. A repetição do refrão &quot;Pai, afasta de mim este cálice&quot; reforça o desejo de escapar da violência e da repressão, ao mesmo tempo em que desafia o autoritarismo com uma mensagem poderosa.
            <br />
            <br />
            Apesar da censura inicial, <strong>&quot;Cálice&quot;</strong> tornou-se um dos maiores símbolos de resistência contra a ditadura militar. Ao longo dos anos, sua força poética e política a manteve viva no imaginário popular, sendo regravada e reinterpretada por diversas gerações. Hoje, a música segue como um lembrete da importância da arte na luta pela liberdade e democracia.
          </>
        }
        artist="Chico Buarque"
        composer="Francisco Buarque De Hollanda / Gilberto Passos Gil Moreira"
        imageUrlComposer="chicobuarque.jpg"
        imgDescription="Chico Buarque"
        />
        <hr className="w-4/5 m-auto mt-10"/>

        <h1 className="text-center text-4xl font-bold text-palet-brown1 mt-20 mb-4">MÚSICAS RELACIONADAS</h1>

        <div className="flex flex-wrap justify-center gap-8 p-6">
          
          <ShortSong
            musicName="Bohemian Rhapsody"
            description="Uma das mais emblemáticas do rock, tem uma narrativa complexa, com várias mudanças de estilo musical, e a história da letra é misteriosa."
            artist="Queen"
            composer="Freddie Mercury"
            pageUrl="queen/bohemianrhapsody"
          />

          <ShortSong
            musicName="Stairway to Heaven"
            description="Escrita por Paul Mccartney, Yestardey é a música com mais covers da história, e seu primeiro nome foi Ovos Mexidos"
            artist="Led Zeppelin"
            composer="Robbert Plant"
            pageUrl="ledzeppelin/stairwaytoheaven"
          />

          
          <ShortSong
            musicName="Hotel California"
            description="Hotel California é uma metáfora para o estilo de vida glamouroso e perigoso de Los Angeles nos anos 70."
            artist="Eagles"
            composer="Glenn Lewis Frey / Don Felder / Donald Hugh Henley"
            pageUrl="eagles/hotelcalifornia"
          />
        </div>
        <Footer />
    </div>

    
  );
};

export default Yestarday;