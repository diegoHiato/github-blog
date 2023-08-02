import styled from 'styled-components'

export const Container = styled.header`
  height: 296px;

  background: url('https://i.imgur.com/dGmW22Z.png') top right no-repeat;
  background-position: center;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;

  & > a > img {
    cursor: pointer;

    transition: opacity 0.15s;
    &:hover {
      opacity: 0.5;
    }
  }
`
