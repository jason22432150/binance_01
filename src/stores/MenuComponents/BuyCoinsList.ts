import { defineStore } from 'pinia';

export const BuyCoinsList = defineStore('BuyCoinsList', {
  state: () => ({
    sites: [
      {
        icon: '',
        title: '銀行儲值',
        expound: '透過SEPA或卡片儲值EUR',
        hot: true,
      },
      {
        icon: '',
        title: '信用卡買幣',
        expound: '以卡片購買加密貨幣',
        hot: true,
      },
      {
        icon: '',
        title: '現金餘額',
        expound: 'EUR餘額一鍵買幣',
        hot: false,
      },
      {
        icon: '',
        title: 'C2C買幣',
        expound: '快速轉帳並支持100多種支付方式',
        hot: false,
      },
    ],
  }),
  getters: {
    getBuyCoinsList(state) {
      return state.sites;
    },
  },
});
