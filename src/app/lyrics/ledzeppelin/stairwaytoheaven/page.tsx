import Footer from "@/app/components/Footer";
import MusicPage from "../../../components/MusicPage";
import Nav from "../../../components/Nav";
import ShortSong from "@/app/components/ShortSong";

const Stairwaytoheaven: React.FC = () => {

  
  return (
    <div>
        <Nav />
        <MusicPage
        title="STAIRWAY TO HEAVEN"
        description={
          <>
            <br />
            <strong>&quot;Stairway to Heaven&quot;</strong>, uma das músicas mais icônicas do <strong>Led Zeppelin</strong>, nasceu em uma jornada criativa conjunta de <strong>Jimmy Page e Robert Plant</strong>. A canção foi concebida no final de 1970, durante uma estadia em Headley Grange, uma mansão do século XIX usada pela banda como <strong>retiro criativo</strong>.
            <br />
            <br />
            <strong>Jimmy Page</strong>, guitarrista e principal arquiteto musical da banda, iniciou o processo compondo a base instrumental. Ele queria criar uma peça musical que fosse uma espécie de <strong>&quot;crescendo contínuo&quot;</strong>, evoluindo gradualmente de um tom calmo e acústico para um clímax elétrico e intenso. Usando sua guitarra <strong>Gibson EDS-1275 de dois braços</strong>, Page deu vida à melodia central da música, explorando mudanças dinâmicas e atmosferas contrastantes.
            <br />
            <br />
            Enquanto Page desenvolvia a parte instrumental, <strong>Robert Plant</strong>, vocalista e letrista, começou a escrever as letras quase que espontaneamente. Plant afirmou que algumas das palavras vieram &quot;do nada&quot;, como se fossem <strong>ditadas por uma força criativa maior</strong>. A narrativa das letras é repleta de metáforas e simbolismos, contando a busca de uma mulher por algo espiritual, em contraste com a materialidade da vida.
            <br />
            <br />
            <strong>John Paul Jones</strong> contribuiu com arranjos de teclado e flauta doce, que adicionaram uma dimensão etérea à introdução da música. <strong>John Bonham</strong>, por sua vez, trouxe sua marca registrada ao clímax, com uma performance de bateria poderosa e emocional.
            <br />
            <br />
            A letra enigmática é objeto de debates até hoje, com interpretações que variam de <strong>mensagens espirituais a reflexões sobre escolhas de vida</strong>. Segundo Plant, porém, o tema principal é a &quot;vida espiritual sobre a material&quot; e a busca de significado.
            <br />
            <br />
            <strong>&quot;Stairway to Heaven&quot;</strong> também gerou controvérsias, incluindo acusações de plágio em relação à introdução, que alguns dizem se assemelhar à música &quot;Taurus&quot;, da banda Spirit. Apesar disso, a canção continua a ser celebrada como uma das <strong>maiores composições da história da música</strong>.

          </>
        }
        artist="Led Zeppelin"
        composer="Jimmy Page / Robert Plant"
        imageUrlComposer="ledzeppelin.png"
        imgDescription="Led Zeppelin"
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
        musicName="Bohemian Rhapsody"
        description="Uma das mais emblemáticas do rock, tem uma narrativa complexa, com várias mudanças de estilo musical, e a história da letra é misteriosa."
        artist="Queen"
        composer="Freddie Mercury"
        pageUrl="queen/bohemianrhapsody"
      />

      
      <ShortSong
        musicName="Hotel California"
        description="Hotel California é uma metáfora para o estilo de vida glamouroso e perigoso de Los Angeles nos anos 70."
        artist="Eagles"
        composer="Glenn Lewis Frey / Don Felder / Donald Hugh Henley"
        pageUrl="eagles/hotelcalifornia"
        />
    </div>
    <Footer/>
    </div>
    
  );
};

export default Stairwaytoheaven;