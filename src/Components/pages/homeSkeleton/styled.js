import styled from 'styled-components'

export const FiltersContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 160px 2rem;
  flex-wrap: wrap;

  @media screen and (max-width: 991px) {
    padding: 4rem 2rem;
  }

  @media screen and (max-width: 767px) {
    padding: 3rem 1.5rem;
  }

  @media screen and (max-width: 479px) {
    padding: 2rem 1rem;
  }
`

export const GnomeContainer = styled(FiltersContainer)`
  justify-content: space-evenly;
`
