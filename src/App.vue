<template>
  <header>
    <div class="menu">
      <router-link to="/page/1">page 1</router-link>
      <router-link to="/page/2">page 2</router-link>
      <router-link to="/page/3">page 3</router-link>
    </div>
  </header>

  <RouterView/>


</template>

<style>
a {
  text-decoration: none;
  color: black;
}

header > .menu {
  display: flex;
  column-gap: 40px;
  margin-bottom: 20px;
}

.body {
  display: flex;
  column-gap: 40px;
}

.section-menu {
  display: flex;
  flex-direction: column;
}

</style>