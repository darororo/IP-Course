<template>
  <NavComponent/>
  <RouterView/>
</template>

<script>
import NavComponent from './components/Navs/NavComponent.vue';
import { useProductStore } from './stores/product';

export default {
  setup() {
    const store = useProductStore();

    return {
      store,
    }
  },
  components: {
     NavComponent,
  },

  async mounted() {
      await this.store.fetchCategories()
      await this.store.fetchPromotions()  
      await this.store.fetchProducts()
      await this.store.fetchGroups()
    }, 
}
</script>
