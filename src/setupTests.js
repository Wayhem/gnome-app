import '@testing-library/jest-dom/extend-expect'
import axios from 'axios'
import { townsData } from 'Recoil/Selectors/dataMock'

jest.mock('axios')

const resp = { data: townsData }
axios.get.mockResolvedValue(resp)
