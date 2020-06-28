import styled from 'styled-components'

export const CardContainer = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.24), 0px 0px 2px rgba(0, 0, 0, 0.12);
  border-radius: 3px;
  width: 20rem;
  padding: 1rem;
  margin: 0 1.25rem 1.5rem;
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 1rem 0;
`

export const Name = styled.div`
  font-weight: 500;
`

export const Age = styled.div`
  color: ${props => props.theme.colors.gray40l};
`

export const SmallField = styled(Age)`
  font-size: 0.75rem;
  padding-top: 0.5rem;
`

export const Image = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: url(${props => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export const ImageRow = styled(Row)`
  margin: 1.5rem 0;
  justify-content: center;
`
