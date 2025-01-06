import MusicPage from "../../components/MusicPage";
import Nav from "../../components/Nav";

const Yestarday: React.FC = () => {
  return (
    <div>
        <Nav />
        <MusicPage
        musicName="Yesterday"
        description={`"Yesterday" é uma das canções mais emblemáticas dos Beatles, composta por Paul McCartney e lançada no álbum Help! (1965). A melodia veio a McCartney em um sonho enquanto dormia na casa de sua namorada na época, Jane Asher, em Londres. Quando acordou, ele correu para o piano para tocar a sequência de acordes e confirmar que era uma melodia original.

        Paul passou semanas perguntando a colegas e amigos se reconheciam a música, com medo de ter a roubado inconscientemente de outro compositor. Depois de concluir que era realmente original, ele começou a trabalhar na letra. Curiosamente, a versão inicial da música tinha uma letra provisória que começava com "Scrambled eggs, oh, my baby, how I love your legs" (Ovos mexidos, oh meu amor, como eu amo suas pernas). 

        A canção finalizada é uma balada melancólica sobre arrependimento e saudade, e se destaca por ser a primeira gravação dos Beatles que contou apenas com um dos membros (Paul McCartney acompanhado por um quarteto de cordas, em um arranjo de George Martin).
        
        "Yesterday" entrou para o Guinness Book como a música mais regravada na história da música popular, com mais de 1.600 versões cover oficialmente registradas.
        `}
        artist="The Beatles"
        composer="Lennon/Mccartney"
        />
    </div>
    
  );
};

export default Yestarday;