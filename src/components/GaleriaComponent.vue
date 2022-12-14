<template>
    <main>
        <div class="galeria">
          <div class="foto">
             <img src="../assets/LogoProyecto.png" alt="">
          </div>
          <div class="pie">
             <p>SinTapujos</p>
             <P>Aprendiendo a Cuidarme</P>
          </div>
      </div>
      <div class="galeria">
          <div class="foto">
              <img src="../assets/boostrap.jpg" alt="">
           </div>
           <div class="pie">
              <p>Herramienta de Trabajo</p>
              <p>Boostrap</p>
            </div>
     </div>
     <div class="galeria">
          <div class="foto">
              <img src="../assets/logo.png" alt="">
           </div>
           <div class="pie">
              <p>Herramienta de Trabajo</p>
              <p>Vue</p>
            </div>
     </div>

     <div class="galeria">
          <div class="foto">
              <img src="../assets/Tatiana.jpeg" alt="">
           </div>
           <div class="pie">
              <p>Portafolio Personal</p>
              <p>Conoce un Poco de Mi</p>
            </div>
     </div>
     
     

    </main>
    
</template>
<script>
export default{
    name:'GaleriaComponent',
    data() {
        return {
            
        }
    },
}
</script>
<style scoped>
main{
    background-color:antiquewhite ;
}
.galeria{
    margin: 10px 20px;
    box-shadow: 0 4px 8px 0 lightskyblue 0 6px 20px 0 rgba(0,0,0,0,19);
    display:inline-block;
    width: 250px;
}
.galeria:hover{
    border: 2px solid lightcoral;
    transform: rotate(-5deg);
}
img{
    
    width: 100%;
    height: auto;
}
.pie{
    text-align: center;
    text-shadow: 2px 2px 5px purple;
    padding: 10px;
}
</style>