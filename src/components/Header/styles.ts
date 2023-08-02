import styled from 'styled-components'

export const Container = styled.header`
  height: 296px;

  background: url('https://i.imgur.com/dGmW22Z.png') 50% no-repeat;
  background-size: cover;
  background-position: center;

  display: flex;
  justify-content: center;

  & > a {
    margin-top: 4rem;
    width: max-content;
    height: max-content;

    transition: opacity 0.15s;
    &:hover {
      opacity: 0.5;
    }
  }
`
