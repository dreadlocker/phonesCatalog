<template>
<div id="app">
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/store">Catalog</router-link> |
    <router-link to="/sortedByLikes">Sorted by Likes</router-link> |
    <router-link to="/contactUs">Contact us</router-link>
  </div>
  <router-view />
</div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding-bottom: 1rem;
  user-select: none;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
