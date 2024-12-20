<template>
  <div class="body">
      <div class="header-menu">
        <template v-for="x in 3">
          <router-link :to="`/page/${x}`"
          @click="passMessage(x)"
          >
            Page {{ x }}
          </router-link>
        </template>
      </div>


    <section class="content">
        <div class="section-menu">
          <template v-for="x in 4">
            <router-link :to="`/page/${$route.params.pageNumber}/section/${x}`">Section {{ x }}</router-link>
          </template>
        </div>

        <div class="message-container">
          <RouterView/>

          <div class="message-section">
            <p>Message</p>
            <input type="text" v-model="message">
          </div>
        </div>
    </section>

    <footer>
      (˶˃ ᵕ ˂˶) .ᐟ.ᐟ
    </footer>

  </div>
</template>

<script>
import { useMessageStore } from './store/messageStore';

export default {
  setup() {
    const store = useMessageStore();

    return {
      store,
    }
  },
  data() {
    return {
      message: "",
    }
  },

  methods: {
    passMessage(toPage) {
      this.store.lastPage = this.curPage;
      this.store.pages[this.curPage] = this.message; // Map page number to message
      this.message = "";   // reset message input
    },
  },
  computed: {
    curPage() {
      return this.$route.params.pageNumber
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}

.body {
  display: flex;
  column-gap: 40px;
  width: 50%;
  flex-direction: column;
  background-color: gainsboro;
  
}

.header-menu {
  border: 1px solid black;
  display: flex;
  justify-content: flex-end;
  background-color: palevioletred;
}

.header-menu > a {
  border: 1px solid black;
  padding: 4px;
}

.header-menu > a.router-link-active {
  background-color: green;
}

.section-menu {
  display: flex;
  flex-direction: column;
  background-color: palegoldenrod;

}

.section-menu > a {
  border: 1px solid black;
  padding: 12px;
  width: fit-content;
  background-color: #fff;
}

.section-menu >  a.router-link-active {
  border: 1px solid black;
  background-color: plum;
}

.content {
  display: flex;
  flex-direction: row;
  column-gap: 50px;
}


.message-section {
  display: flex;
  align-items: center;
  column-gap: 10px;
}

.message-container {
  width: 60%;
}

.message-section > input {
  height: 80%;
}

footer {
  display: flex;
  justify-content: center;
  border: 1px solid black;
  padding: 10px;
  background-color: orange;
}

</style>