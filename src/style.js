import styled from "styled-components";

export const ImageBack = styled.img`
  width: 90%;
`;

export const ContainerBar = styled.div`
  width: 90%;
  background-color: #fabf0d;
  margin: 0 auto;
  padding: 5px;
  box-sizing: border-box;
  position: relative;
  bottom: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin: 10px 0;
  }
`;

export const ContainerBar2 = styled.div`
  width: 90%;
  background-color: #fabf0d;
  margin: 0 auto;
  padding: 5px 10px;
  box-sizing: border-box;
  position: relative;
  bottom: 4px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  h2 {
    margin: 10px 0;
    font-size: 40px;
  }

  @media (max-width: 620px) {
    flex-direction: column;
    background-color: red;
  }
`;

export const ButtonWhats = styled.button`
  background: none;
  border: none;
  position: relative;
  top: 5px;
  cursor: pointer;
`;

export const ContainerBar3 = styled.div`
  width: 90%;
  background-color: #fabf0d;
  margin: 0 auto;
  padding: 5px;
  box-sizing: border-box;
  position: relative;
  bottom: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin: 10px 0;
    letter-spacing: 14px;
    text-shadow: 2px 1px 3px red;
  }
`;

export const SectionMin = styled.section`
  width: 91.2%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 1056px) {
    width: 90%;
  }

  @media (max-width: 756px) {
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;

export const SectionMin2 = styled.section`
  width: 91.2%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 1080px) {
    width: 90%;
  }

  @media (max-width: 776px) {
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;

export const ImageMinisterial = styled.img`
  width: 320px;
  height: 450px;
  margin-bottom: 23px;

  @media (max-width: 1056px) {
    width: 280px;
    height: 410px;
  }

  @media (max-width: 956px) {
    width: 250px;
    height: 380px;
  }

  @media (max-width: 856px) {
    width: 220px;
    height: 350px;
  }

  @media (max-width: 756px) {
    width: 620px;
    height: 750px;
  }

  @media (max-width: 700px) {
    width: 520px;
    height: 650px;
  }

  @media (max-width: 580px) {
    width: 420px;
    height: 550px;
  }

  @media (max-width: 470px) {
    width: 320px;
    height: 450px;
  }

  @media (max-width: 396px) {
    width: 280px;
    height: 410px;
  }

  @media (max-width: 376px) {
    width: 230px;
    height: 350px;
  }
`;

export const ContentIdica = styled.div`
  margin-top: 25px;
  max-width: 90%;
  img {
    width: 300px;

    @media (max-width: 476px) {
      width: 280px;
    }
  }

  p {
    color: #dbd7d7;
  }
`;

export const PastorImageContainer = styled.div`
  img {
    width: 320px;
    height: 450px;
    margin-bottom: 10px;

    @media (max-width: 1080px) {
      width: 290px;
      height: 420px;
    }

    @media (max-width: 996px) {
      width: 260px;
      height: 390px;
    }

    @media (max-width: 884px) {
      width: 240px;
      height: 360px;
    }

    @media (max-width: 830px) {
      width: 320px;
      height: 450px;
    }

    @media (max-width: 760px) {
      width: 420px;
      height: 550px;
    }

    @media (max-width: 470px) {
      width: 360px;
      height: 490px;
    }

    @media (max-width: 400px) {
      width: 330px;
      height: 450px;
    }

    @media (max-width: 365px) {
      width: 300px;
      height: 410px;
    }

    @media (max-width: 335px) {
      width: 280px;
      height: 390px;
    }
  }

  p {
    margin: 0;
    color: #cfc6c6;
    font-size: 25px;
    margin-bottom: 20px;
  }
`;

export const WhatsButton = styled.button`
  padding: 15px;
  background-color: #74d429;
  border: none;
  color: white;
  font-size: 30px;
  border-radius: 10px;
  font-family: "righteous";
  margin-bottom: 25px;
`;
