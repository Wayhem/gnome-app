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

export const ImageRow = styled(Row)`
  margin: 1.5rem 0;
  justify-content: center;
`
