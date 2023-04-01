<template>
    <div class="admin">
        {{ user.userName }}
        {{ id }}
        <h2>Edition Utilisateur</h2>
        
        <form @submit.prevent="editUser()">

            <label for="userName">ID</label>
            <input type="text" v-model="user.name" required>

            <label for="userSurname">ID</label>
            <input type="text" v-model="user.surname" required>
            
            <label for="userPhone">Tel</label>
            <input type="tel" maxlength="10" Pattern="^0[0-9]{9}$" class="field-long" v-model="user.phone" required />

            <label for="userEmail">Email</label>
            <input type="email" v-model="user.email" required>

            <button type="submit" class="btn">Modifier</button>
        </form>
        
    </div>
</template>

<script>
import { userService } from '@/services';


export default {
    name: 'userEdit',
    props: ['id'],
    data() {
        return {
            user: {},
        }
    },
    methods: {
        editUser() {
            userService.updateUser(this.id, this.user)
                .then(res => {
                if (
                    res.data.modif.acknowledged == true
                    && res.data.modif.matchedCount == 1
                    && res.data.modif.modifiedCount == 0
                ) {
                    console.log(res.data);
                    console.log('aucune modif');
                } else {
                    this.$router.push({ name: 'userIndex' });
                }
            })
                .catch(err => console.log(err))
        },

    },
    mounted() {
        userService.getUser(this.id)
            .then(res => {
                this.user = res.data.User

            })
            .catch(err => console.log(err))
    }
}

</script>

<style>


</style> 