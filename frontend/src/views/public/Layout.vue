<template>
    <div id="public">
        <PublicNav/>
        <BurgerNav/>
        <!-- <NavMobile/> -->
        <!-- <sideNav/> -->
        <router-view/> 
    </div> 
</template>

<script>

import PublicNav from '@/components/PublicNav.vue'
import sideNav from '@/components/sideNav.vue';
import NavMobile from '@/components/NavMobile'
import BurgerNav from '../../components/BurgerNav.vue';

export default{
    name: 'PublicLayout',
    components: {
        PublicNav,
        sideNav,
        NavMobile,
        BurgerNav
    }

}

</script>
