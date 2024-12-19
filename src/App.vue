<template>
  <div class="body">
      <div class="header-menu">
        <router-link to="/page/1">page 1</router-link>
        <router-link to="/page/2">page 2</router-link>
        <router-link to="/page/3">page 3</router-link>
      </div>


    <section class="content">
        <div class="section-menu">
            <router-link :to="`/page/${$route.params.pageNumber}/section/1`">Section 1</router-link>
            <router-link :to="`/page/${$route.params.pageNumber}/section/2`">Section 2</router-link>
            <router-link :to="`/page/${$route.params.pageNumber}/section/3`">Section 3</router-link>
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