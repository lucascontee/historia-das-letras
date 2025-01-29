import Footer from "@/app/components/Footer";
import MusicPage from "../../../components/MusicPage";
import Nav from "../../../components/Nav";
import ShortSong from "@/app/components/ShortSong";

const eleanorrigby: React.FC = () => {

  
  return (
    <div>
        <Nav />
        <MusicPage
        title="ELEANOR RIGBY"
        description={
          <>
            A inspiração para <strong>&quot;Eleanor Rigby&quot;</strong> veio das experiências de Paul McCartney com pessoas mais velhas, especialmente as mulheres que ele ajudava durante sua juventude. Paul cresceu em uma família que o ensinou a ser galante, e ele frequentemente carregava compras para senhoras, o que resultava em momentos de conversa e trocas gentis. Essas interações formaram a base para o personagem de <strong>Eleanor</strong>, que representava simbolicamente muitas <strong>pessoas solitárias e esquecidas da sociedade.</strong>
            <br />
            <br />
            O nome <strong>&quot;Eleanor&quot;</strong> foi inspirado pela atriz Eleanor Bron, que atuou no filme <strong>&quot;Help!&quot;</strong> dos Beatles. Já o sobrenome <strong>&quot;Rigby&quot;</strong> veio de uma placa em uma loja em Bristol, que Paul viu enquanto esperava sua namorada Jane Asher. Curiosamente, descobriu-se depois que havia um túmulo com o nome <strong>&quot;Eleanor Rigby&quot;</strong> em um cemitério que ele e John Lennon visitavam, sugerindo uma possível <strong>influência subconsciente na escolha do nome.</strong>
            <br />
            <br />
            Inicialmente, a canção mencionava &quot;Father McCartney&quot; como o padre, mas Paul mudou o nome para <strong>&quot;Father McKenzie&quot;</strong> para evitar qualquer associação pessoal com seu pai. Ele e John Lennon literalmente folhearam uma <strong>lista telefônica para encontrar o novo sobrenome</strong>. O resultado final deu ao personagem um tom melancólico, complementando o tema de solidão que permeia a música.
            <br />
            <br />
            A estrutura da música também tem sua própria história. McCartney colaborou com o produtor <strong>George Martin</strong> para criar um arranjo usando cordas, inspirado na música de <strong>Psycho</strong>, de Bernard Herrmann, para transmitir um tom sombrio e dramático. O resultado foi um impacto emocional único, que diferenciou <strong>&quot;Eleanor Rigby&quot;</strong> de qualquer coisa que os Beatles haviam feito antes.
            <br />
            <br />
            A canção se tornou um marco na composição musical, fundindo uma narrativa quase cinematográfica com uma melodia impactante. Paul McCartney viu na música um reflexo das pessoas invisíveis que vivem à margem, criando um clássico atemporal sobre a <strong>solidão e a condição humana.</strong>








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

export default eleanorrigby;