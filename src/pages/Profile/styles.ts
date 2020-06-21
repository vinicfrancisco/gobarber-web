import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  align-items: stretch;

  > header {
    align-items: center;
    background: #28262e;
    display: flex;
    height: 144px;

    > div {
      margin: 0 auto;
      max-width: 1120px;
      width: 100%;

      svg {
        color: #999591;
        height: 24px;
        width: 24px;
      }
    }
  }
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: -176px auto 0;
  width: 100%;

  form {
    display: flex;
    flex-direction: column;
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      font-size: 20px;
      margin-bottom: 24px;
      text-align: left;
    }
  }

  input[name='old_password'] {
    margin-top: 24px;
  }
`;

export const AvatarInput = styled.div`
  align-self: center;
  margin-bottom: 32px;
  position: relative;

  img {
    border-radius: 50%;
    height: 186px;
    width: 186px;
  }

  label {
    align-items: center;
    background: #ff9000;
    border-radius: 48px;
    border: 0;
    bottom: 0;
    cursor: pointer;
    display: flex;
    height: 48px;
    justify-content: center;
    position: absolute;
    right: 0;
    transition: background-color 0.2s;
    width: 48px;

    input {
      display: none;
    }

    svg {
      color: #312e38;
      height: 20px;
      width: 20px;
    }

    &:hover {
      background: ${shade(0.2, '#ff9000')};
    }
  }
`;
