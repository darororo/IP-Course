<script>
import ShopButton from './ShopButton.vue';

export default {
    components: {
        ShopButton
    },
    props: {
        imgSrc: String,
        label: String,
        bgColor: String,
        radiusColor: String,
        buttonColor: String,
    },
    methods: {
      shopNow() {
        alert("Let's shop " + this.label);
      },
    }
}
</script>

<template>
  <div class="container">
    <div class="inner-container">
      <div class="label quicksand-regular">
            {{ label }}
      </div>
      <div class="button">
              <ShopButton @click="shopNow" :bgColor="buttonColor"/>
      </div>
    </div>
    <img :src="imgSrc" alt="">
  </div>
</template>

<style scoped>
  .container {
    background-color: v-bind(bgColor);
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 512px;
    height: 300px;
    border-radius: 10px;
    border: 1px solid v-bind(radiusColor);
    margin: 8px;
  }

  .inner-container {
    width: inherit;
    height: 160px;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-between;
    margin-left: 30px;
  }

  .container .label {
    font-size: 28px;
    color: #253D4E;
  }

  .container img {
    width: 240px;
    height: 240px;
    align-self: end;
  }

  .button {
    align-self: self-start;
  }
</style>