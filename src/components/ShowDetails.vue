<template>


  <div class="modal" :class='open_detail'>
    <div class="modal-background" @click='close'></div>
    <div class="modal-content">


<div class="column box">

<table>
  <tr>
    <td>Imie : </td>
    <td>{{pass_user.name}}</td>
  </tr>
    <tr>
      <td>Nazwisko : </td>
      <td>{{pass_user.username}}</td>
    </tr>
      <tr>
        <td>Telefon : </td>
        <td>{{pass_user.phone}}</td>
      </tr>
        <tr>
          <td>Email : </td>
          <td>{{pass_user.email}}</td>
        </tr>


</table>







</div>


    </div>
    <button class="modal-close is-large" aria-label="close" @click='close'></button>
  </div>


</template>

<script>
export default {

  name: 'ShowDtails',
  props:['open_detail'],
  data() {
    return {
      pass_user:''

    }
  },

  methods: {
    close() {
      this.$emit('close_request')
    }


  },

}

</script>


<style scoped>
table td {width: 50%; text-align: left; padding: 0.5em 1em}
table td:first-child { text-align: right; font-weight: bold;;}

</style>
