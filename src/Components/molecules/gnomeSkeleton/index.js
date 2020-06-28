import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton'
import { CardContainer, Row, ImageRow } from './styled'

const Gnome = () => (
  <CardContainer>
    <Row>
      <Skeleton variant='text' width={60} />
      <Skeleton variant='text' width={60} />
    </Row>
    <ImageRow>
      <Skeleton variant='circle' width={80} height={80} />
    </ImageRow>
    <Row>
      <Skeleton variant='text' width={60} />
      <Skeleton variant='text' width={60} />
      <Skeleton variant='text' width={60} />
    </Row>
    <Row style={{ flexDirection: 'column' }}>
      <Skeleton variant='rect' width={288} height={55} />
    </Row>
    <Row style={{ flexDirection: 'column' }}>
      <Skeleton variant='rect' width={288} height={55} />
    </Row>
  </CardContainer>
)

export default Gnome
