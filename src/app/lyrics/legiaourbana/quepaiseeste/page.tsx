import Footer from "@/app/components/Footer";
import MusicPage from "../../../components/MusicPage";
import Nav from "../../../components/Nav";
import ShortSong from "@/app/components/ShortSong";

const QuePaisEEsse: React.FC = () => {

  
  return (
    <div>
        <Nav />
        <MusicPage
        title="QUE PAÍS É ESTE"
        description={
        <>
          <strong>&quot;Que País é Este&quot;</strong> é uma das músicas mais icônicas do <strong>Legião Urbana</strong> e foi composta por <strong>Renato Russo</strong> em <strong>1978</strong>, durante a ditadura militar no Brasil. A música surgiu como um desabafo sobre a corrupção, desigualdade e injustiças sociais do país.
          <br />
          <br />

          Originalmente, a canção fazia parte do repertório da banda <strong>Aborto Elétrico</strong>, grupo punk liderado por Renato Russo antes da formação da Legião Urbana. No entanto, a música só foi oficialmente gravada e lançada em <strong>23 de novembro de 1987</strong>, como faixa-título do terceiro álbum da banda.
          <br />
          <br />

          A letra, carregada de ironia e revolta, denuncia a exploração do povo e o domínio de uma elite corrupta. Trechos como <strong>&quot;Nas favelas, no Senado, sujeira pra todo lado&quot;</strong> refletem a insatisfação generalizada com o sistema político e social. A repetição da pergunta <strong>&quot;Que país é este?&quot;</strong> transforma a música em um grito de indignação.
          <br />
          <br />

          Apesar de ter sido escrita durante a ditadura, a música permaneceu extremamente atual ao longo das décadas. Sua mensagem crítica ressoa em diferentes momentos da história política brasileira, sendo frequentemente associada a protestos e manifestações populares.

          <strong>&quot;Que País é Este&quot;</strong> se tornou um verdadeiro <strong>hino de contestação</strong>, consolidando o <strong>Legião Urbana</strong> como uma das bandas mais influentes do rock nacional. Mais de 30 anos após seu lançamento, a música continua relevante, demonstrando que as questões abordadas em sua letra ainda fazem parte da realidade brasileira.
        </>
        }
        artist="Legião Urbana"
        composer="Renato Russo"
        imageUrlComposer="legiaourbana.jpg"
        imgDescription="Legião Urbana"
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

export default QuePaisEEsse;