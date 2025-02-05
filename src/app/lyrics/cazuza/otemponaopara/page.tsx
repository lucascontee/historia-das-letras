import Footer from "@/app/components/Footer";
import MusicPage from "../../../components/MusicPage";
import Nav from "../../../components/Nav";
import ShortSong from "@/app/components/ShortSong";

const Otemponaopara: React.FC = () => {

  
  return (
    <div>
        <Nav />
        <MusicPage
        title="O TEMPO NÃO PARA"
        description={
        <>
            A canção <strong>&quot;O Tempo Não Para&quot;</strong>, lançada em <strong>1988</strong>, se tornou uma das mais icônicas de <strong>Cazuza</strong>. Escrita em um momento de fragilidade em sua vida, a música reflete sua visão crítica sobre o Brasil da época e sua luta contra a <strong>AIDS</strong>, doença que o afetava profundamente.  
            A letra carrega um tom de <strong>protesto, ironia e resistência</strong>, mostrando que, apesar de tudo, Cazuza se recusava a se render às adversidades.
            <br />
            <br />
        
            Cazuza escreveu <strong>&quot;O Tempo Não Para&quot;</strong> inspirado em suas próprias experiências, trazendo frases marcantes como <strong>&quot;Eu vejo o futuro repetir o passado, eu vejo um museu de grandes novidades&quot;</strong>.  
            Essa crítica social reforça o sentimento de que, no Brasil, os problemas históricos parecem sempre retornar.  
            A canção foi escrita durante uma fase intensa de sua vida, enquanto enfrentava tratamentos médicos e lidava com o preconceito devido à sua condição de saúde.
            <br />
            <br />

        
            O processo musical envolveu sua parceria com <strong>Arnaldo Brandão</strong>, com quem desenvolveu uma melodia forte e cheia de impacto, misturando <strong>rock e MPB</strong>.  
            A música se destacou não apenas pela sua letra forte, mas também pelo instrumental intenso, marcado por um ritmo envolvente e uma interpretação visceral de Cazuza.  
            <br />
            <br />

            <strong>&quot;O Tempo Não Para&quot;</strong> se tornou um verdadeiro <strong>hino de resistência</strong>.  
            Sua mensagem sobre a <strong>passagem implacável do tempo e a luta contra os obstáculos</strong> ressoou com diversas gerações, tornando a música atemporal. 
            A faixa deu título ao <strong>último álbum ao vivo de Cazuza</strong>, consolidando-se como uma das suas obras mais marcantes.
            <br />
            <br />

            Hoje, <strong>&quot;O Tempo Não Para&quot;</strong> continua sendo uma das músicas mais impactantes do rock nacional, 
            interpretada por diversos artistas e sempre lembrada como um símbolo da coragem e do espírito contestador de Cazuza. 
            Sua obra permanece viva, reafirmando a força da música como forma de resistência e expressão pessoal.
        </>
        }
        artist="Cazuza"
        composer="Cazuza"
        imageUrlComposer="Cazuza.jpg"
        imgDescription="Cazuza"
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
          musicName="Que País é Este"
          description="Uma crítica à corrupção e desigualdade no Brasil, Que País é Este reflete indignação e protesto"
          artist="Legião Urbana"
          composer="Renato Russo"
          pageUrl="legiaourbana/quepaiseeste"
        />
        </div>
        <Footer />
    </div>

    
  );
};

export default Otemponaopara;