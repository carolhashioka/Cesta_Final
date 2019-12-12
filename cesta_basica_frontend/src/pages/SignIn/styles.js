import styled from "styled-components";
export const Container = styled.div`
  @media only screen and (max-width: 992px) {
    * {
      justify-content: center;
      display: flex;
      justify-content: center;
      padding: 10px;
      flex-direction: column;
      margin-left: auto;
      margin-right: auto;
      /* max-width: 450px;
      min-width: 230px; */
      margin-top: 15px;
      border-radius: 5px;
    }

    .title h1 {
      font-size: 40px;
      color: rgb(241, 156, 55);
      font-weight: bold;
      text-align: center;
    }

    button {
      background-color: rgb(241, 156, 55);

      color: white;
      justify-content: center;
      text-align: center;
      float: left;
      top: 50%;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      max-width: 400px;
      margin-bottom: 50px;
    }
    a {
      height: 15px;
      font-size: 15px;
      color: white;
    }
  }
  @media only screen and (min-width: 480px) {
    * {
      justify-content: center;
      display: flex;
      justify-content: center;
      padding: 13px;
      flex-direction: column;
      margin-left: auto;
      margin-right: auto;
      /* max-width: 768px;
      min-width: 480px; */
      margin-top: 10px;
      border-radius: 5px;
    }
    .title h1 {
      font-size: 50px;
      color: rgb(241, 156, 55);

      font-weight: bold;
      text-align: center;
    }

    button {
      background-color: rgb(241, 156, 55);
      color: white;
      justify-content: center;
      text-align: center;
      float: left;
      top: 50%;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 220px;
      margin-bottom: 50px;
    }
    a {
      height: 5px;
      font-size: 18px;

      color: white;
    }
  }
`;
