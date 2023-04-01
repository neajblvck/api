<template>
<div class="layout">
    <div class="admin">Admin Layout
    <PublicNav/>
    <AdminNav/>
    <router-view/> 
    </div> 
</div>  
</template>

<script>
import PublicNav from '@/components/PublicNav.vue';
import AdminNav from '@/components/AdminNav.vue';

export default{
    name: 'PublicLayout',
    components: {
        PublicNav,
        AdminNav,
    }

}

</script>

<style>

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