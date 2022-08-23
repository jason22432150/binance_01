import { defineStore } from 'pinia';

export const MenuTradeList = defineStore('MenuTradeList', {
  state: () => ({
    sites: [
      {
        icon: '',
        title: '幣安兌換',
        expound: '幣幣閃兌，一鍵完成交易',
        hot: false,
        mouse: false,
      },
      {
        icon: '',
        title: '現貨',
        expound: '使用進階工具交易加密或幣',
        hot: false,
        mouse: false,
      },
      {
        icon: '',
        title: '槓桿交易',
        expound: '借幣交易，放大收益',
        hot: false,
        mouse: false,
      },
      {
        icon: '',
        title: '買幣',
        expound: '快速轉帳並支持100多種交易方式',
        hot: false,
        mouse: false,
      },
      {
        icon: '',
        title: '策略交易',
        expound: '項專業交易依樣輕鬆交易',
        hot: false,
        mouse: false,
      },
      {
        icon: '',
        title: '交易挖礦',
        expound: '交易即挖礦，穩賺BNB',
        hot: false,
        mouse: false,
      },
      {
        icon: '',
        title: '粉絲代幣',
        expound: '升級您的粉絲體驗',
        hot: false,
        mouse: false,
      },
      {
        icon: '',
        title: '幣安場外交易',
        expound: '場為交易流動性與交易執行服務',
        hot: false,
        mouse: false,
      },
    ],
  }),
  getters: {
    getMenuTradeList(state){
      return state.sites;
    }
  }
});
