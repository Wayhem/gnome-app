import React from 'react'
import { FilterSkeleton, GnomeSkeleton } from 'Components/molecules'
import { FiltersContainer, GnomeContainer } from './styled'

const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

const Home = () => (
  <>
    <FiltersContainer>
      <FilterSkeleton color='verdigris' />
      <FilterSkeleton color='cgBlue' />
      <FilterSkeleton color='LightYellow' />
      <FilterSkeleton color='peachPuff' />
      <FilterSkeleton color='bittersweet' />
    </FiltersContainer>
    <GnomeContainer>
      {skeletons.map(el => (
        <GnomeSkeleton key={el} />
      ))}
    </GnomeContainer>
  </>
)

export default Home
