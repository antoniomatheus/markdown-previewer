import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  header {
    padding: 10px;
    text-align: center;
    font-weight: bold;
    font-size: 24px;
    background-color: #65b54a;
    border-bottom: 1px solid #000;
  }

  div {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    background: rgba(101, 181, 74, 0.1);
    padding: 10px;
    border-radius: 4px;
    width: 90%;
    height: 90%;
    overflow-y: scroll;
    margin: 20px auto;
  }
`;
