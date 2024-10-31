<script >
import CategoryComponent from './components/CategoryComponent.vue';

export default {
  components: {
    CategoryComponent
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
      ]
    }
  }
}
</script>

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
</template>

<style scoped>
.container {
  display: flex;
}

</style>

