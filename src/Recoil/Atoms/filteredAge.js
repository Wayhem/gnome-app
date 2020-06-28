import { atom } from 'recoil'

const filteredAgeState = atom({
  key: 'filteredAgeState',
  default: [],
})

export default filteredAgeState
