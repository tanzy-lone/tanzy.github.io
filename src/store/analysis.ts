import { defineStore } from 'pinia'
import {
  fetchCategoryGoodsCount,
  fetchCategoryGoodsSale,
  fetchAddressGoodsSale,
  fetchCategoryGoodsFavor
} from '@/service/main/analysis/index'

const analysisStore = defineStore('analysisStore', {
  state: () => ({
    categoryCount: [] as any,
    categoryGoodsSale: [],
    categoryFavor: [],
    categoryAddress: []
  }),
  getters: {},
  actions: {
    async categoryEchartsAsync() {
      fetchCategoryGoodsCount().then((res) => {
        this.categoryCount = res.data
      })
      fetchCategoryGoodsSale().then((res) => {
        this.categoryGoodsSale = res.data
      })
      fetchCategoryGoodsFavor().then((res) => {
        this.categoryFavor = res.data
      })
      fetchAddressGoodsSale().then((res) => {
        this.categoryAddress = res.data
      })
    }
  }
})

export default analysisStore
