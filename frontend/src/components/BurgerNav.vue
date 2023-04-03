<template>
  <div class="navBar"><ul class="navUl">
        <li><router-link class="navBarLink" to="/">Home</router-link></li>
        <li><router-link class="navBarLink" to="/menu">CARTE</router-link></li>
        <li><router-link class="navBarLink" to="/admin/dashboard">Admin</router-link></li>
        <li><router-link class="navBarLink" to="/">Home</router-link></li>
        <li><router-link class="navBarLink" to="/menu">CARTE</router-link></li>
        <li><router-link class="navBarLink" to="/admin/dashboard">Admin</router-link></li>
      </ul>
  </div>
  <label>
    <input type="checkbox" v-model="menuIsActive">
    <span class="menu">
      <!-- <span class="hamburger"></span> -->
      <img id="logo" src="@/assets/icons/logo.svg">
    </span>
  </label>

    <div @click="navigation" @wheel.prevent @touchmove.prevent @scroll.prevent :class="{'showNavLink' : menuIsActive}" class="navLink">
      <ul class="ul-link">
        <li><router-link class="link" to="/">Home</router-link></li>
        <li><router-link class="link" to="/menu">LA CARTE</router-link></li>
        <li><router-link class="link" to="/admin/dashboard">Admin</router-link></li>
        <li><router-link class="link" to="/login">Login</router-link></li>
        <li><router-link class="link" to="/signup">Signup</router-link></li>
        <li><router-link class="link" to="/about">About</router-link></li>
      </ul>
    </div>

  
</template>
  
<script>
export default {
  name: "BurgerNav",
  data() {
    return {
      menuIsActive: false,

    }
  },

  computed: {
  },


  methods: {
    navigation(){
      this.menuIsActive = false
    }
  }
}
</script>
  
<style scoped>

::-webkit-scrollbar {
  height: 0px;
  background-color: #00000000;
}


::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 255, 0);
  height: 0;
}


::webkit-scrollbar-corner{
  background-color: rgba(0, 0, 0, 0);
  height: 0;
}
::-webkit-scrollbar-thumb:hover {
  background-color: rgba(0, 0, 0, 0);
  height: 0px;
}


#logo {
  width: 128px;
    position: fixed;
    top: 50px;
    right: -42px;
    translate: -50% -50%;
    transform: rotate(16deg);
}

.navBar {
  z-index: 9;
    width: 100%;
    position: fixed;
    top: 0px;
    height: 110px;
    background-image: linear-gradient(180deg, #000000 -30%, #21212100);
    display: flex;
    /* TEST */
    overflow-x: scroll;
}

.navUl {
  display: flex;
    width: 66%;
    font-family: 'Subtlecurves';
    font-size: 1.3em;
    list-style: none;
    transition: .3s 0.1s ease-in-out;
    flex-direction: row;
    align-items: center;
    padding: 0;
    margin: 0;
    overflow: scroll;
    padding: 3% 3% 3% 5%;

}

.navBarLink{
  padding-right: 7px;
  padding-left: 7px;
  color: white;
  text-decoration: none;
  user-select: none;
}

.navUl:last-child{
  padding-right: 50px;
}

label .menu {
  position: fixed;
  right: 35px;
  top: 16px;
  z-index: 100;
  width: 104px;
  height: 69px;
  background: #1c1c1c;
  border-radius: 28px 28px 28px 28px;
  transition: opacity 0.3s ease;
  transition: 0.4s ease-in-out;
  box-shadow: -1px 1px 9px 0px #0000007d, 0 0 0 0 #000;
  cursor: pointer;
}

label .hamburger {
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50ù -50%;
  translate: -50%;
  width: 31px;
  height: 7px;
  background: #1c1c1c;
  display: block;
  transform-origin: center;
  transition: .5s ease-in-out;
  border-radius: 12px;
}

label .hamburger:after,
label .hamburger:before {
  -webkit-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  background: #1c1c1c;
  border-radius: 12px;
}

label .hamburger:before {
  top: -10px;
}

label .hamburger:after {
  bottom: -10px;
}

label input {
  display: none;
}

label input:checked+.menu {
  box-shadow: 0 0 0 100vw #1c1c1c00, 0 0 0 100vh #1c1c1ce0;
  /* border-radius: 0; */
  /* box-shadow: 0 0 0 128vw #1c1c1c, 0px 0px 0px 140vw white, 0px 0px 0 100vh #1c1c1c; */
  /* border-radius: 0px 0px 0px 100%; */
  /* border-bottom: 22px white solid; */
  /* filter: blur(881px); */
  width: 0;
  /* height: 73%; */
  /* top: 0; */
  /* right: 0;*/

}

label input:checked+.menu .hamburger {
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);

}

/* label input:checked+.menu .hamburger:after {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
  bottom: 0;
} */

/* label input:checked+.menu .hamburger:before {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
  top: 0;

} */


.navLink {
  visibility: hidden;
  opacity: 0;
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: #00000005;
  z-index: 99999;
  transition: .3s 0.1s ease-in-out;
}

.showNavLink{
  visibility: visible;
  opacity: 1;
}
label input:checked+.menu+.navLink {
  opacity: 1;
}


.ul-link {
  margin: 0;
  margin-block: 0;
  padding-inline: 0;
  position: fixed;
  z-index: 9999;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  font-family: 'Subtlecurves';
  font-size: 2em;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: .3s 0.1s ease-in-out;

}


.ul-link li {
  margin-bottom: 17px;
}

.link {
  color: white;
  text-decoration: none;
  user-select: none;
}

.label ul li .link:hover,
.link:hover {
  color: darkorange;
  border-bottom: 4px solid darkorange;
  padding-bottom: 8px;
}
</style>
  

  