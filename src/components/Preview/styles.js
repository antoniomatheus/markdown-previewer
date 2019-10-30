import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  header {
    font-family: 'Audiowide', cursive;
    padding: 10px;
    text-align: center;
    font-weight: bold;
    font-size: 24px;
    background-color: #573fa8;
    color: #fff;
    border-bottom: 1px solid #000;
  }

  div {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    background: rgba(255, 255, 255, 0.7);
    padding: 10px;
    border-radius: 4px;
    width: 90%;
    height: 90%;
    overflow-y: scroll;
    margin: 20px auto;
  }
`;
