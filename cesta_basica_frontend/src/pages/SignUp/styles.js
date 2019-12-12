import styled from "styled-components";
export const Container = styled.div`
  @media only screen and (max-width: 992px) {
    * {
      justify-content: center;
      display: flex;
      justify-content: center;
      padding: 7px;
      flex-direction: column;
      margin-left: auto;
      margin-right: auto;
      /* max-width: 450px;
      min-width: 200px; */
      margin-top: 5px;
      border-radius: 5px;
    }
    .link {
      margin-top: 50px;
      text-decoration: none;
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
      height: 5px;

      color: white;
    }
  }
  @media only screen and (min-width: 480px) {
    * {
      justify-content: center;
      display: flex;
      justify-content: center;
      padding: 12px;
      flex-direction: column;
      margin-left: auto;
      margin-right: auto;
      /* max-width: 768px;
      min-width: 480px; */

      border-radius: 5px;
    }
    .link {
      margin-top: 50px;
      text-decoration: none;
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
      height:35px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 220px;
      margin-bottom: 50px;
    }
    a {
      height: 5px;

      color: white;
    }
  }
`;
