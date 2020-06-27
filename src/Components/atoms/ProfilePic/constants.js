import Hawk from 'Assets/Images/3e9957afe36f31ebb249691f0a9e3098.jpg'
import Uravity from 'Assets/Images/9f66e5bc9742c03206b48dfad838849a.jpg'
import Spiderman from 'Assets/Images/39.png'
import Creati from 'Assets/Images/49095c3ab6870e315be99a7548ae25e7.jpg'
import Batman from 'Assets/Images/NicePng_batman-png_25335.png'
import Wonderwoman from 'Assets/Images/wonderwoman_2017.jpg'

const profiles = [
  {
    name: 'Hawk',
    src: Hawk,
  },
  {
    name: 'Uravity',
    src: Uravity,
  },
  {
    name: 'Spiderman',
    src: Spiderman,
  },
  {
    name: 'Creati',
    src: Creati,
  },
  {
    name: 'Batman',
    src: Batman,
  },
  {
    name: 'Wonderwoman',
    src: Wonderwoman,
  },
]

export const getProfile = () => {
  const random = Math.floor(Math.random() * profiles.length)

  return profiles[random]
}
