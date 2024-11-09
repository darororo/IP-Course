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

export default {
  components: {
    CategoryComponent,
    PromotionComponent
  },
  methods: {
    getQuantity() {
      return Math.floor(Math.random() * 100)
    },
    fetchCategories() {
      axios.get("http://localhost:3000/api/categories").then(res => {
        this.categories = res.data;
      })
    },
    fetchPromotions() {
      axios.get("http://localhost:3000/api/promotions").then(res => {
        this.promotions = res.data;
      })
    }
  },
  data() {
    return {

      // TP2 : Step 1: Create local variables to represent component data
      categories: [
        {
          label: 'Burger',
          imgSrc: './src/assets/img/burger.png',
          quantity: this.getQuantity(),
          bgColor: "#F2FCE4",
          radiusColor: "#81B13D",
        },
        {
          label: 'Peach',
          imgSrc: './src/assets/img/peach.png',
          quantity: this.getQuantity(),
          bgColor: '#FFFCEB',
          radiusColor: '#f58d42'
        },
        {
          label: 'Organic Kiwi',
          imgSrc: './src/assets/img/kiwi.png',
          quantity: this.getQuantity(),
          bgColor: '#F2FCE4',
          radiusColor: '#81B13D'
        },
        {
          label: 'Red Apple', 
          imgSrc: './src/assets/img/apple.png' ,
          quantity: this.getQuantity(),
          bgColor: '#FEEFEA',
          radiusColor: '#f55742',
        },
        {
          label: 'Snack' ,
          imgSrc: './src/assets/img/snack.png' ,
          quantity: this.getQuantity(),
          bgColor: '#FFF3EB',
          radiusColor: '#f55742',
        },
        {
          label: 'Black Plum', 
          imgSrc: './src/assets/img/plum.png' ,
          quantity: this.getQuantity(),
          bgColor: '#FFF3FF',
          radiusColor: '#AAAAAA',
        },
        {
          label: 'Vegetables' ,
          imgSrc: './src/assets/img/vegetable.png' ,
          quantity: this.getQuantity(),
          bgColor: '#F2FCE4',
          radiusColor: '#81B13D',
        },
        {
          label: 'Headphone' ,
          imgSrc: './src/assets/img/headphone.png' ,
          quantity: this.getQuantity(),
          bgColor: '#FFFCEB',
          radiusColor: '#AAAAAA',
        },
        {
          label: 'Cake & Milk' ,
          imgSrc: './src/assets/img/cake.png' ,
          quantity: this.getQuantity(),
          bgColor: '#FFF3EB',
          radiusColor: '#f55742',
        },
        {
          label: 'Orange', 
          imgSrc: './src/assets/img/orange.png' ,
          quantity: this.getQuantity(),
          bgColor: '#FFF3FF',
          radiusColor: '#f55742',
        },
      ],
      promotions: [
        {
          label: 'Everyday Fresh & Clean with Our Products',
          imgSrc: './src/assets/img/onion.png',
          bgColor: '#F0E8D5',
          buttonColor: '#3BB77E',
        },
        {
          label: 'Make your Breakfast Healthy and Easy',
          imgSrc: './src/assets/img/strawberry.png',
          bgColor: '#F3E8E8',
          buttonColor: '#3BB77E',
        },
        {
          label: 'The Best Organic Products Online',
          imgSrc: './src/assets/img/fruitbasket.png',
          bgColor: '#E7EAF3',
          buttonColor: '#FDC040',
        },
      ]
    }
  },
  mounted() {
    this.fetchCategories();
    this.fetchPromotions();
  }
}
</script>

<style scoped>
.container {
  display: inline-flex;
}

</style>

