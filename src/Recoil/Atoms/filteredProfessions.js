import { atom } from 'recoil'

const filteredProfessionsState = atom({
  key: 'filteredProfessionsState',
  default: [],
})

export default filteredProfessionsState
