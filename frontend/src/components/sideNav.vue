<template>

    <div class="content">
        <nav id="littlenavbar">
			<button id="openNav" onclick="toggleNav()">&#9776;</button>
	</nav>
	
	<nav id="mySidenav" class="sidenav">
		<span class="closebtn" onclick="toggleNav()">&times;</span>
		<div class="sidenavLink">
			<a href="index.html">HOME</a>
     		<a href="carte.html?content=burgers">BURGERS</a>
      		<a href="carte.html?content=tacos">TACOS</a>
      		<a href="carte.html?content=wrap">WRAPS</a>
      		<a href="carte.html?content=texmex">TEXMEX</a>
      		<a href="carte.html?content=desserts">DESSERTS</a>
		</div>
</nav>
    </div>

</template>

<script>
export default {
    name: 'sideNav'
}
</script>

<style scoped>

#openNav {
    transition: 0.5s ease;
    border-radius: 20px;
    padding: 0px 13px 5px 10px;
    cursor: pointer;
    font-size: 52px;
    color: white;
    background-color: #111111de;
    border-style: none;
}

.sidenav {
    overflow-y: hidden;
    height: 100%; 
    width: 0; 
    position: fixed;
    z-index: 900; 
    top: 0;
    left: 0;
    background-color: #111111de; 
    overflow-x: hidden; 
    padding-top: 60px; 
    transition: width 0.5s;
}



.open{
    width: 100%;
}



.hide{
    transform: scale(0); 
    opacity: 0;
}


.sidenavLink{
    text-align: center;
}

.sidenav a {

    padding: 40px 0px 0px 0px;
    text-decoration: none;
    font-size: 35px;
    font-family: 'Subtlecurves';
    color: white;
    display: block;
}

.sidenav a:hover {
  color: darkorange;
}


.closebtn {
    position: absolute;
    top: 25px;
    right: 25px;
    font-size: 65px;
    color: white;
    cursor: pointer;
}

.pushBody{
    filter: brightness(0.5) ;
    filter: blur(9px);
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}


</style>

function toggleNav() {
    let sideNav = document.getElementById("mySidenav");
    let openNav = document.getElementById("openNav");
    let footer = document.getElementById("footer");
    sideNav.classList.toggle("open");
    openNav.classList.toggle("hide");
    bodyContent.classList.toggle("pushBody");
    sideNav.classList.toggle("stopscroll");
    document.body.classList.toggle("stopscroll");
  }
 
  function closeNav() {
   sideNav.classList.toggle("open");
   openNav.classList.toggle("hide");
 }