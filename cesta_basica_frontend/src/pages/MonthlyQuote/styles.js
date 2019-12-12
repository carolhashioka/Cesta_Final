import styled from "styled-components";
export const Container = styled.div`
  @media only screen and (max-width: 992px) {
    * {
      justify-content: center;
      display: flex;
      justify-content: center;

      flex-direction: column;
      margin-left: auto;
      margin-right: auto;
      /* max-width: 450px;
      min-width: 230px; */
      margin-top: 12px;
      border-radius: 5px;
    }

    .title h1 {
      font-size: 35px;
      color: rgb(241, 156, 55);
      font-weight: bold;
      text-align: center;
    }
    label {
      font-size: 13px;
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
    .inputm {
      max-height: 83px;
      min-height: 70x;
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
      padding: 2px;
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
    label {
      font-size: 15px;
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
      width: 200px;
      margin-bottom: 50px;
    }
    .input{background-color:white;}
    .inputm {
      max-height: 83px;
      min-height: 70x;
    }
    a {
      height: 5px;
      font-size: 18px;

      color: white;
    }
  }
`;
