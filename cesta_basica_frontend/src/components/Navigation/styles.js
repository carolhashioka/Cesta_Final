import styled from 'styled-components';

export const Container = styled.nav`
  position: fixed;
  
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  a {
    height: 80px;
    width: 100%;
    /* border: solid 3px #eee; */
    /* border-radius: 50%; */
    padding: 30px;
    /* margin: 20px; */
  
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    :hover {
      border: none;
      background: rgb(241, 156, 55);
    }
    span {
      text-align: center;
      font-size: 18px;
    
    }
  }
`;

