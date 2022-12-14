<template>
    <div>
        <footer>
            <p class="left">Politica de Privacidad <br>
             @2022 Creado por Tatiana Silena Cruz con Vue Cli</p>
            <p class="llamar">Llama <br>
                +57-313-407-49-02
            </p>
            <p class="correo">Escribe <br>
              cruztatiana165@gmail.com</p>
        </footer>
    </div>    
</template>
<script>
export default{
    name:'FooterComponent',
    data() {
        return {
            
        }
    },
}
</script>
<style scoped>
footer{
    float:right ;
}
.left{
    display: flex;
    position: absolute;
    right: 1000px;
    
}
.llamar{

    display: inline-block;
    padding: 10px;
    
    
}
.correo{
    display: inline-block;
    padding: 10px;
}
</style>