<template>
    <div class="admin">

        <form @submit.prevent="addUser()">
            <ul class="form-style-1">

                <p v-if="errors.length">
                    <b>Corriger les erreurs suivantes</b>
                <ul>
                    <li v-for="error in errors">{{ error }}</li>
                </ul>
                </p>

                <li>
                    <label>IDENTITE</label>
                    <input type="text" name="field1" class="field-divided" placeholder="Nom" v-model="user.name"
                        required /> <input type="text" name="field2" class="field-divided" placeholder="Prénom"
                        v-model="user.surname" required />
                </li>

                <li>
                    <label>EMAIL</label>
                    <input type="email" name="field3" class="field-long" placeholder="email@exemple.com" v-model="user.email" required />
                </li>

                <li>
                    <label>ROLE</label>
                    <select name="field4" class="field-select" v-model="user.role" required>
                        <option value="Manager">Manager</option>
                        <option value="Cuisto">Cuisto</option>
                        <option value="Caissier">Caissier</option>
                        <option value="Livreur">Livreur</option>
                    </select>
                </li>

                <li>
                    <label for="phone">TELEPHONE</label>
                    <input type="text" name="field5" maxlength="10" Pattern="^0[0-9]{9}$" placeholder="0607080910" class="field-long"
                        v-model="user.phone" required />
                </li>

                <li>
                    <label for="userPassword">mot de passe</label>
                    <input type="password" name="field6" placeholder="Minimum 6 caractères" class="field-long" v-model="user.password" required>
                </li>

                <li>
                    <!-- <label for="confirmPassword">retapez mot de passe</label> -->
                    <input type="password" name="field7" placeholder="Retapez le mot de passe" class="field-long" v-model="confirmPassword" required>
                </li>

                <li>
                    <button type="submit" class="btn">CREER</button>
                </li>

                {{ this.user.phone }}

            </ul>
        </form>

    </div>
</template>

<script>
import { userService } from '@/services';

export default {
    name: 'userAdd',
    data() {
        return {
            user: {
                name: "",
                surname: "",
                role: "",
                phone: "",
                email: "",
                password: "",
            },
            confirmPassword: "",
            errors: []
        }
    },
    methods: {

        addUser() {
            this.errors = []
            if (this.user.password != this.confirmPassword) {
                this.errors.push('le mot de passe doit correspondre')
            }

            if (this.user.password.length < 6) {
                this.errors.push('le mot de passe doit contenir au moins 6 caractères')
            }

            if (this.errors.length == 0) {
                userService.createUser(this.user)
                    .then(res => { console.log(res.data), this.$router.push({ name: 'userIndex' }) })
                    .catch(err => console.log(err))
            }
        }
    },

}

</script>

<style scoped>
.form-style-1 {
    margin: 10px auto;
    max-width: 400px;
    padding: 20px 12px 10px 20px;
    font-family: 'Subtlecurves';
    font-size: 20px;
    color: white;
    text-shadow: 0px 1px 2px #000000b8;
}

.form-style-1 li {
    padding: 0;
    display: block;
    list-style: none;
    margin: 10px 0 0 0;
}

.form-style-1 label {
    margin: 0 0 3px 0;
    padding: 0px;
    display: block;
    font-weight: bold;
}


.form-style-1 input[type=text],
.form-style-1 input[type=date],
.form-style-1 input[type=datetime],
.form-style-1 input[type=number],
.form-style-1 input[type=search],
.form-style-1 input[type=time],
.form-style-1 input[type=url],
.form-style-1 input[type=email],
.form-style-1 input[type=tel],
.form-style-1 input[type=password],
textarea,
select {
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    border: 1px solid #c9c9c9;
    padding: 7px;
    margin: 0px;
    border-radius: 7px;
    transition: all 0.30s ease-in-out;
    -webkit-transition: all 0.30s ease-in-out;
    -moz-transition: all 0.30s ease-in-out;
    -ms-transition: all 0.30s ease-in-out;
    -o-transition: all 0.30s ease-in-out;
    outline: none;
}

.form-style-1 input[type=text]:focus,
.form-style-1 input[type=date]:focus,
.form-style-1 input[type=datetime]:focus,
.form-style-1 input[type=number]:focus,
.form-style-1 input[type=search]:focus,
.form-style-1 input[type=time]:focus,
.form-style-1 input[type=url]:focus,
.form-style-1 input[type=email]:focus,
.form-style-1 input[type=tel]:focus,
.form-style-1 input[type=password]:focus,
.form-style-1 textarea:focus,
.form-style-1 select:focus {
    box-shadow: 0 0 6px 1px #ffffff;
    transform: scale(1.01);
    border: 1px solid #ffffff;
}

.form-style-1 .field-divided {
    width: 49%;
}

.form-style-1 .field-long {
    width: 100%;
}

.form-style-1 .field-select {
    width: 100%;
}

.form-style-1 .field-textarea {
    height: 100px;
}

.form-style-1 input[type=submit],
.form-style-1 input[type=button] {
    background: #4B99AD;
    padding: 8px 15px 8px 15px;
    border: none;
    color: #fff;
}

.form-style-1 input[type=submit]:hover,
.form-style-1 input[type=button]:hover {
    background: #4691A4;
    box-shadow: none;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
}

.form-style-1 .required {
    font: 13px "Lucida Sans Unicode", "Lucida Grande", sans-serif;
    color: red;
}
</style> 