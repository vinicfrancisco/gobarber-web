import styled from 'styled-components';
import { shade } from 'polished';

import signupBackground from '../../assets/signup-background.png';

export const Container = styled.div`
  align-items: stretch;
  display: flex;
  height: 100vh;
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 700px;
  width: 100%;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }
  }

  > a {
    align-items: center;
    color: #f4ede8;
    display: flex;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    > svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#f4ede8')};
    }
  }
`;

export const Background = styled.div`
  background: url(${signupBackground}) no-repeat center;
  background-size: cover;
  flex: 1;
`;
