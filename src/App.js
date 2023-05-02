import "./App.css";
import {
  ImageBack,
  ContainerBar,
  ContainerBar2,
  ContainerBar3,
  ButtonWhats,
  ImageMinisterial,
  SectionMin,
  ContentIdica,
  PastorImageContainer,
  WhatsButton,
  SectionMin2,
} from "./style";
import NapoleaoImg from "../src/assets/A_Imagem_napoleao_leadpage.jpg";
import RenanImg from "../src/assets/image.jpg";
import PauloNeto from "../src/assets/pauloNeto.jpeg";
import ButtonWpp from "../src/assets/botao-whatsapp.png";
import { CountDownTimer } from "../src/components/coutdownTimer";

import Ministerial1 from "../src/assets/ministerial1.svg";
import Ministerial2 from "../src/assets/ministerial2.svg";
import Ministerial3 from "../src/assets/ministerial3.svg";
import Ministerial4 from "../src/assets/ministerial4.svg";
import Ministerial5 from "../src/assets/ministerial5.svg";
import QuemIndica from "../src/assets/quemIndica.svg";

import Napoleao from "../src/assets/pastor_napoleao_image.png";
import MarcosFeliciano from "../src/assets/marcos_feliciano_image.png";
import AcacioJr from "../src/assets/acacio_junior_image.png";
import AndreMatias from "../src/assets/andre_matias_image.png";
import Gilmar from "../src/assets/gilmar_fiuza_image.png";
import Renan from "../src/assets/renan_lopes_image.png";
import Eduardo from "../src/assets/eduardo_souza_image.png";
import Paulo from "../src/assets/paulo_robson_image.png";
import Alex from "../src/assets/alex_martins_image.png";
import CantorPauloNeto from "../src/assets/paulo_neto_image.png";
import Pixel from '../src/components/pixel'

const App = () => {
  const handleClick = () => {
    window.location.href = "https://wa.me/5518997470844?text=Ol%C3%A1+gostaria+de+saber+mais+sobre+o+curso%21";
  };

  return (
    <main className="App">
<Pixel name='FACEBOOK_PIXEL_1' />
      <ImageBack src={NapoleaoImg} alt="Curso Teologico" />

      <ContainerBar>
        <>
          <h1>Condição especial somente hoje!</h1>
        </>
        <CountDownTimer />
      </ContainerBar>

      <ImageBack src={RenanImg} alt="Instituto renascer" />

      <ContainerBar2>
        <h2>Quero me tornar aluno agora</h2>
        <>
          <ButtonWhats onClick={handleClick}>
            <img src={ButtonWpp} alt="Botão para whatsapp" />
          </ButtonWhats>
        </>
      </ContainerBar2>

      <ImageBack
        onClick={handleClick}
        src={PauloNeto}
        alt="Curso de teologia"
      />

      <ContainerBar3>
        <>
          <h1>+5 Bonus Especiais</h1>
        </>
        <CountDownTimer />
      </ContainerBar3>
      <SectionMin>
        <ImageMinisterial src={Ministerial1} alt />
        <ImageMinisterial src={Ministerial2} alt /> {/* nao esquecer o alt*/}
        <ImageMinisterial src={Ministerial3} alt />
        <ImageMinisterial src={Ministerial4} alt />
        <ImageMinisterial src={Ministerial5} alt />
      </SectionMin>

      <ContentIdica>
        <img src={QuemIndica} alt="Quem indica o instituto renascer" />

        <p>
          Confira abaixo os homens de Deus que indicam nossos cursos. Somente
          quem sabe a importância da palavra de Deus pode indicar o melhor curso
          de teologia para você.
        </p>
      </ContentIdica>

      <SectionMin2>
        <PastorImageContainer>
          <img src={Napoleao} alt="Pastor Napoleão Falcão" />
          <div>
            <p>
              Pastor <br /> Napoleão <br /> Falcão
            </p>
          </div>
        </PastorImageContainer>

    

        <PastorImageContainer>
          <img src={AcacioJr} alt="Pastor Acácio Junior" />
          <div>
            <p>
              Pastor <br /> Acácio <br /> Junior
            </p>
          </div>
        </PastorImageContainer>

        <PastorImageContainer>
          <img src={AndreMatias} alt="Pastor André Matias" />
          <div>
            <p>
              Pastor <br /> André <br /> Matias
            </p>
          </div>
        </PastorImageContainer>

        <PastorImageContainer>
          <img src={Gilmar} alt="Pastor Gilmar Fiuza" />
          <div>
            <p>
              Pastor <br /> Gilmar <br /> Fiuza
            </p>
          </div>
        </PastorImageContainer>

        <PastorImageContainer>
          <img src={Renan} alt="Pastor Renan Lopes" />
          <div>
            <p>
              Pastor <br /> Renan <br /> Lopes
            </p>
          </div>
        </PastorImageContainer>

        <PastorImageContainer>
          <img src={Eduardo} alt="Pastor Eduardo Souza" />
          <div>
            <p>
              Pastor <br /> Eduardo <br /> Souza
            </p>
          </div>
        </PastorImageContainer>

        <PastorImageContainer>
          <img src={Paulo} alt="Pastor Paulo Robson" />
          <div>
            <p>
              Pastor <br /> Paulo <br /> Robson
            </p>
          </div>
        </PastorImageContainer>

        <PastorImageContainer>
          <img src={Alex} alt="Pastor Alex Martins" />
          <div>
            <p>
              Pastor <br /> Alex <br /> Martins
            </p>
          </div>
        </PastorImageContainer>

        <PastorImageContainer>
          <img src={CantorPauloNeto} alt="Cantor Paulo Neto" />
          <div>
            <p>
              Cantor <br /> Paulo <br /> Neto
            </p>
          </div>
        </PastorImageContainer>
      </SectionMin2>

      <div>
        <WhatsButton onClick={handleClick}>
          EU QUERO FAZER A MATRICULA
        </WhatsButton>
      </div>
    </main>
  );
};

export default App;
