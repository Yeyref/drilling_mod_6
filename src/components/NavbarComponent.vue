<template>
    <b-navbar fixed toggleable type="dark" variant="dark">
      <b-navbar-brand>Games Opinion</b-navbar-brand>
  
      <b-navbar-toggle target="navbar-toggle-collapse">
        <template #default="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
          <b-icon v-else icon="chevron-bar-down"></b-icon>
        </template>
      </b-navbar-toggle>
  
      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/">Home</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </template>

<script>
    export default {
      name: 'NavbarComponent'
    }
</script>

<style scoped>

</style>