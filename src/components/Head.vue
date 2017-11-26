<template>
  <nav class="breadcrumb is-right collumns" aria-label="breadcrumbs">
    <ul class="column">
      <li><router-link to="/">Aplikacja</router-link></li>
      <li><router-link to="/categories">{{msgg}}</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Head',
  props: {
  msgg: {
    default: 'Kandydat',
    type: String
  }
},
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
