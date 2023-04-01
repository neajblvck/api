<template>
    <div class="admin">

        <form enctype='multipart/form-data' @submit.prevent="$event => addProduct()">
            <ul class="form-style-1">
                <p v-if="errors.length">
                    <b>Corriger les erreurs suivantes</b>
                <ul>
                    <li v-for="error in errors">{{ error }}</li>
                </ul>
                </p>

                <li>
                    <label for="nom">Nom du Produit</label>
                    <input type="text" name="nom" class="field-divided" placeholder="Nom" v-model="product.nameProduct"
                        required />
                </li>

                <li>
                    <label for="description">description</label>
                    <input type="text" name="description" class="field-long" placeholder="description"
                        v-model="product.descriptionProduct" required />
                </li>

                <li>
                    <label for="prixProduit">Prix</label>
                    <input type="number" name="prixProduit" step="0.10" class="field-long" placeholder="en Euros" pattern="^\d+(\.\d{1,2})?$" max="99.99" v-model="product.prixProduct" required>
                </li>

                <li>
                    <label for="prixMenu">Prix en Menu:</label>
                    <input type="number" name="prixMenu" step="0.10" class="field-long" placeholder="en Euros" pattern="^\d+(\.\d{1,2})?$" max="99.99" v-model="product.prixMenu">
                </li>

                <li>
                    <label>CATEGORIE</label>
                    <select name="field4" class="field-select" v-model="product.category" required>
                        <option value="burger">BURGER</option>
                        <option value="tacos">TACOS</option>
                        <option value="sandwichs">SANDWICHS</option>
                        <option value="texmex">TEXMEX</option>
                    </select>
                </li>

               

                <label class="switch" >
                    <input type="checkbox" v-model="this.product.available">
                    <span class="slider round"></span>
                </label>

                
                {{ this.product.available ? 'disponible' : 'indisponible' }}

                <li>
                        <input type="file" @change="selectFile" required>
                </li>

                <li>
                    <button type="submit" class="btn">CREER</button>
                </li>

            </ul>
        </form>



    </div>
</template>

<script>
import { productService } from '@/services/product.service';

export default {
    name: 'productAdd',
    data() {
        return {
            product: {
                nameProduct: "",
                descriptionProduct: "",
                prixProduct: null,
                prixMenu: null,
                image: null,
                category: "",
                available: true,
                
            },
            errors: []
        }
    },

    methods: {

        selectFile(event) {
            this.product.image = event.target.files[0]
        },


        addProduct() {
            const formData = new FormData();
            formData.append('nameProduct', this.product.nameProduct);
            formData.append('prixProduct', this.product.prixProduct);
            formData.append('prixMenu', this.product.prixMenu);
            formData.append('descriptionProduct', this.product.descriptionProduct);
            formData.append('image', this.product.image);
            formData.append('category', this.product.category);
            formData.append('available', this.product.available);
            productService.createProduct(formData)
                .then(res => { 
                    console.log(res.data);
                    this.$router.push({ name: 'productIndex' })
                })
                .catch(err => console.log(err))

        },

    
    },

}

</script>

<style scoped>
/* The switch - the box around the slider */
.switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

/* The slider */
.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
}

.slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
}

input:checked+.slider {
    background-color: #2196F3;
}

input:focus+.slider {
    box-shadow: 0 0 1px #2196F3;
}

input:checked+.slider:before {
    transform: translateX(26px);
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}
</style>