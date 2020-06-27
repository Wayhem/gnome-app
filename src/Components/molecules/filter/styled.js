import styled from 'styled-components'

export const Container = styled.div`
  border-radius: 8px;
  background-color: ${props => props.theme.colors[props.color]};
  color: ${props => props.theme.colors.white};
  width: 20%;
  height: 10rem;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.24), 0px 0px 2px rgba(0, 0, 0, 0.12);
  transition: all 0.2s;

  :hover {
    transform: ${props => (props.selected ? null : 'translateY(-2px)')};
    box-shadow: ${props => (props.selected ? null : '0 6px 10px rgba(51, 51, 51, 0.2)')};
  }

  :active {
    transform: ${props => (props.selected ? null : 'translate(-1px)')};
    box-shadow: ${props => (props.selected ? null : '0 2px 6px rgba(51, 51, 51, 0.4)')};
  }
`
