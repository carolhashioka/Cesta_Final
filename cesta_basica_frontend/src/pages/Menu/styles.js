import styled from "styled-components";
export const Container = styled.div`
  @media only screen and (max-width: 992px) {
  }
  @media only screen and (min-width: 480px) {
    * {
      justify-content: center;
      /* max-width: 768px;
      min-width: 480px; */
    }
    p {
      text-align: center;
      color: rgb(241, 156, 55);
    }
    img {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
    .logout{
        margin-top:500px;
     padding-right:1000px;
    }
    .signup {
      margin-left: 20px;
      width: 47%;
      background: rgba(0, 0, 0, 0.1);
      float: left;
      height: 200px;
    }
    .commerce {
      margin-right: 20px;
      width: 47%;
      background: rgba(0, 0, 0, 0.1);
      float: right;
      height: 200px;
    }

    .mquote {
      margin-top: 50px;
      margin-left: 20px;
      width: 47%;
      background: rgba(0, 0, 0, 0.1);
      float: left;
      height: 200px;
    }
    .report {
      margin-top: 50px;
      margin-right: 20px;
      width: 47%;
      background: rgba(0, 0, 0, 0.1);
      float: right;
      height: 200px;
    }
    .link {
      margin-top: 50px;
      text-decoration: none;
    }
    h1 {
      font-size: 50px;
      color: rgb(241, 156, 55);
      font-weight: bold;
      text-align: center;
    }

    a {
      height: 5px;
      text-decoration: none;
      color: white;
    }
  }
`;
