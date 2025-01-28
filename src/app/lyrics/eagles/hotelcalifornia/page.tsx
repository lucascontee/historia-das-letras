import Footer from "@/app/components/Footer";
import MusicPage from "../../../components/MusicPage";
import Nav from "../../../components/Nav";
import ShortSong from "@/app/components/ShortSong";

const HotelCalifornia: React.FC = () => {

  
  return (
    <div>
        <Nav />
        <MusicPage
        title="HOTEL CALIFORNIA"
        description={
          <>
            <br />
            A principal inspiração por trás de &quot;<strong>Hotel California</strong>&quot;não era um lugar real, mas uma metáfora. <strong>Don Henley</strong>, o principal letrista, falou sobre a ideia de tentar capturar o ambiente excessivo da vida na Califórnia, especialmente Los Angeles, que ele via como uma mistura de prazer e armadilhas. A música descreve a viagem de alguém a um local maravilhoso, mas misterioso e, de certa forma, desorientador, onde a pessoa se vê presa.
            <br />
            <br />
            <strong>Don Henley</strong> explicou que, na época, muitos membros da banda estavam vivendo uma vida de excessos, com a fama, as drogas, e o estilo de vida na indústria musical. Essa sensação de estar preso e sem saída é expressa na letra, onde a pessoa chega ao &quot;<strong>Hotel California</strong>&quot;, aparentemente um paraíso, mas logo se dá conta de que não pode sair.
            <br />
            <br />
            O processo de composição de &quot;<strong>Hotel California</strong>&quot; foi um esforço colaborativo. <strong>Don Felder</strong> criou a icônica introdução de guitarra e parte da música instrumental. Depois, ele tocou para <strong>Henley</strong> e <strong>Frey</strong>, que ajudaram a moldá-la e a dar vida à letra. <strong>Don Felder</strong> costumava comentar que, no início, a música era uma melodia instrumental com uma sensação de tranquilidade, até que a colaboração de <strong>Henley</strong> transformou-a em uma história mais sombria e intrigante.
            <br />
            <br />
            Os primeiros rascunhos da música não eram tão diretos, mas depois de alguns ajustes, <strong>Henley</strong> começou a visualizar a narrativa de uma pessoa que chegava a um hotel aparentemente glamouroso, mas com uma sensação inquietante, como um tipo de armadilha. A letra tem diversas interpretações, qual é a sua? 
          </>
        }
        artist="Eagles"
        composer="Glenn Lewis Frey / Don Felder / Donald Hugh Henley"
        imageUrlComposer="eagles.png"
        imgDescription="Eagles"
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
        musicName="Yesterday"
        description="Escrita por Paul Mccartney, Yestardey é a música com mais covers da história, e seu primeiro nome foi Ovos Mexidos"
        artist="The Beatles"
        composer="Lennon/Mccartney"
        pageUrl="thebeatles/yesterday"
      />
    </div>
        <Footer/>
    </div>
    
  );
};

export default HotelCalifornia;