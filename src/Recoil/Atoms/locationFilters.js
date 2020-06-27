import { atom } from 'recoil'

const locationFilterState = atom({
  key: 'locationFilterState',
  default: [],
})

export default locationFilterState
