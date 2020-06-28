import styled from 'styled-components'

export const Container = styled.div`
  border-radius: 8px;
  background-color: ${props => props.theme.colors[props.color]};
  color: ${props => props.theme.colors.black};
  width: 21%;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.24), 0px 0px 2px rgba(0, 0, 0, 0.12);
  transition: all 0.2s;
  overflow-y: scroll;
  height: 10rem;
  display: flex;
  flex-direction: column;
  margin: 1rem;

  ::-webkit-scrollbar {
    display: none;
  }

  .slider {
    width: 75%;
    margin: auto;
    font-family: Inter;
    color: ${props => props.theme.colors.black};
  }
`

export const Element = styled.div`
  width: 100%;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
  text-align: center;
  transition: all 0.2s;
  padding: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: ${props => props.marginTop};

  :hover {
    background-color: ${props => (props.focused ? 'rgba(51, 51, 51, 0.1)' : '')};
  }
`
