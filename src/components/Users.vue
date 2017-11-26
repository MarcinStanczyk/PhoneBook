<template>

<div class="collumns">
<div class="left-side form column is-pulled-left is-12-touch is-12-desktop is-4-widescreen">
<AddNew :temp_search="temp_search" :users="users"/>
<Search :temp_search="temp_search" :users="users" v-on:change_temp_search="update_temp_search($event)"/>
</div>
<div class="list column is-12-touch is-12-desktop is-8-widescreen is-pulled-right box">

  <table>
   <thead>
    <tr>
      <th class="is-hidden-mobile">&nbsp;</th>
       <th>Imie</th>
       <th>Nazwisko</th>
       <th class="is-hidden-mobile">Telefon</th>
       <th class="is-hidden-mobile">Email</th>
       <th>&nbsp;</th>
    </tr>
   </thead>

   <tbody>
    <tr :class="{selected: user.truth}" v-for="user,key in temp_search">
       <td class="is-hidden-mobile"><input type="checkbox" class="toggle" v-model="user.truth"></td>
       <td>{{user.name}}</td>
       <td class="is-hidden-mobile">{{user.username}}</td>
       <td class="is-hidden-mobile">{{user.phone}}</td>
       <td>{{user.email}}</td>
       <td nowrap>
        <span class="icon has-text-info"><i class="fa fa-pencil-square-o clickable" @click="showUser(key)"></i></span>
         <span class="icon has-text-danger"><i class="fa fa-trash-o clickable"  @click="deleteUser($event)"></i></span>

      </td>
    </tr>
   </tbody>
  </table>
</div>

<ShowDetails :open_detail="showActive" @close_request='close'/>
</div>



</template>

<script>


import AddNew from '@/components/AddNew'
import Search from '@/components/Search'
import ShowDetails from '@/components/ShowDetails'

export default {
  name: 'Users',
  components: {
    Search,
    AddNew,
    ShowDetails

  },

  data() {
    return {
      showActive: '',
      users: [],
      temp_search: ''

    }
  },

  methods: {
update_temp_search: function(updated_search) {
  this.temp_search = updated_search;
},
    showUser(key){
      this.$children[2].pass_user = this.temp_search[key]
      this.showActive = 'is-active';
    },
    deleteUser(user) {
      this.temp_search.splice(this.temp_search.indexOf(user), 1);
      this.users = this.temp_search;
    },
    close() {
      this.showActive = ''
    }

  },

  created: function() {
    this.$http.get('https://jsonplaceholder.typicode.com/users')
    .then((resp) => {
       this.users = resp.data;
      this.users.sort((a,b) =>{
        if(a.name < b.name) {
          return -1;
        }
        else if(b.name < a.name) {
          return 1;
        }
      });
      this.temp_search = this.users;
    })
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.left-side {padding: 0px 0.5em 0 0;}
.list { overflow: hidden; overflow-x: auto;}
.list table { width: 100%; overflow: hidden; overflow-x: auto;}
.list table td, .list table th { padding: 10px;}
.list table td span { padding: 0px 20px;}
.list table th { background-color: #eeeeee;}
.selected {background-color: #eeeeee;}
</style>
