import Footer from "@/app/components/Footer";
import MusicPage from "../../../components/MusicPage";
import Nav from "../../../components/Nav";
import ShortSong from "@/app/components/ShortSong";

const Anotherbrickinthewall: React.FC = () => {

  
  return (
    <div>
        <Nav />
        <MusicPage
        title="ANOTHER BRICK IN THE WALL"
        description={
          <>
            A letra de <strong>&quot;Another Brick in the Wall, Part 2&quot;</strong> nasceu da insatisfação de <strong>&quot;Roger Waters&quot;</strong>, baixista e líder do <strong>&quot;Pink Floyd&quot;</strong>, com o sistema educacional rígido e opressor que ele enfrentou em sua infância na Inglaterra. Waters, assim como outras crianças de sua geração, frequentou escolas autoritárias onde os alunos eram desencorajados a pensar de forma independente. <strong>Sua experiência pessoal com professores abusivos inspirou a crítica feroz contida na música​.</strong>
            <br />
            <br />
            O significado da música vai além da educação. No contexto do álbum <strong>&quot;The Wall&quot; (1979)</strong>, a letra representa a construção metafórica de um &quot;muro&quot; psicológico ao redor do protagonista, Pink, que se isola emocionalmente como defesa contra o mundo exterior. Cada trauma ou experiência negativa — incluindo o sistema escolar opressor — se torna <strong>&quot;mais um tijolo no muro&quot;</strong>, reforçando sua alienação e solidão​.
            <br />
            <br />
            Musicalmente, <strong>&quot;Another Brick in the Wall, Part 2&quot;</strong> é única dentro do repertório do Pink Floyd por trazer um forte <strong>groove de disco music</strong>, algo incomum para a banda. O guitarrista <strong>&quot;David Gilmour&quot;</strong> sugeriu essa abordagem para dar mais impacto e apelo comercial à música. O produtor Bob Ezrin foi quem teve a ideia mais ousada: incluir um coral de crianças cantando o refrão <strong>&quot;We dont need no education&quot;</strong>, algo inspirado em gravações da Motown​.
            <br />
            <br />
            Para isso, um <strong>grupo de alunos de uma escola britânica foi gravado em estúdio sem que soubessem do impacto que a música teria</strong>. Os vocais infantis reforçaram a crítica à repressão escolar, tornando a canção um hino contra a rigidez da educação. Posteriormente, a escola <strong>tentou exigir pagamento pelos direitos das vozes das crianças</strong>, mas sem sucesso​.
            <br />
            <br />
            Lançada em <strong>1979</strong>, a música tornou-se um dos maiores sucessos da banda e, ironicamente, foi banida na África do Sul nos anos 80, quando estudantes passaram a usá-la como protesto contra o regime do apartheid. Hoje, <strong>&quot;Another Brick in the Wall, Part 2&quot;</strong> segue como um dos hinos mais icônicos do rock, lembrando o impacto da educação repressiva na formação da identidade das pessoas​.
          </>
        }
        artist="Pink Floyd"
        composer="Roger Waters"
        imageUrlComposer="pinkfloyd.jpg"
        imgDescription="Pink Floyd"
        />
        <hr className="w-4/5 m-auto mt-10"/>

        <h1 className="text-center text-4xl font-bold text-palet-brown1 mt-20 mb-4">MÚSICAS RELACIONADAS</h1>

        <div className="flex flex-wrap justify-center gap-8 p-6">
          
        <ShortSong
          musicName="Yesterday"
          description="Escrita por Paul Mccartney, Yestardey é a música com mais covers da história, e seu primeiro nome foi Ovos Mexidos"
          artist="The Beatles"
          composer="Lennon/Mccartney"
          pageUrl="thebeatles/yesterday"
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

export default Anotherbrickinthewall;