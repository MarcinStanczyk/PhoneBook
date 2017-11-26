<template>





<div class="form column  is-pulled-left is-12-touch is-6-desktop  is-12-widescreen box">
<h3 class="title is-5 has-text-left">Dodaj Wpis</h3>
      <form @submit="addUser" novalidate>


    <div class="field is-horizontal">
      <div class="field-label is-small">
    <label class="label">First Name</label>
  </div>
   <div class="field-body">
     <div class="field">
    <div class="control has-icons-left  has-icons-right">
      <input v-model="name" class="input"   :class="[validate.name == true ? 'is-success' : '', validate.name == false ? 'is-danger' : '']" type="text" placeholder="Wpisz Imię">

      <span class="icon  is-left">
        <i class="fa fa-user"></i>
      </span>

      <span class="icon  is-right">
        <i class="fa "  :class="{'fa-check': validate.name}"></i>
      </span>
    </div>
    <p class="help is-danger" v-if="msg.name" >{{msg.name}}</p>
  </div>
  </div>
  </div>

<div class="field is-horizontal">

    <div class="field-label is-small">
    <label class="label">Last Name</label>
  </div>
  <div class="field-body">
    <div class="field">
    <div class="control has-icons-left has-icons-right">
      <input v-model="username"  class="input"   :class="[validate.surname == true ? 'is-success' : '', validate.surname == false ? 'is-danger' : '']" type="text" placeholder="Wpisz Nazwisko" value="">
      <span class="icon  is-left">
        <i class="fa fa-user"></i>
      </span>
      <span class="icon  is-right">
        <i class="fa"  :class="{'fa-check': validate.surname}"></i>
      </span>
    </div>
    <p class="help is-danger" v-if="msg.surname" >{{msg.surname}}</p>
  </div>
</div>
</div>


<div class="field is-horizontal">

    <div class="field-label is-small">
    <label class="label">Telephon</label>
  </div>
  <div class="field-body">
    <div class="field">
    <div class="control has-icons-left has-icons-right">
      <input v-model="phone"  class="input"   :class="[validate.phone == true ? 'is-success' : '', validate.phone == false ? 'is-danger' : '']"  type="text" placeholder="Wpisz telefon" value="">
      <span class="icon  is-left">
        <i class="fa fa-phone"></i>
      </span>
      <span class="icon  is-right">
        <i class="fa"  :class="{'fa-check': validate.phone}"></i>
      </span>
    </div>
    <p class="help is-danger" v-if="msg.phone" >{{msg.phone}}</p>
  </div>
</div>
</div>


<div class="field is-horizontal">
  <div class="field-label is-small">
    <label class="label">Email</label>
  </div>
  <div class="field-body">
    <div class="field">
    <div class="control has-icons-left has-icons-right">
      <input v-model="email" class="input"  :class="[validate.email == true ? 'is-success' : '', validate.email == false ? 'is-danger' : '']"  type="email" placeholder="Email" value="">
      <span class="icon  is-left">
        <i class="fa fa-envelope-o "></i>
      </span>
      <span class="icon  is-right">
        <i class="fa" :class="{'fa-check': validate.email}"></i>
      </span>
    </div>
    <p class="help is-danger" v-if="msg.email" >{{msg.email}}</p>
  </div>
    </div>
</div>


  <div class="field is-grouped  is-horizontal">
    <div class="field-label">
    </div>
    <div class="field-body">
      <div class="field">
    <div class="control">
      <button class="button is-primary " :class="[validate_pass == 'zero' ? 'is-static' : '']">Dodaj kontakt</button>
    </div>
  </div>  </div>
</div>


  </form>
</div>







</template>

<script>
export default {
  name: 'AddNew',
  props:['temp_search', 'users'],
  data() {
    return {
          name:'',
          username:'',
          phone:'',
          email:'',
          msg: {},
          validate: {},
          validate_pass:'zero',

    }
  },
  watch: {
    name(value) {
      this.name = value;
      if (value != "") {
      this.check_name(value);
      }
    },
    username(value) {
      this.username = value;
      if (value != "") {
      this.check_surname(value);
      }
    },
    phone(value) {
      this.phone = value;
      if (value != "") {
      this.check_phone(value);
      }
    },
    email(value) {
      this.email = value;
      if (value != "") {
      this.check_email(value);
    }
    }

  },
  methods: {
    addUser:  function(e) {
      this.users.push({
        name: this.name,
        username: this.username,
        phone: this.phone,
        email: this.email,
      });
     this.users.sort( function (a,b){
       if(a.name < b.name) {
         return -1;
       }
       else if(b.name < a.name) {
         return 1;
       }
     });
     this.temp_search = this.users;

     this.name = "";
     this.validate.name = "zero";
     this.username = "";
     this.validate.surname = "zero";
     this.phone = "";
     this.validate.phone = "zero";
     this.email = "";
     this.validate.email = "zero";
     this.validate_pass = "zero";
      e.preventDefault();
      },

    validate_test() {
      if ((this.validate.name == true) && (this.validate.surname == true) && (this.validate.phone == true) && (this.validate.email == true)) {
        this.validate_pass = true;
      }
      else {
        this.validate_pass = 'zero';
      }
    },
		check_email(value){
			if (/^\w+([\.-]?\ w+)*@\w+([\.-]?\ w+)*(\.\w{2,3})+$/.test(value))
			{
				this.msg.email = '';
        this.validate.email = true;
			}else {
				this.msg.email = 'Adres email wydaje się nie poprawny';
        this.validate.email = false;
			}
      this.validate_test();
		},

		check_name(value){
			if (value.length > 2)
			{
				this.msg.name = '';
        this.validate.name = true;
			}else {
      this.msg.name = 'Podaj pełne imię';
      this.validate.name = false;
    }
      this.validate_test();
		},
		check_surname(value){
			if (value.length > 2)
			{
				this.msg.surname = '';
        this.validate.surname = true;
		}else {
				this.msg.surname = 'Podaj pełne nazwisko';
        this.validate.surname = false;
			}
      this.validate_test();
		},
		check_phone(value){
			if ((value.length > 5) && (/\w([0-9]{5,})/.test(value)))
			{
				this.msg.phone = '';
        this.validate.phone = true;
			}else {
      this.msg.phone = 'Podaj poprawny numer telefonu';
      this.validate.phone = false;
    }
      this.validate_test();
		}


  },

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.select {width:100%;}
.select select {width:100%;}

h3 { padding: 10px; background-color: #eeeeee;}

</style>
