<template>
    <div class="admin">


        <section class="section-marketing">
            <div class="container-grid">
                <div class="banner" v-for="(post, index) in home" :key="post._id">
                    <form enctype='multipart/form-data' @submit.prevent="$event => editPost(index)">
                        <div class="banner-content">
                            <label :for="'changeImg' + index" class="btn label-changeFile">
                                CHOISIR UNE IMAGE
                                <input class="changeFile" :id="'changeImg' + index" type="file"
                                    @change="$event => selectFile1($event, index)"
                                    accept="image/png, image/jpg, image/jpeg" />
                            </label>

                            <div class="picture">
                                <img class="oldImg" :class="{ 'newImg': post.newFile }" :src="post.imgPost">
                            </div>
                        </div>
                        <div class="textWrap">
                            <div class="cardText">
                                <div class="edit-card" @click="activeIndex = 'title'+index">

                                    <textarea :class="{cardFocus: activeIndex === 'title'+index}" class="card-title" type="text"
                                        rows="1" maxlength="30" pattern="[A-Za-z0-9 ]+" v-model="post.titlePost">
                                                </textarea>

                                    <div class="btn-textarea" v-if="activeIndex === 'title'+index">
                                        <!-- <button class="btn" @click.stop.prevent="validModif('cardTitle', index)">ok</button> -->
                                        <button class="btn"
                                            @click.stop.prevent="cancelModif('cardTitle', index)">annuler</button>
                                    </div>
                                </div>
                                <div class="edit-card" @click="activeIndex = 'description'+index">
                                    <textarea :class="{cardFocus: activeIndex === 'description'+index}" class="card-description"
                                        type="text" rows="2" cols="30" maxlength="200" v-model="post.descriptionPost">
                                                </textarea>
                                    <div v-if="activeIndex === 'description'+index" class="btn-textarea">
                                        <!-- <button class="btn"
                                            @click.stop.prevent="validModif('description', index)">ok</button> -->
                                        <button class="btn"
                                            @click.stop.prevent="cancelModif('description', index)">annuler</button>
                                    </div>
                                </div>



                            </div>
                            <label :for="'optionBtn' + index">Que fait le bouton?</label>
                            <select :name="'optionBtn' + index" class="btn" v-model="post.btnOption" required>
                                <option value="menu">DECOUVRIR</option>
                                <option value="signup">SIGN UP</option>
                                <option value="order">COMMANDEZ</option>
                            </select>
                            <button type="submit" class="btn green">PUBLIER</button>
                        </div>
                    </form>
                </div>


            </div>
        </section>






    </div>
</template>

<script>
import { customService } from '@/services/custom.service';

export default {
    name: 'homeEdit',
    data() {
        return {
            home: [],
            originalData: [],
            activeIndex: null,
        }
    },

    methods: {


        cancelModif(modification, index) {

            console.log(index)
            if (modification === "cardTitle") {

                this.home[index].titlePost = this.originalData[index].titlePost

            }

            if (modification === "description") {

                this.home[index].descriptionPost = this.originalData[index].descriptionPost

            }
            this.activeIndex = null
        },

        validModif(modification) {

            if (modification === "description") {
                this.home.descriptionPost = this.description

            }

            if (modification === "cardTitle") {
                this.home.titlePost = this.cardTitle
            }
            this.activeIndex = null

        },


        selectFile1(event, index) {
            const file = event.target.files[0];
            if (file) {
                this.home[index].imgPost = URL.createObjectURL(file);
                this.home[index].newFile = file;
            }
        },


        createPost(index) {

            const formData = new FormData();
            formData.append('titlePost', this.home[index].titlePost);
            formData.append('descriptionPost', this.home[index].descriptionPost);
            if (this.home[index].newFile) {
                formData.append('imgPost', this.home[index].newFile)
            };
            customService.createPost(formData)
                .then(res => {
                    console.log(res)
                    // this.$router.push({ name: 'productIndex' })
                })
                .catch(err => console.log(err))

        },



        editPost(index) {

            const formData = new FormData();
            formData.append('titlePost', this.home[index].titlePost);
            formData.append('descriptionPost', this.home[index].descriptionPost);
            if (this.home[index].newFile) {
                formData.append('imgPost', this.home[index].newFile)
            };
            customService.postContent(this.home[index]._id, formData)
                .then(res => {
                    console.log(res)
                        this.home[index].newFile = null
                    
                })
                .catch(err => console.log(err))

        },
    },

    mounted() {
        customService.getContent()
            .then(res => {

                this.originalData = JSON.parse(JSON.stringify(res.data.home))
                this.home = res.data.home




            })
            .catch(err => { console.log(err) })


    },

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

.btn-publier {
    z-index: 1;
    position: absolute;
    bottom: 0;
    right: 0;

}

.btn {
    font-size: 15px;
    font-family: 'Subtlecurves', cursive;
    padding: 0.3rem 0.9rem;
    background-color: #f68e51;
    color: white;
    border-radius: 9px;
    outline: none;
    cursor: pointer;
    border-width: 2px;
    box-shadow: inset 0px 1px 0px 1px #ffffff5e, inset 0px -1px 0px 1px #0000003b, 0px 1px 2px #111111de;
    transition: 0.3s ease;

}

.oldImg {
    transition: 0.3s ease;
}

.newImg {
    filter: contrast(0.6);
}

.label-changeFile:hover+.picture .oldImg {
    filter: contrast(0.5);
}

.changeFile {
    display: none;

}

.label-changeFile {
    cursor: pointer;
    z-index: 1;
    position: absolute;
    bottom: 3%;
    right: 3%;
}

.btn:hover {
    background-color: #ffbd6c;
    box-shadow: inset 0px 1px 0px 1px #ffffff5e, inset 0px -1px 0px 1px #0000003b, 0px 4px 2px #11111199;
    transform: scale(1.1);
}


.home {
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
    max-width: 1000px;
    margin-right: auto;
    margin-left: auto;
}
.banner {
    position: relative;
    grid-column-end: span 2;
    cursor: pointer;
    text-align: center;
    border-radius: 12px;
    box-shadow: 1px 4px 3px 0px #0000004f;
    background: rgb(255 255 255);
}

.banner-content {
    overflow: hidden;
    border-radius: 12px 12px 0 0;
    position: relative;
    padding-top: 53.33%;
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
    position: relative;
    display: block;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    padding-bottom: 12px;
    width: 100%;
}

.card-title {
    padding: 0;
    border-radius: 0;
    display: flex;
    font-family: 'Subtlecurves';
    font-size: 1em;
    max-width: 100%;
    border: none;
    resize: none;
    color: rgb(125 44 33);

}

.edit-card {
    position: relative;
}

.card-description {
    border-radius: 0;
    cursor: pointer;
    display: block;
    padding: 0;
    width: 100%;
    font-family: 'Anton';
    text-align: start;
    color: rgb(125 44 33);
    border: none;
    resize: none;
}

.cardFocus {
    width: 100%;
    border-radius: 12px;
    background-color: #ffd3b4;
    padding: 10px;
    transition: all 0.30s ease;
}

.btn-textarea {
    transition: all 0.30s ease;
    z-index: 3;
    position: absolute;
    right: 15px;
    top: 50%;
    translate: 0 -50%;

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
</style>