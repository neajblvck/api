<template>
    <div class="public">
        <div class="public-content">

            <input v-model="searchKey" type="search" id="search" placeholder="rechercher..." autocomplete="off">

            <div class="section">
                <label class="switch" v-for="category in categories" :key="category">
                    <input type="checkbox" @click="toggleCategory(category)" />
                    <span>{{ category }}</span>
                </label>
            </div>

            <section id='sectionTacos' class='menusection'>
                <h1 class="titlesection">PRODUITS</h1>

                <div class='rayon' oncontextmenu='return false;' onkeydown='return false;' onmousedown='return false;'>

                    <div class='produit' v-for="(product, index) in filteredProducts" :key="product">
                        <div class="pictureProduit">
                            <img v-if="product.prixMenu" src="menu.svg" @click="toggleMenu(index)"
                                :class="{ 'iconMenu': true, 'iconMenuOff': !products[index].Menu }">
                            <img :src="product.imageUrl" alt='une photo du Tacos M' class='imgproduit'>
                            <img src="boisson.png" :class="{ 'boisson': true, 'boissonOut': !products[index].Menu }">
                            <img src="frite.png" :class="{ 'frite': true, 'friteOut': !products[index].Menu }">
                        </div>
                        <div v-if="product.available" class='infos'>
                            <div class='titleandinfo'>
                                <h2 class='titleproduit'>{{ product.nameProduct }}</h2>
                                <h3 class='info'>{{ product.descriptionProduct }}</h3>
                            </div>
                            <p class='prix' v-if="products[index].Menu && products[index].prixMenu">{{
                                product.prixMenu.toLocaleString('fr-FR',
                                    { style: 'currency', currency: 'EUR' }) }}</p>
                            <p class='prix' v-else>{{ product.prixProduct.toLocaleString('fr-FR', {
                                style: 'currency',
                                currency: 'EUR'
                            }) }}</p>
                        </div>
                        <div v-else class="infos">
                            <p class='titleproduit'>indisponible</p>
                        </div>
                    </div>
                </div>

            </section>

        </div>
    </div>
</template>

<script>

import { productService } from '@/services/product.service'

export default {
    name: 'Menu',
    data() {
        return {
            products: [],
            selectedCategories: [],
            categories: [
                "sandwichs",
                "burger",
                "tacos",
                "texmex",
            ],
            searchKey: "",
            panier: []
        }
    },


    computed: {

        filteredProducts() {
            let filteredByCategory = [];
            if (this.selectedCategories.length === 0) {
                // Si aucune catégorie n'est sélectionnée, retourner tous les produits
                filteredByCategory = this.products;
            } else {
                // Sinon, filtrer les produits en fonction des catégories sélectionnées
                filteredByCategory = this.products.filter(product => this.selectedCategories.includes(product.category));
            }

            // Appliquer le filtre de recherche sur les produits filtrés par catégorie
            return filteredByCategory.filter((product) => {
                return product.nameProduct.toLowerCase().includes(this.searchKey.toLowerCase());
            });
        }

    },

    methods: {

        toggleCategory(category) {
            // Vérifier si la catégorie est déjà sélectionnée
            const index = this.selectedCategories.indexOf(category)

            if (index === -1) {
                // Si la catégorie n'est pas sélectionnée, l'ajouter
                this.selectedCategories.push(category)
            } else {
                // Sinon, la retirer
                this.selectedCategories.splice(index, 1)
            }
        },

        toggleMenu(index) {
            this.products[index].Menu = !this.products[index].Menu;
        },

    },
    mounted() {
        productService.getAllProducts()
            .then(res => {
                const productsList = res.data.Allproduct;
                const products = productsList.map(product => {
                    if (product.hasOwnProperty('prixMenu')) {
                        return {
                            ...product,
                            Menu: true,
                        };
                    }
                    return product;
                });
                this.products = products;
                console.log(this.products);
            })
            .catch(err => { console.log(err) })
    },
}

</script>

