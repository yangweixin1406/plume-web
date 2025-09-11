import {
  setStore,
  getStore
} from '@/util/store'

const common = {
  state: {
    deviceCode: getStore({ name: 'deviceCode' }),
    showLogin: false,
    serverPhone: getStore({ name: 'serverPhone' }),
    customerPhone: getStore({ name: 'customerPhone' })
  },
  mutations: {
    SET_DEVICE_CODE: (state, deviceCode) => {
      state.deviceCode = deviceCode
      setStore({
        name: 'deviceCode',
        content: state.deviceCode
      })
    },
    SET_IS_SHOW_LOGIN: (state, flag) => {
      state.showLogin = flag
    },
    SET_SERVER_PHONE: (state, phone) => {
      state.serverPhone = phone
    },
    SET_CUSTOMER_PHONE: (state, phone) => {
      state.customerPhone = phone
    }
  }
}

export default common