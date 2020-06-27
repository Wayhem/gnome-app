import { atom } from 'recoil'

const filteredLocationState = atom({
  key: 'filteredLocationState',
  default: '',
})

export default filteredLocationState
