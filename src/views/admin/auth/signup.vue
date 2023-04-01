<template>
<div class="admin">
		<PublicNav/>
		<h2>S'inscrire</h2>
		<form @submit.prevent="signup">
            <label>Username</label>
			<input type="text" v-model="credentials.userName" required autocomplete="usernamed">

			<label>Email:</label>
			<input type="email" v-model="credentials.email" required>
			
			<label>Mot de passe:</label>
			<input type="password" v-model="credentials.password" required autocomplete="current-password">
			<button type="submit">Se connecter</button>
		</form>
</div>
</template>


<script>

import PublicNav from '@/components/PublicNav.vue';
import {accountService} from '@/services'

export default {
    name: "signup",
    data() {
        return {
            credentials: {
                userName: "",
                email: "",
                password: "",
            }
        };
    },
    methods: {
        signup() {
            accountService.signup(this.credentials)
                .then(res => {
                accountService.saveToken(res.data.token);
                this.$router.push("/admin/dashboard");
            })
                .catch(err => console.log(err));
        }
    },
    components: { 
		PublicNav 
	}
}

</script>

<style scoped>
</style>