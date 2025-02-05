import Footer from "@/app/components/Footer";
import MusicPage from "../../../components/MusicPage";
import Nav from "../../../components/Nav";
import ShortSong from "@/app/components/ShortSong";

const redemptionsong: React.FC = () => {

  
  return (
    <div>
        <Nav />
        <MusicPage
        title="REDEMPTION SONG"
        description={
        <>
        
        
        <strong>&quot;Redemption Song&quot;</strong> foi escrita por <strong>Bob Marley</strong> e lançada em <strong>1980</strong>, no álbum <strong>Uprising</strong>. Diferente do reggae tradicional que marcou a carreira de Marley, a música é uma canção <strong>acústica e minimalista</strong>, focada na letra e na emoção transmitida. Seu conteúdo reflete sobre <strong>liberdade, resistência e redenção</strong>, abordando a luta contra a opressão e a necessidade de emancipação mental.
        <br />
        <br />

      
        A inspiração para a letra veio de um discurso do ativista <strong>Marcus Garvey</strong>, que dizia: <strong>&quot;Emancipate yourselves from mental slavery, none but ourselves can free our minds&quot;</strong>. Marley usou essa mensagem para criar uma das letras mais profundas e impactantes de sua carreira, incentivando as pessoas a se libertarem não apenas fisicamente, mas também mentalmente.
        <br />
        <br />

      
        No momento em que compôs <strong>&quot;Redemption Song&quot;</strong>, Bob Marley já estava <strong>lutando contra um câncer</strong>, que mais tarde o levaria à morte em 1981. Por isso, muitos interpretam a música como um <strong>testamento espiritual</strong>, onde Marley reflete sobre sua vida, suas crenças e seu legado. A ausência de instrumentos tradicionais do reggae reforça a sensação de despedida e intimidade da canção.
        <br />
        <br />


        A simplicidade da música ajudou a torná-la <strong>atemporal</strong>. <strong>&quot;Redemption Song&quot;</strong> foi regravada por diversos artistas e continua sendo um <strong>hino da liberdade e da resistência</strong>. Sua mensagem poderosa ressoa até hoje, inspirando gerações a refletirem sobre suas próprias correntes e sobre a importância da luta por justiça e igualdade.

        </>
        }
        artist="Bob Marley"
        composer="Bob Marley"
        imageUrlComposer="bobmarley.jpg"
        imgDescription="Bob Marley"
        />
        <hr className="w-4/5 m-auto mt-10"/>

        <h1 className="text-center text-4xl font-bold text-palet-brown1 mt-20 mb-4">MÚSICAS RELACIONADAS</h1>

        <div className="flex flex-wrap justify-center gap-8 p-6">
          
          <ShortSong
            musicName="Hey Jude"
            description="Paul Mccartney escreveu Hey Jude para Julian Lennon, para confortar o filho de John Lennon."
            artist="The Beatles"
            composer="Lennon/Mccartney"
            pageUrl="thebeatles/heyjude"
          />

          <ShortSong
            musicName="Stairway to Heaven"
            description="Stairway to Heaven é considerada um hino do rock, marcada pelo icônico solo de guitarra e uma narrativa mística sobre a busca espiritual."
            artist="Led Zeppelin"
            composer="Jimmy Page / Robert Plant"
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

export default redemptionsong;