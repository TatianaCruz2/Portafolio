<template>
  <main>
        <div>
        <header>
            <section class="lado1">
            </section>
            <section class="lado2">
            </section >
        </header>
    </div>

    <div class="fotografia">
        <header>
            <section class="foto">
                <img src="../assets/TatianaC.jpeg" alt="">
                <h1 class="nom">Tatiana Silena Cruz</h1>
                <h2>Aprendiz-SENA</h2>
            </section>
            <section class="texto">
                <h1>Hola </h1>
                <h1 class="presentacion">Esto Es Lo Que Soy Y Lo Que Hago</h1>
                <div class="contenido">
                    <p>
                    Actualmente me encuentro en 4 Trimestre de Analisis y Desarrollo de Sistemas de Informacion (ADSI)
                     en el Centro de Teleinformatica y Produccion Industrial.
                    
                </p>
                </div>
                
            </section >
        </header>
    </div>
    <div>
        <button  class="boton1" @click="$router.push('/Curriculum')">Curriculum</button>
    </div>
    <div>
        <button class="boton2" @click="$router.push('/Proyecto')">Proyecto</button>
    </div>
    
    </main>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
    display: flex;
}
.nom{
  font-family: 'Times New Roman', Times, serif;
  font-size: 2rem;
}
h1{
    text-align: center;
  font-family:'Times New Roman', Times, serif;
  font-size: 3rem;
}
h2{
    text-align: center;
    font-family:'Times New Roman', Times, serif;
    font-size: 1.2rem;
}
.presentacion{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 1rem;
}

.lado1{
    background-color: rgb(223, 205, 182);
    width: 40%;
    height: 700px;
}
.lado2{
    background-color: rgb(246, 246, 246);
    width: 60%;
    height: 700px;
}
.fotografia{
    
    position: absolute;
    top: 180px;
    left: 350px;

    border-radius: 4px;
}
.foto{
    background-color: rgb(243, 224, 200);
    padding: 50px 50px 50px 50px;
    box-shadow: 10px 10px 13px gray;
}
img{
    width: 250px;
    height: 250px;
    box-shadow: 10px 10px 13px gray;
    border-radius: 50%;
}
.texto{
    background-color: rgb(255, 255, 255);
    box-shadow: 10px 10px 13px gray;
    width: 40%;
}
.contenido p {
    font-size: medium;
    text-align: center;
}
.boton1{
    background-color: rgb(247, 247, 247);
    width: 90px;
    height: 50px;
    border-radius: 10px;
    border: 1px solid rgb(4, 2, 14);

    position: absolute;
    top: 450px;
    left: 790px;
    box-shadow: 10px 10px 13px gray;    
}
.boton1:hover{
    background-color:palevioletred;
}
.boton2{
    background-color: rgb(247, 247, 247);
    width: 90px;
    height: 50px;
    border-radius: 10px;
    border: 1px solid rgb(3, 1, 12);

    position: absolute;
    top: 450px;
    left: 940px;
    box-shadow: 10px 10px 13px gray;
}
.boton2:hover{
    background-color:palevioletred;
}


</style>
