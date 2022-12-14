<template>
    <div>
        <header>
            <div class="logo"><img src="../assets/TatianaC.jpeg" alt=""></div> 
            <div class="slogan">Tatiana Cruz / Aprendiz-SENA</div>
            <nav>
                <li><router-link to="/">Sobre Mi</router-link></li>
                <li><router-link to="/curriculum">Curriculum</router-link></li>
                <li><router-link to="/proyecto">Proyecto</router-link></li>
                <li><router-link to="/contacto">Contacto</router-link> </li>
            </nav>
        </header>
    </div>
</template>
<script>
export default{
    name:'NavComponent',
    data() {
        return {
            
        }
    },
}
</script>
<style scoped>
header{
    display: flex;
}
.logo{
    float: left;
    padding: 20px 0;
}
img{
    height: 50px;
    border-radius:30px;
    margin: 15px;
}
.slogan{
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 20px;
    width: 90%;
    max-width: 1000px;
    margin: auto;
}
nav{
    list-style: none;
    padding: 0;
    width: 90%;
    max-width: 1000px;
    margin: auto;
}
li{
    display: inline-block;
    text-align: center;
}
a{
    font-family: 'Times New Roman', Times, serif;
    font-size: 20px;
    display: block;
    text-decoration: none;
    padding: 20px;
    -webkit-transition:all 500ms ease ;
    -o-transition: all 500ms ease;
    transition:all 500ms ease ;
}
a:hover{
    background-color: palevioletred;
    border-radius: 25px;
    color: white;
}
</style>