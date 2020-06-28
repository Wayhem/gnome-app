import React, { Suspense } from 'react'
import PropTypes from 'prop-types'
import { useImage } from 'react-image'
import Skeleton from '@material-ui/lab/Skeleton'
import { CardContainer, Row, Name, Age, SmallField, Image, ImageRow } from './styled'

function MyImageComponent({ imageSrc }) {
  const { src } = useImage({
    srcList: imageSrc,
  })

  return <Image src={src} />
}

MyImageComponent.propTypes = {
  imageSrc: PropTypes.string,
}

MyImageComponent.defaultProps = {
  imageSrc: '',
}

const Gnome = ({ name, age, friends, hair, height, professions, thumbnail, weight, refProp }) => {
  const financial = x => Number.parseFloat(x).toFixed(2)

  return (
    <CardContainer ref={refProp}>
      <Row>
        <Name>{name}</Name>
        <Age>{age}y</Age>
      </Row>
      <ImageRow>
        <Suspense fallback={<Skeleton variant='circle' width={80} height={80} />}>
          <MyImageComponent imageSrc={thumbnail} />
        </Suspense>
      </ImageRow>
      <Row>
        <SmallField>Hair: {hair}</SmallField>
        <SmallField>Height: {financial(height)}</SmallField>
        <SmallField>Weight: {financial(weight)}</SmallField>
      </Row>
      <Row style={{ flexDirection: 'column' }}>
        <Age style={{ paddingTop: '0.5rem' }}>Proffessions:</Age>
        <SmallField>{professions.join(', ')}</SmallField>
      </Row>
      <Row style={{ flexDirection: 'column' }}>
        <Age style={{ paddingTop: '0.5rem' }}>Friends:</Age>
        <SmallField>{friends.join(', ')}</SmallField>
      </Row>
    </CardContainer>
  )
}

Gnome.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  friends: PropTypes.array,
  hair: PropTypes.string,
  height: PropTypes.number,
  professions: PropTypes.array,
  thumbnail: PropTypes.string,
  weight: PropTypes.number,
  refProp: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
}

Gnome.defaultProps = {
  name: '',
  age: 0,
  friends: [],
  hair: '',
  height: 0,
  professions: [],
  thumbnail: '',
  weight: 0,
  refProp: () => {},
}

export default Gnome
