import { defineStore } from 'pinia';

export const MenuDerivativesList = defineStore('MenuDerivativesList', {
  state: () => ({
    sites: [
      {
        icon: '',
        title: '幣安合約概覽',
        expound: '查看全系列加密或幣衍生品工具',
        hot: false,
        mouse: false,
      },
      {
        icon: '',
        title: '盡責交易',
        expound: '了解您如何透過幣安合約實現盡責交易',
        hot: false,
        mouse: false,
      },
      {
        icon: '',
        title: 'U本位合約',
        expound: '多中以USDT或BUSD結算的永續或季度交割合約',
        hot: false,
        mouse: false,
      },
      {
        icon: '',
        title: '幣本合約',
        expound: '多種以數位貨幣結算的永續或者季度交割合約',
        hot: false,
        mouse: false,
      },
      {
        icon: '',
        title: '槓桿代幣',
        expound: '槓桿配置零爆倉，財富凝聚輕鬆享',
        hot: false,
        mouse: false,
      },
      {
        icon: '',
        title: '合約對戰',
        expound: '看5分鐘漲跌，贏取積分',
        hot: false,
        mouse: false,
      },
      {
        icon: '',
        title: '衍生品專區',
        expound: '量身打造的VIP專屬機構級服務',
        hot: false,
        mouse: false,
      },
    ],
  }),
  getters: {
    getDerivatives(state) {
      return state.sites;
    },
  },
});
