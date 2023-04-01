<template>
    <div class="admin">
        <div class="admin-content">
            <h2>Liste des Utilisateurs</h2>
            <div class="content-wrap">
                <!-- <router-link class="link" to="/admin/user/add"><font-awesome-icon class="icon" icon="fa-solid fa-pen-to-square" size="xl"/></router-link> -->
                <button class="btn"><router-link class="link" to="/admin/user/add">AJOUTER UN UTILISATEUR</router-link></button>
            </div> 
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Utilisateur</th>
                        <th>Tel</th>
                        <th>Role</th>
                        <th>email</th>
                        <th>OPTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(user, index) in users" :key="user._id">
                        <td>{{'#' + index }}</td>
                        <td>{{ user.name + user.surname}}</td>
                        <td>{{ user.phone }}</td>
                        <td>{{ user.role }}</td>
                        <td>{{ user.email }}</td>
                        <td>
                            <!-- <font-awesome-icon class="icon" icon="fa-solid fa-pen-to-square" @click="$event => goEditUser(user._id)" size="xl" />
                            <font-awesome-icon class="icon" icon="fa-solid fa-trash-can" size='xl' v-if="user._id !== adminId" @click="$event => goDeleteUser(user._id, index)"/> -->
                            <button @click="$event => goEditUser(user._id)" class="btn">Modifier</button>
                            <button v-if="user._id !== adminId" @click="$event => goDeleteUser(user._id, index)"
                                class="btn delete">Supprimer</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>

import { userService } from '@/services';

export default {
    name: 'userIndex',
    data() {
        return {
            userLogged: "",
            users: [],
            adminId: '6409c0663d01483e0549bb2c'
        }
    },
    methods: {
        goEditUser(id) {
            this.$router.push({ name: 'userEdit', params: { id: id } })
        },
        goDeleteUser(id, index) {

            userService.deleteUser(id)
                .then(res => { this.users.splice(index, 1) })
                .catch(err => console.log(err))
        }

    },
    mounted() {
        userService.getAllUsers()
            .then(res => {
                this.users = res.data.users
                console.log(this.users)
            })
            .catch(err => { console.log(err), this.$router.push('/login') })
    }
}

</script>

<style scoped>
h2{
    font-family: anton;
    text-transform: uppercase;
    font-size: 35px;
    color: #1c1c1c;
    padding-bottom: 0;
    border-bottom: solid 3px #1c1c1c;
}

.icon{
    color: #444444;
    cursor: pointer;
    margin: 9px;
}

.admin {
    margin-top: 85px;
    background-color: #ffc47a;
    background: linear-gradient(45deg,#ffba59,#ffd6bd);
}

.admin-content {
    box-sizing: border-box;
    padding: 30px;
}

.content-wrap {
    margin-top: 30px;
    margin-bottom: 20px;
}

table {
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    width: 100%;
    margin: 0 auto;
    position: relative;
    border-collapse: collapse;
    box-shadow: 3px 2px 7px 0px #00000042;
}

table thead tr {
    height: 60px;
    background: #1c1c1c;
}

table td,
table th {
    text-align: left;
    padding-left: 15px;
}

table th {
    font-family: 'Subtlecurves';
    font-size: 18px;
    color: #fff;
    line-height: 1.2;
    font-weight: unset;
}

table tbody tr {
    height: 55px;
    font-family: OpenSans-Regular;
    font-size: 15px;
    color: gray;
    line-height: 1.2;
    font-weight: unset;
}

table .btn {
    margin-right: 10px;
}

tbody tr:nth-child(even) {
    background-color: #f5f5f5;
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

.delete {
    background-color: #f65151;
}

.delete:hover {
    background-color: #ff7b7b;
}
</style> 

