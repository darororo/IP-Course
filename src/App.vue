<template>
  <div class="container">
      <template v-for="item in items" key="item">
        <CategoryComponent :label="item.label" 
        :imgSrc="item.imgSrc" 
        :quantity="item.quantity"
        :bgColor="item.bgColor"
        :radiusColor="item.radiusColor"
        />
      </template>
  </div>

  <div class="container">
    <template v-for="item in promotions" key="item">
      <PromotionComponent :label="item.label" :bgColor="item.bgColor" :imgSrc="item.imgSrc" :buttonColor="item.buttonColor"/>
    </template>
  </div>
  

</template>

<script >
import CategoryComponent from './components/CategoryComponent.vue';
import PromotionComponent from './components/PromotionComponent.vue';

export default {
  components: {
    CategoryComponent,
    PromotionComponent
  },
  methods: {
    getQuantity() {
      return Math.floor(Math.random() * 100)
    }
  },
  data() {
    return {
      items: [
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
          label: 'Snack' ,
          imgSrc: './src/assets/img/snack.png' ,
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
  }
}
</script>

<style scoped>
.container {
  display: inline-flex;
}

</style>

