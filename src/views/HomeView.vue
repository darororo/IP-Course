<template>

    <MenuComponent 
    :title="'Featured Products'"
    :navList="groups"/>
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
        :productName="item.name"
        :imgPath="item.image"
        :rating="item.rating"
        :discountPercent="item.promotionAsPercentage"
        :price="item.price"
        :countSold="item.countSold"
        :instock="item.instock"
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
      MenuComponent
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
  
  