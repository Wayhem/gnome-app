import styled from 'styled-components'

export const Pic = styled.div`
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  background: url(${props => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-right: 1rem;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Name = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }
`
