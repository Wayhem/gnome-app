import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useRecoilValue } from 'recoil'
import { Gnome, GnomeSkeleton } from 'Components/molecules'
import { FilteredData } from 'Recoil/Selectors'

const LIMIT = 20

const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// TODO: enable friend feature (without infinite scrolling it would be scrolling to the place, with infinite scrolling, it would be opening a modal with the friend data)
const Gnomes = () => {
  const [gnomesToShow, setGnomesToShow] = useState([])
  const [pageNum, setPageNum] = useState(1)
  const [isLoading, setIsLoading] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const data = useRecoilValue(FilteredData)
  const observer = useRef()
  const lastGnomeElementRef = useCallback(
    node => {
      if (isLoading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNum(prevPageNumber => prevPageNumber + 1)
        }
      })
      if (node) observer.current.observe(node)
    },
    [isLoading, hasMore]
  )

  useEffect(() => {
    setGnomesToShow([])
    setPageNum(1)
  }, [data])

  useEffect(() => {
    // api call simulation with timeout
    const getGnomes = () => data.slice((pageNum - 1) * LIMIT, pageNum * LIMIT)
    setIsLoading(true)
    const newGnomes = getGnomes(pageNum)
    setTimeout(() => {
      setGnomesToShow(value => {
        const filteredGnomes = newGnomes.filter(({ id: newId }) => {
          const Ids = value.map(({ id }) => id)
          return !Ids.some(el => el === newId)
        })

        return [...value, ...filteredGnomes]
      })
      setHasMore(newGnomes.length > 0)
      setIsLoading(false)
    }, 300)
  }, [pageNum, data])

  return (
    <>
      {gnomesToShow.map(
        ({ age, friends, hair_color: hair, height, id, name, professions, thumbnail, weight }, index) => (
          <Gnome
            age={age}
            friends={friends}
            hair={hair}
            height={height}
            key={id}
            name={name}
            professions={professions}
            thumbnail={thumbnail}
            weight={weight}
            refProp={gnomesToShow.length === index + 1 ? lastGnomeElementRef : null}
          />
        )
      )}
      {isLoading && skeletons.map(el => <GnomeSkeleton key={el} />)}
    </>
  )
}

export default Gnomes
