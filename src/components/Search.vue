<template>





<div class="search column is-pulled-left is-pulled-right   is-12-touch is-6-desktop is-12-widescreen box">
<h3 class="title is-5 has-text-left">Wyszukaj</h3>



    <div class="field is-horizontal">
   <div class="field-body">
     <div class="field">
    <div class="control has-icons-left  has-icons-right">
      <input v-model="search" class="input"   type="text" placeholder="Znajdź">

      <span class="icon  is-left">
        <i class="fa Example of search fa-search "></i>
      </span>


    </div>
  </div>
  </div>
  </div>


</div>







</template>

<script>
export default {
  name: 'Search',
  props:['temp_search', 'users'],
  data() {
    return {
          search:'',
          changed_temp_search: 'this.temp_search'

    }
  },
  watch: {
    search(){
      if (this.search.length > 0) {
      this.changed_temp_search = this.users.filter( (item) => {
        return Object.keys(item).some((key)=>{
          let string = String(item[key])
          return string.toLowerCase().indexOf(this.search.toLowerCase())>-1
        })

        });

      }
      else {
        this.changed_temp_search = this.users;
      }
      this.$emit('change_temp_search', this.changed_temp_search);
    }
  },
  methods: {

  },

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


h3 { padding: 10px; background-color: #eeeeee;}

</style>
