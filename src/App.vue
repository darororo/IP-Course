<template>
  <div class="container">
      <template v-for="item in categories" key="item">
        <CategoryComponent :label="item.name" 
        :imgSrc="item.image" 
        :quantity="item.productCount"
        :bgColor="item.color"
        />
      </template>
  </div>

  <div class="container">
    <template v-for="item in promotions" key="item">
      <PromotionComponent 
      :label="item.title" 
      :bgColor="item.color" 
      :imgSrc="item.image" 
      :buttonColor="item.buttonColor"
      />
    </template>
  </div>
  
</template>

<script >
import CategoryComponent from './components/CategoryComponent.vue';
import PromotionComponent from './components/PromotionComponent.vue';

import axios from 'axios';
import { useProductStore } from './stores/product';
import { mapState } from 'pinia';

export default {
  setup() {
    const store = useProductStore()
    return {
      store
    }
  },
  components: {
    CategoryComponent,
    PromotionComponent
  },

  methods: {
    getQuantity() {
      return Math.floor(Math.random() * 100)
    },
    
  },
  data() {
    return {
      currentGroupName: "Milks & Diaries"
    }
  },
  
  computed: {
    ...mapState(useProductStore, {
      promotions: "promotions",
      products: "products",
      groups: "groups",

      categories(store) {
        const cats = store.getCategoriesByGroup(this.currentGroupName)
        console.log("Categories by group name")
        console.log(cats)
        return cats
      },
      
      popularProducts(store) {
        const products = store.getPopularProducts()
        console.log("Popular products")
        console.log(products)
        return products
      }
    }),
  },

  async mounted() {
    await this.store.fetchCategories()
    await this.store.fetchPromotions()  
    await this.store.fetchProducts()
    await this.store.fetchGroups()
  }, 
}
</script>

<style scoped>
.container {
  display: inline-flex;
}

</style>

