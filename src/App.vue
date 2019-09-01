<template>
  <div id="app">
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
  },
  beforeCreate: function () {
    if (!this.$session.exists()) {
      this.$router.push('/login')
    }else{
      this.$router.push('/inicio')

    }
  },
}

</script>

