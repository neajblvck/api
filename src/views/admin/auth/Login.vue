<template>
<div class="admin">
		<PublicNav/>
		<h2>Authentification</h2>
		<form @submit.prevent="login">
			<label>Email:</label>
			<input type="email" v-model="credentials.email" required autocomplete="username">
			
			<label>Mot de passe:</label>
			<input type="password" v-model="credentials.password" required autocomplete="current-password">
			<button type="submit" class="btn">Se connecter</button>
		</form>

</div>

</template>


<script>

import PublicNav from '@/components/PublicNav.vue';
import {accountService} from '@/services'

export default {
    name: "login",
    data() {
        return {
            credentials: {
                email: "",
                password: "",
            }
        };
    },
  
    methods: {
        login() {
            accountService.login(this.credentials)
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