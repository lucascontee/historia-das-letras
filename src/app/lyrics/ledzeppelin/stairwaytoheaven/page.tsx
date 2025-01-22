import MusicPage from "../../../components/MusicPage";
import Nav from "../../../components/Nav";
import ShortSong from "@/app/components/ShortSong";

const HotelCalifornia: React.FC = () => {

  
  return (
    <div>
        <Nav />
        <MusicPage
        title="STAIRWAY TO HEAVEN"
        description={
          <>
            <br />
            &quot;Stairway to Heaven&quot;, uma das músicas mais icônicas do Led Zeppelin, nasceu em uma jornada criativa conjunta de Jimmy Page e Robert Plant. A canção foi concebida no final de 1970, durante uma estadia em Headley Grange, uma mansão do século XIX usada pela banda como retiro criativo.
            <br />
            <br />
            Jimmy Page, guitarrista e principal arquiteto musical da banda, iniciou o processo compondo a base instrumental. Ele queria criar uma peça musical que fosse uma espécie de &quot;crescendo contínuo&quot;, evoluindo gradualmente de um tom calmo e acústico para um clímax elétrico e intenso. Usando sua guitarra Gibson EDS-1275 de dois braços, Page deu vida à melodia central da música, explorando mudanças dinâmicas e atmosferas contrastantes.
            <br />
            <br />
            Enquanto Page desenvolvia a parte instrumental, Robert Plant, vocalista e letrista, começou a escrever as letras quase que espontaneamente. Plant afirmou que algumas das palavras vieram &quot;do nada&quot;, como se fossem ditadas por uma força criativa maior. A narrativa das letras é repleta de metáforas e simbolismos, contando a busca de uma mulher por algo espiritual, em contraste com a materialidade da vida.
            <br />
            <br />
            John Paul Jones contribuiu com arranjos de teclado e flauta doce, que adicionaram uma dimensão etérea à introdução da música. John Bonham, por sua vez, trouxe sua marca registrada ao clímax, com uma performance de bateria poderosa e emocional.
            <br />
            <br />
            A letra enigmática é objeto de debates até hoje, com interpretações que variam de mensagens espirituais a reflexões sobre escolhas de vida. Segundo Plant, porém, o tema principal é a &quot;vida espiritual sobre a material&quot; e a busca de significado.
            <br />
            <br />
            &quot;Stairway to Heaven&quot; também gerou controvérsias, incluindo acusações de plágio em relação à introdução, que alguns dizem se assemelhar à música &quot;Taurus&quot;, da banda Spirit. Apesar disso, a canção continua a ser celebrada como uma das maiores composições da história da música.

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
        artist="The Beatles"
        composer="Lennon/McCartney"
        description="Uma música para lembrar a infância do John"
        musicName="Yesterday"
        pageUrl="yesterday"
      />

      <ShortSong
        musicName="Stairway to Heaven"
        description="Escrita por Paul Mccartney, Yestardey é a música com mais covers da história, e seu primeiro nome foi Ovos Mexidos"
        artist="Led Zeppelin"
        composer="Robbert Plant"
        pageUrl="hotelcalifornia"
      />

      
      <ShortSong 
        musicName="In My Life"
        artist="The Beatles"
        composer="Lennon/McCartney"
        description="Uma música para lembrar a infância do John"
        pageUrl="inmylife"
      />
    </div>
    </div>
    
  );
};

export default HotelCalifornia;