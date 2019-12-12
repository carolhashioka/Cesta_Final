import styled from "styled-components";
export const Container = styled.div`
  @media only screen and (max-width: 992px) {
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
      font-size: 15px;
    }
    .streetname {
      border-bottom: 5px;
      border-style: none none groove none;
    }
    h1 {
      font-size: 25px;
      color: rgb(241, 156, 55);

      font-weight: bold;
      text-align: center;
    }
    .name {
      font-size: 18px;
      color: gray;
    }
    a {
      text-decoration: none;
      text-align: center;
    }
    label {
      font-size: 17px;
    }
    p {
      color: white;
    }

    a {
      height: 5px;
      font-size: 18px;

      color: black;
    }
  }
  @media only screen and (min-width: 480px) {
    * {
      justify-content: center;
      display: flex;
      justify-content: center;
      padding: 2px;
      flex-direction: column;
      text-align: center;
      margin-top: 10px;
      border-radius: 5px;
    }
    .report {
      width: 80%;
      justify-content: center;
      padding-left: 350px;
    }
    .streetname {
      border-bottom: 5px;

      border-style: none none groove none;
      border-width: 50%;
    }
    h1 {
      font-size: 50px;
      color: rgb(241, 156, 55);

      font-weight: bold;
      text-align: center;
    }
    .name {
      font-size: 20px;
      color: gray;
    }
    a {
      text-decoration: none;
      text-align: center;
    }
    label {
      font-size: 17px;
    }
    p {
      color: white;
    }
    a {
      height: 5px;
      font-size: 18px;
      color: white;
    }
  }
`;
