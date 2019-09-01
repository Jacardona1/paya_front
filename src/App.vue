<template>
  <div id="app">
<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link>-->
<!--    </div>-->
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>
<script>

  const default_layout = "Dashboard";

export default {
  computed: {
    layout(){
     return  "layout-"+(this.$route.meta.layout || default_layout);

    }
  }
}

</script>

