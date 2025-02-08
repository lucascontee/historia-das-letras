import Footer from "@/app/components/Footer";
import MusicPage from "../../../components/MusicPage";
import Nav from "../../../components/Nav";
import ShortSong from "@/app/components/ShortSong";

const GarotaDeIpanema: React.FC = () => {

  
  return (
    <div>
        <Nav />
        <MusicPage
        title="GAROTA DE IPANEMA"
        description={
        <>
          
            <strong>&quot;Garota de Ipanema&quot;</strong> é uma das músicas brasileiras mais conhecidas no mundo. Foi composta em <strong>1962</strong> por <strong>Tom Jobim</strong> (melodia) e <strong>Vinícius de Moraes</strong> (letra), sendo um dos maiores marcos da <strong>Bossa Nova</strong>.
            <br />
            <br />

          
            A inspiração para a música veio de <strong>Helô Pinheiro</strong>, uma jovem que passava diariamente pela rua Montenegro, em Ipanema, a caminho da praia. Tom e Vinícius costumavam observá-la do bar <strong>Veloso</strong> e ficaram encantados com sua beleza e elegância.
            <br />
            <br />

          
            A canção descreve a imagem da jovem caminhando despreocupadamente, despertando admiração por sua naturalidade. O trecho <strong>&quot;Olha que coisa mais linda, mais cheia de graça&quot;</strong> captura perfeitamente esse sentimento de encanto e inspiração.
            <br />
            <br />

          
            A primeira gravação foi feita por <strong>Pery Ribeiro</strong> em <strong>1962</strong>, mas a versão mais famosa veio no ano seguinte, em <strong>1963</strong>, com a interpretação de <strong>João Gilberto</strong>, Tom Jobim e <strong>Stan Getz</strong>. A versão em inglês, <strong>&quot;The Girl from Ipanema&quot;</strong>, gravada por <strong>Astrud Gilberto</strong>, ajudou a popularizar a música internacionalmente.
            <br />
            <br />

          
            <strong>&quot;Garota de Ipanema&quot;</strong> tornou-se um símbolo da cultura brasileira, sendo regravada por diversos artistas ao longo das décadas. Sua melodia sofisticada e sua poesia simples, porém cativante, fizeram dela um clássico atemporal da música mundial.
          
        </>
        }
        artist="Tom Jobim e Vinicius de Moraes"
        composer="Tom Jobim e Vinicius de Moraes"
        imageUrlComposer="tomjobim.jpg"
        imgDescription="Tom Jobim"
        />
        <hr className="w-4/5 m-auto mt-10"/>

        <h1 className="text-center text-4xl font-bold text-palet-brown1 mt-20 mb-4">MÚSICAS RELACIONADAS</h1>

        <div className="flex flex-wrap justify-center gap-8 p-6">
          
          <ShortSong
              musicName="Cálice"
              description="Reflete a resistência de Chico Buarque e Gilberto Gil contra a censura da ditadura militar "
              artist="Chico Buarque"
              composer="Chico Buarque / Gilberto Gil "
              pageUrl="chicobuarque/calice"
          />

          <ShortSong
            musicName="O Mundo É Um Moinho"
            description="Cartola escreveu uma música para sua enteada, relatando os quão perigoso pode ser o mundo."
            artist="Cartola"
            composer="Cartola"
            pageUrl="cartola/omundoeummoinho"
            />

            
          <ShortSong
            musicName="O Tempo Não Para"
            description="Uma música carregada de protestos e críticas, escrita por Cazuza, durante o período em que ele estava doente"
            artist="Cazuza"
            composer="Cazuza"
            pageUrl="cazuza/otemponaopara"
          />
        </div>
        <Footer />
    </div>

    
  );
};

export default GarotaDeIpanema;