<style scoped>
.section {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.switch {
    display: inline-block;
    position: relative;
    width: 70px;
    height: 40px;
    cursor: pointer;
    /* overflow: hidden; */

    margin: 10px;
    padding: 10px 12px;

    width: calc(25% - 50px);
    max-width: 180px;
    height: 24px;
    transition: 0.3s ease;
    outline: none;
    cursor: pointer;
    font-size: calc(8px + 1.5vw);
    font-family: 'Subtlecurves', cursive;
    color: white;
}

.switch input {
    position: absolute;
    top: -30px;
    left: -30px;
    width: 0;
    height: 0;
    opacity: 0;
}

.iconMenu {
    z-index: 999;
    cursor: pointer;
    position: absolute;
    width: 32px;
    top: 5px;
    right: 11px;
    filter: opacity(0.8);
    transition: ease 1s;
    ;
}

.iconMenuOff {
    filter: opacity(0.4);
}

.switch input+span {
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    padding: 10px 12px;
    max-width: 180px;
    height: auto;

    background-color: #1c1c1c;
    border-radius: 13px;
    box-shadow: inset 0.1px 2.1px 0px 1px #ffffff5e, inset -0.1px -2.1px 0px 1px #0000007d, 1px 2px 3px #111111de;
    transition: 0.3s ease;
    user-select: none;
}

.switch input:hover+span {
    background-color: #ffbd6c;
    transform: scale(1.1);
}

.switch input:checked+span {
    background-color: #ffbd6c;
    transform: scale(0.95);
}

.titlesection {
    color: #ffffff;
    font-family: 'Subtlecurves';
    /* font-size: 57px; */
    margin: 4px;
    font-size: calc(20px + 4vw);
    text-shadow: 0px 3px 0px #4c3a32ba;
    border-radius: 15px;
    margin-top: 25px;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    width: 95%;
    background-color: #ab5b1e5e;
    padding-top: 5px;
    padding-bottom: 5px;
}


.rayon {
    position: relative;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
}

.produit {
    /* display: flex; */
    position: relative;
    width: calc(50% - 14px);
    border: solid 2px #e0a463;
    border-radius: 12px;
    margin: 5px;
    overflow: hidden;
}

.infos {
    overflow: hidden;
    display: flex;
    padding-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    background-color: #e0a463;
    margin-top: 0;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    height: 100%;
}

.pictureProduit {
    max-height: 220px;
    display: flex;
    overflow: hidden;
    align-content: center;
    justify-content: center;
    align-items: center;
}

.imgproduit {
    z-index: 30;
    width: 100%;
    transition: transform 1s ease;
}

.boisson {
    z-index: 25;
    position: absolute;
    top: 7%;
    left: 9px;
    width: 46%;
    z-index: 0;
    transition: ease 0.8s;
}


.frite {
    z-index: 20;
    position: absolute;
    top: -1%;
    right: -4px;
    width: 60%;
    z-index: 0;
    transition: ease-in-out 0.8s;
}

.boissonOut {
    left: -160px;
}

.friteOut {
    right: -180px;
}

.titleandinfo {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
}

.titleproduit {
    font-family: 'Subtlecurves';
    font-size: calc(14px + 1.5vw);
    /* font-size: 20px; */
    margin: 0 0 5px 0;
    color: white;
    padding: 0;
}

.info {
    margin: 0;
    padding: 0;
    font-family: 'Anton';
    text-transform: uppercase;
    /* font-size: 13px; */
    font-size: calc(8px + 1vw);
    color: rgb(76 58 50);
}

.prix {
    font-size: calc(14px + 1.5vw);
    font-family: 'Subtlecurves';
    margin: 0 0 0 5px;
    color: #4c3a32;
}

/*-------------- SCREEN inférieur à 600 -------------*/
@media screen and (max-width: 650px) {



    .switch {
        width: calc(50% - 50px);
        font-size: 20px;
    }

}

/*-------------- SCREEN 650 à 960 -------------*/
@media screen and (min-width: 650px) {

    .produit {
        width: calc(33% - 18px);
        margin: 8px;
    }
}

/*-------------- SCREEN supérieur 960 -------------*/
@media screen and (min-width: 960px) {

    .produit {
        width: calc(25% - 20px);
        margin: 8px;
    }


}
</style>