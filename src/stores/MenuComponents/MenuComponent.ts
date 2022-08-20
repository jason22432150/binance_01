import {defineStore} from 'pinia';

export const MenuComponent = defineStore('MenuComponent', {
  state: () => ({
    sites: [
      {
        text: '買幣',
        message: 'EUR',
        // message: 'red',
        arrow: true,
        menu: false,
        transform: 'translate3d(210px, 64px, 0px)',
      },
      {
        text: '市場',
        message: '',
        arrow: false,
        menu: false,
      },
      {
        text: '交易',
        message: '',
        arrow: true,
        menu: false,
        transform: 'translate3d(355px, 64px, 0px)',
      },
      {
        text: '衍生品',
        message: '',
        arrow: true,
        menu: false,
        transform: 'translate3d(355px, 64px, 0px)',
      },
      {
        text: '理財',
        message: '',
        arrow: true,
        menu: false,
        transform: 'translate3d(493px, 64px, 0px)',
      },
      {
        text: '金融業務',
        message: '',
        arrow: true,
        menu: false,
        transform: 'translate3d(555px, 64px, 0px)',
      },
      {
        text: 'NTF',
        message: 'NEW',
        // message: 'bg-red',
        arrow: false,
        menu: false,
      },
    ],
  }),
  getters: {
    getMenuComponent(state) {
      return state.sites;
    },
  },
})
