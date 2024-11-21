import { defineStore } from 'pinia'
import axios from "axios"

export const useProductStore = defineStore('product', {
    state: () => ({
         groups: [],
         promotions: [],
         categories: [],
         products: []
    }),
    getters: {},
    actions: {
     async fetchCategories() {
          await axios.get("http://localhost:3000/api/categories").then(res => {
            this.categories = res.data;
            
          })
     },

     async fetchPromotions() {
          await axios.get("http://localhost:3000/api/promotions").then(res => {
          this.promotions = res.data;
     })
     },

     async fetchProducts() {
          await axios.get("http://localhost:3000/api/products").then(res => {
          this.products = res.data;
     })
     },

     async fetchGroups() {
          await axios.get("http://localhost:3000/api/groups").then(res => {
          this.groups = res.data;
     })
     }
    },
  })    
