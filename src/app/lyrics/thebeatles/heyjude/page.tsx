import Footer from "@/app/components/Footer";
import MusicPage from "../../../components/MusicPage";
import Nav from "../../../components/Nav";
import ShortSong from "@/app/components/ShortSong";

const HeyJude: React.FC = () => {

  
  return (
    <div>
        <Nav />
        <MusicPage
        title="HEY JUDE"
        description={
          <>            
              <strong>&quot;Hey Jude&quot;</strong> foi escrita por <strong>Paul McCartney</strong> em <strong>1968</strong> como uma forma de conforto para <strong>Julian Lennon</strong>, filho de <strong>John Lennon</strong>.  
              Na época, John estava se separando de <strong>Cynthia Lennon</strong> para ficar com <strong>Yoko Ono</strong>, e Julian, ainda criança, estava sofrendo com a separação dos pais.  
              Paul, que sempre teve uma boa relação com Julian, quis escrever algo que o ajudasse a enfrentar aquele momento difícil.  
              <br />
              <br />

            
              O título original da música era <strong>&quot;Hey Jules&quot;</strong>, uma referência direta a Julian.  
              No entanto, McCartney achou que <strong>&quot;Jude&quot;</strong> soava melhor e fez a mudança.  
              Mais tarde, Julian revelou que só descobriu que a música era sobre ele muitos anos depois, e ficou emocionado ao saber do gesto de Paul.  
              <br />
              <br />

            
              Apesar de ter sido escrita para Julian, a letra de <strong>&quot;Hey Jude&quot;</strong> traz uma mensagem universal de esperança e superação.  
              Frases como <strong>&quot;Take a sad song and make it better&quot;</strong> mostram que a música pode ser interpretada como um incentivo para qualquer pessoa passando por momentos difíceis.  
              A melodia envolvente e a progressão de acordes simples tornam a canção ainda mais marcante.  
              <br />
              <br />

            
              O processo de gravação foi inovador para a época.  
              A música foi a <strong>primeira gravação</strong> feita pelos Beatles em seu novo selo, a <strong>Apple Records</strong>, e tem mais de 7 minutos de duração, algo incomum para um single.  
              A parte final, com o famoso coro de <strong>&quot;Na-na-na-na&quot;</strong>, foi uma decisão de última hora e acabou se tornando um dos momentos mais icônicos da canção.  
              <br />
              <br />

            
              Lançada em <strong>26 de agosto de 1968</strong>, <strong>&quot;Hey Jude&quot;</strong> foi um sucesso instantâneo e se tornou um dos maiores clássicos dos Beatles.  
              A canção liderou as paradas de sucesso por <strong>nove semanas nos Estados Unidos</strong>, tornando-se um dos singles mais vendidos da banda.  
              Hoje, continua sendo uma das músicas mais queridas e reconhecíveis do rock, emocionando gerações com sua mensagem poderosa e sua melodia inesquecível.  
            
          </>
        }
        artist="The Beatles"
        composer="Lennon/Mccartney"
        imageUrlComposer="beatles.jpg"
        imgDescription="The Beatles"
        />
        <hr className="w-4/5 m-auto mt-10"/>

        <h1 className="text-center text-4xl font-bold text-palet-brown1 mt-20 mb-4">MÚSICAS RELACIONADAS</h1>

        <div className="flex flex-wrap justify-center gap-8 p-6">
          
          <ShortSong
            musicName="Eleanor Rigby"
            description="Reflete as inspirações de Paul McCartney em sua convivência com pessoas solitárias"
            artist="The Beatles"
            composer="Lennon/Mccartney"
            pageUrl="thebeatles/eleanorrigby"
          />

          <ShortSong
            musicName="Stairway to Heaven"
            description="Stairway to Heaven é considerada um hino do rock, marcada pelo icônico solo de guitarra e uma narrativa mística sobre a busca espiritual."
            artist="Led Zeppelin"
            composer="Jimmy Page / Robert Plant"
            pageUrl="ledzeppelin/stairwaytoheaven"
          />


          
          <ShortSong
            musicName="Yesterday"
            description="Escrita por Paul Mccartney, Yestardey é a música com mais covers da história, e seu primeiro nome foi Ovos Mexidos"
            artist="The Beatles"
            composer="Lennon/Mccartney"
            pageUrl="thebeatles/yesterday"
          />
        </div>
        <Footer />
    </div>

    
  );
};

export default HeyJude;