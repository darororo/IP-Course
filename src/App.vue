<template>
  <div class="body">
      <div class="header-menu">
        <template v-for="x in 3">
          <router-link :to="`/page/${x}`">Page {{ x }}</router-link>
        </template>
      </div>


    <section class="content">
        <div class="section-menu">
          <template v-for="x in 4">
            <router-link :to="`/page/${$route.params.pageNumber}/section/${x}`">Section {{ x }}</router-link>
          </template>
        </div>

        <RouterView/>

    </section>

    <footer>
      (˶˃ ᵕ ˂˶) .ᐟ.ᐟ
    </footer>

  </div>


</template>

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

.header-menu > .menu {
  display: flex;
  column-gap: 40px;
  
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
  padding: 4px;
}

.section-menu > a.router-link-active {
  border: 1px solid black;
  padding: 4px;
  background-color: plum;
}

.content {
  display: flex;
  column-gap: 50px;
}

footer {
  display: flex;
  justify-content: center;
  border: 1px solid black;
  padding: 10px;
  background-color: orange;
}

</style>