import styled from 'styled-components'

export const Container = styled.div`
  border-radius: 8px;
  background-color: ${props => props.theme.colors[props.color]};
  color: ${props => props.theme.colors.white};
  width: 21%;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.24), 0px 0px 2px rgba(0, 0, 0, 0.12);
  transition: all 0.2s;
  overflow-y: scroll;
  cursor: ${props => (props.focused ? '' : 'pointer')};
  margin: 1rem;
  height: 10rem;

  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 1320px) {
    width: 30%;
  }

  @media screen and (max-width: 991px) {
    width: 38%;
    margin: 0.75rem;
  }

  @media screen and (max-width: 767px) {
    width: 45%;
    margin: 0.5rem;
  }

  @media screen and (max-width: 479px) {
    width: 80%;
  }
`
