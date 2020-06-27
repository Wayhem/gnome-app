import React from 'react'
import { Container, Pic, Name } from './styled'
import { getProfile } from './constants'

const { name, src } = getProfile()

const Profile = () => (
  <Container>
    <Pic src={src} />
    <Name>{name}</Name>
  </Container>
)

export default Profile
