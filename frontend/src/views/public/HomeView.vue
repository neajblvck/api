<template>
  <div class="home">
    <!-- faire un caroussel -->
    <div class="mainImage">
      <img class="bigImg" :src="hero" alt="">
    </div>

    <div class="navDown">
      <button class="btnMobile">Commandez</button>
    </div>


    <section class="section-marketing">
      <div class="container-grid">

        <div class="banner" v-for="post in home" :key="post._id">
          <div class="banner-content">
            <div class="picture">
              <img :src="post.imgPost">
            </div>
          </div>
          <div class="textWrap">
            <div class="cardText">
              <div class="card-title">{{ post.titlePost }}</div>
              <div class="card-description">{{ post.descriptionPost }}</div>
            </div>
            <button class="btn">DECOUVRIR</button>
          </div>
        </div>
      </div>
    </section>


  </div>
</template>

<script>

import { customService } from '@/services/custom.service'

export default {
  name: 'HomeView',
  components: {
  },
  data() {
    return {
      home: {},
      contents: [],
      hero: "http://localhost:3000/images/hero.jpg",
    }
  },

  mounted() {
    customService.getContent()
      .then(res => {
        this.home = res.data.home
      })
      .catch(err => { console.log(err) })
  }



}
</script>

<style scoped>
.btnMobile {
  z-index: 9999;
  position: fixed;
  bottom: 20px;
  right: 1.375rem;
  font-size: 21px;
  box-shadow: rgb(0 0 0 / 15%) 0px 4px 5px 2px;
  font-family: 'Subtlecurves';
  max-width: 100%;
  overflow: hidden;
  color: rgb(255, 255, 255);
  background-color: rgb(237 49 36);
  outline: 0px;
  border: 0px;
  border-radius: 19px;
  width: auto;
  cursor: pointer;
  margin: 0;
  padding: 0.45rem 1rem;
  transition: all 0.125s ease 0s;
}

.btn {
  font-size: 15px;
  font-family: 'Subtlecurves', cursive;
  padding: 4px 6px;
  background-color: #f68e51;
  color: white;
  border-radius: 9px;
  outline: none;
  cursor: pointer;
  border-width: 2px;
  box-shadow: inset 0px 1px 0px 1px #ffffff5e, inset 0px -1px 0px 1px #0000003b, 0px 1px 2px #111111de;
  transition: 0.3s ease;
}

.btn:hover {
  background-color: #ffbd6c;
  box-shadow: inset 0px 1px 0px 1px #ffffff5e, inset 0px -1px 0px 1px #0000003b, 0px 4px 2px #11111199;
  transform: scale(1.1);
}


.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.mainImage {
  position: relative;
  width: 100%;
  padding-bottom: 70%;
  overflow: hidden;
}

.bigImg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.section-marketing {
  position: relative;
  display: block;
  width: 100%;
  padding: 16px 0;
}

.container-grid {
  width: 93%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 13px;
  column-gap: 16px;
  margin: 0px 4%;
  max-width: 1180px;
  margin-right: auto;
  margin-left: auto;
}

.banner {
  grid-column-end: span 2;
  cursor: pointer;
  text-align: center;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 1px 4px 3px 0px #0000004f;
  background: rgb(255 255 255);
}

.banner-content {
  position: relative;
  /* border-style: solid; */
  /* border-color: white; */
  /* border-radius: 10px; */
  /* overflow: hidden; */
  padding-top: 53.33%;
  /* box-shadow: rgb(0 0 0 / 25%) 0px 2px 2px; */
}

.banner-content img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.textWrap {
  padding: 10px 16px 11px 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 1;
  color: rgb(125 44 33);
}

.cardText {
  display: block;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  padding-bottom: 12px;
  font-size: 1em;
}

.card-title {
  display: flex;
  font-family: 'Subtlecurves';
  max-width: 100%;
}

.card-description {
  font-family: 'Anton';
  text-align: start;
}


@media (min-width: 769px) {

  .banner {
    grid-column-end: span 4;
  }

  .container-grid {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    row-gap: 16px;
    column-gap: 16px;



  }
}

@media (min-width: 1000px) {

  .banner {
    grid-column-end: span 4;
  }

  .container-grid {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    row-gap: 20px;
    column-gap: 35px;



  }

}
</style>


<!-- .home {
  margin-top: -120px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.mainImage {
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
}

.bigImg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: auto;
}

.section-marketing{
  display: block;
  width: 100%;
}

.container-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 10px;
  column-gap: 16px;
  margin: 0px 4%;
}

.banner {
  grid-column-end: span 2;
  cursor: pointer;
  text-align: center;
}

.banner-content {
  position: relative;
  border-style: solid;
  border-color: white;
  border-radius: 10px;
  overflow: hidden;
  padding-top: 53.33%;
  box-shadow: rgb(0 0 0 / 25%) 0px 2px 2px;
  background: rgb(255, 255, 255);
}

.banner-content img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (min-width: 769px){

  .banner {
  grid-column-end: span 4;
}

.container-grid {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  row-gap: 16px;
  column-gap: 16px;

  

}

} -->
