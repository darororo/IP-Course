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
          img: './src/assets/img/burger.png',
          quantity: this.getQuantity(),
          bgColor: "background: #F2FCE4",
          radiusColor: "#81B13D",
        }
      ]
    }
  }
}
</script>

<template>
  <div class="container">
    <CategoryComponent :label="'Burger'" 
      :imgSrc="'./src/assets/img/burger.png'" 
      :quantity="getQuantity()"
      :bgColor="'#F2FCE4'"
      :radiusColor="'#81B13D'"
    />
    <CategoryComponent :label="'Peach'" 
      :imgSrc="'./src/assets/img/peach.png'" 
      :quantity="getQuantity()"
      :bgColor="'#FFFCEB'"
      :radiusColor="'#f58d42'"
    />
    <CategoryComponent :label="'Organic Kiwi'" 
      :imgSrc="'./src/assets/img/kiwi.png'" 
      :quantity="getQuantity()"
      :bgColor="'#ECFFEC'"
      :radiusColor="'#81B13D'"
    />
    <CategoryComponent :label="'Red Apple'" 
      :imgSrc="'./src/assets/img/apple.png'" 
      :quantity="getQuantity()"
      :bgColor="'#FEEFEA'"
      :radiusColor="'#f55742'"
    />
    <CategoryComponent :label="'Snack'" 
      :imgSrc="'./src/assets/img/snack.png'" 
      :quantity="getQuantity()"
      :bgColor="'#FFF3EB'"
      :radiusColor="'#f55742'"
    />
    <CategoryComponent :label="'Black Plum'" 
      :imgSrc="'./src/assets/img/plum.png'" 
      :quantity="getQuantity()"
      :bgColor="'#FFF3FF'"
      :radiusColor="'#AAAAAA'"
    />
    <CategoryComponent :label="'Vegetable'" 
      :imgSrc="'./src/assets/img/vegetable.png'" 
      :quantity="getQuantity()"
      :bgColor="'#F2FCE4'"
      :radiusColor="'#81B13D'"
    />
    <CategoryComponent :label="'Headphone'" 
      :imgSrc="'./src/assets/img/headphone.png'" 
      :quantity="getQuantity()"
      :bgColor="'#FFFCEB'"
      :radiusColor="'#AAAAAA'"
    />
    <CategoryComponent :label="'Cake & Milk'" 
      :imgSrc="'./src/assets/img/cake.png'" 
      :quantity="getQuantity()"
      :bgColor="'#F2FCE4'"
      :radiusColor="'#81B13D'"
    />
    <CategoryComponent :label="'Orange'" 
      :imgSrc="'./src/assets/img/orange.png'" 
      :quantity="getQuantity()"
      :bgColor="'#FFF3FF'"
      :radiusColor="'#AAAAAA'"
    />

  </div>
  
</template>

<style scoped>
.container {
  display: flex;
}

</style>

