import axios from 'axios'

export const getTownData = () => axios.get('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json')
