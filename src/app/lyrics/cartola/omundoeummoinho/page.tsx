import Footer from "@/app/components/Footer";
import MusicPage from "../../../components/MusicPage";
import Nav from "../../../components/Nav";
import ShortSong from "@/app/components/ShortSong";

const Omundoeummoinho: React.FC = () => {

  
  return (
    <div>
        <Nav />
        <MusicPage
        title="O MUNDO É UM MOINHO"
        description={
        <>
        
            A música <strong>&quot;O Mundo é um Moinho&quot;</strong>, composta por <strong>Cartola</strong> e lançada em <strong>1976</strong>, é uma das mais icônicas do samba.  
            Existem várias versões sobre sua origem, mas a mais famosa diz que Cartola a escreveu como um conselho para sua enteada <strong>Creusa</strong>, filha de sua esposa <strong>Dona Zica</strong>.  
            Segundo essa história, Creusa era uma jovem que desejava sair de casa, e Cartola, preocupado com seu futuro, escreveu a canção como um aviso sobre as durezas da vida.
            <br />
            <br />
        
            A letra carrega um tom paternal e reflexivo, repleta de metáforas poéticas, especialmente na frase  <strong>&quot;O mundo é um moinho&quot;</strong>, que simboliza a passagem do tempo e os desafios que desgastam a juventude e a inocência.  
            Ao longo da canção, o narrador tenta alertar sobre os perigos e desilusões que acompanham a vida adulta, deixando claro que, <strong>uma vez trilhado um caminho incerto, é difícil voltar atrás</strong>.
            <br />
            <br />
        
            Apesar da interpretação ligada à enteada, alguns estudiosos da obra de Cartola sugerem que a letra pode ter um significado mais amplo, refletindo  <strong>suas próprias dificuldades na vida</strong>, sua relação com o tempo e as perdas que enfrentou.  
            Outros ainda afirmam que a música pode ter sido inspirada no rompimento com uma antiga paixão.       
            Seja qual for a versão verdadeira, <strong>o lirismo presente na composição torna a canção universal e atemporal</strong>.
            <br />
            <br />

            O processo musical de <strong>&quot;O Mundo é um Moinho&quot;</strong> é marcado pela suavidade dos acordes e pela interpretação delicada de <strong>Cartola</strong>, com sua voz frágil, que reforça a emoção e a melancolia da letra.  
            O arranjo clássico destaca a profundidade da mensagem, tornando a canção <strong>uma das mais belas e dolorosas do samba</strong>,  
            transcendendo sua época e tocando gerações seguintes.
            <br />
            <br />

            Hoje, <strong>&quot;O Mundo é um Moinho&quot;</strong> é vista como uma das <strong>obras-primas da música brasileira</strong>,  
            reinterpretada por diversos artistas ao longo dos anos.  Sua letra continua ecoando como um retrato da passagem do tempo, dos erros cometidos na juventude e da inevitável transformação que a vida impõe.
        </>
        }
        artist="Cartola"
        composer="Cartola"
        imageUrlComposer="cartola.jpg"
        imgDescription="Cartola"
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
          musicName="O Tempo Não Para"
          description="Uma música carregada de protestos e críticas, escrita por Cazuza, durante o período em que ele estava doente"
          artist="Cazuza"
          composer="Cazuza"
          pageUrl="cazuza/otemponaopara"
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

export default Omundoeummoinho;