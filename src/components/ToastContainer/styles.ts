import styled, { css } from 'styled-components';

interface ToastProps {
  type?: 'success' | 'error' | 'info';
  hasDescription: boolean;
}

const toastTypeVariantion = {
  info: css`
    background: #ebf8ff;
    color: #3172b7;
  `,
  success: css`
    background: #e6fffa;
    color: #26656a;
  `,
  error: css`
    background: #fddede;
    color: #c53030;
  `,
};

export const Container = styled.div`
  overflow: hidden;
  padding: 30px;
  position: absolute;
  right: 0%;
  top: 0;
`;

export const Toast = styled.div<ToastProps>`
  background: #ebf8ff;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  color: #3172b7;
  display: flex;
  padding: 16px 30px 16px 16px;
  position: relative;
  width: 360px;

  & + div {
    margin-top: 8px;
  }

  ${(props) => toastTypeVariantion[props.type || 'info']}

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;
  }

  p {
    margin-top: 4px;
    font-size: 14px;
    line-height: 20px;
    opacity: 0.8;
  }

  button {
    background: transparent;
    border: 0;
    color: inherit;
    opacity: 0.6;
    position: absolute;
    right: 16px;
    top: 19px;
  }

  ${(props) =>
    !props.hasDescription &&
    css`
      align-items: center;

      > svg {
        margin-top: 0;
      }
    `}
`;