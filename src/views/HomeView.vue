<template>
    <ShowCase/>

    <MenuComponent 
    :title="'Featured Products'"
    :navList="groups"/>
    <div class="container">
        <template v-for="(item, index) in categories" :key="index">
          <CategoryComponent :label="item.name" 
          :imgSrc="'http://localhost:3000/' + item.image" 
          :quantity="item.productCount"
          :bgColor="item.color"
          @click="goToCategory(item.id)"
          />
        </template>
    </div>
  
    <br>
    
    <div class="container">
      <template v-for="item in promotions" key="item">
        <PromotionComponent 
        :label="item.title" 
        :bgColor="item.color" 
        :imgSrc="'http://localhost:3000/' + item.image" 
        :buttonColor="item.buttonColor"
        :price="item.price"
        />
      </template>
    </div>
  
    <br>
  
    <MenuComponent
    :title="'Popular Products'"
    :navList="groups"
    @change-nav="changeProductGroup"
    />
  
    <div class="product-list">
      <template v-for="item in productsByGroup" key="item">
        <ProductComponent
        :productId="item.id"
        :productName="item.name"
        :imgPath="'http://localhost:3000/' + parseImages(item.image)[0]" 
        :rating="item.rating"
        :discountPercent="item.promotionAsPercentage"
        :price="item.price"
        :countSold="item.countSold"
        :instock="item.instock"
        @img-clicked="goToProduct(item.id)"
        />
      </template>
    </div>
  
    
  </template>
  
  <script >
  import CategoryComponent from '@/components/CategoryComponent.vue';
  import PromotionComponent from '@/components/PromotionComponent.vue';
  import MenuComponent from '@/components/MenuComponent.vue';
  
  import { useProductStore } from '@/stores/product';
  import { mapState } from 'pinia';
  import ProductComponent from '@/components/ProductComponent.vue';
  import ShowCase from '@/components/ShowCase.vue';
      
  export default {    
    setup() {
      const store = useProductStore();
      return {
        store
      }
    },
    
    components: {
      CategoryComponent,
      PromotionComponent,
      ProductComponent,
      MenuComponent,
      ShowCase
    },
  
    data() {
      return {
        currentGroupName: "",
        currCategoryGroup: "All",
        currProductGroup: "All",
      }
    },
    
    methods: {
      getQuantity() {
        return Math.floor(Math.random() * 100)
      },
  
      changeProductGroup(nav) {
        this.store.currProductGroup = nav 
        console.log("Product Group From App.vue")
        console.log(nav);
      },

      goToCategory(id) {
        this.$router.push(`/categories/${id}`);
      },

      goToProduct(id) {
        this.$router.push(`/products/${id}`);
      },

      parseImages(image) {
        return JSON.parse(image);
      },

    },
    computed: {
      ...mapState(useProductStore, {
        promotions: "promotions",
        products: "products",
        groups: "groups",
        categories: "categories",
  
        meatProducts(store) { 
          // results from getter work fine
          return store.getMeatProducts
        },
  
        // categories(store) {
        //   const cats = store.getCategoriesByGroup(this.currentGroupName)
        //   console.log("Categories by group name")
        //   console.log(cats)
        //   return cats
        // },
  
        productsByGroup(store) {
          return store.getProductsByGroup()
        },
  
        popularProducts(store) {
          return store.getPopularProducts
        },
  
      }),
  
    },
  
  
  
    async mounted() {
      await this.store.fetchCategories()
      await this.store.fetchPromotions()  
      await this.store.fetchProducts()
      await this.store.fetchGroups()
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
  
  .product-list {
    margin: 10px;
    display: grid;
    grid-template-rows: repeat(2, 424px);
    grid-template-columns: repeat(5, 300px);
    gap: 18px;
  }
    
  </style>
  
  