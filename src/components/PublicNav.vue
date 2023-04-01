<template>

        <nav class="navbar">
            <ul>
                <li><router-link class="link" to="/">Home</router-link></li>
                <li><router-link class="link" to="/menu">LA CARTE</router-link></li>
                <li class="dropdown"><a class="link" href="">ADMIN</a>
                    <div class="dropdown-content">
                        <router-link class="dropdown-link" to="/admin/dashboard">Admin</router-link>
                        <router-link class="dropdown-link" to="/login">Login</router-link>
                        <router-link class="dropdown-link" to="/signup">Signup</router-link>
                    </div>
                </li>
                <li><router-link class="link" to="/about">About</router-link></li>
            </ul>
        </nav>

</template>

<script>
export default {
    name: 'PublicNav'
}
</script>

<style scoped>


.content {
    text-decoration: none;
    list-style: none;
    margin: 0 0 0 0;
    padding: 0 0 0 0;
}

.navbar {
    z-index: 900;
    width: 100%;
    position: fixed;
    top: 0;
    height: 85px;
    background-color: #1C1C1C;
    box-shadow: 1px 4px 6px 0px #00000047;
}

.navbar ul {
    font-family: 'Subtlecurves';
    font-size: 23px;
    list-style: none;
    display: flex;
    flex-wrap: nowrap;
    float: right;
    align-items: center;
}

.navbar ul li {
    margin-right: 40px;

}

.link {
    color: white;
    text-decoration: none;
}

.navbar ul li .link:hover,
.dropdown:hover .link {
    color: darkorange;
    border-bottom: 4px solid darkorange;
    padding-bottom: 8px;
}

.dropdown-content {
    margin-top: 12px;
    background-color: rgb(28 28 28 / 71%);
    ;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    padding-top: 26px;
    display: none;
    position: absolute;
    font-size: 19px;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
}

.dropdown-link {
    color: white;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
}

.dropdown-link:last-of-type {
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
}

.dropdown-link:hover {
    background-color: #1c1c1c;
    color: darkorange;
}

.dropdown:hover .dropdown-content {
    display: block;
}</style>