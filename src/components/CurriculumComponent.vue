<template>
    <main>
        <div>
            <header>
                <section class="color">
                </section>
            </header>
        </div>
        <div>
            <p class="estudio"><strong>Educación</strong></p>
            <header class="flex">
                <section class="año">
                    <h1>2011 - 2021</h1>
                </section>
                <section class="texto">
                    <div>
                        <p class="contenedor">Termine mis estudios Basica Primaria y Basica Secundaria, en la Institucion Educativa Palace</p>
                    </div>
                </section>
            </header>
        </div>
        <div>
            <header class="flex-box">
                <section class="año1">
                    <h1>2022 - 2024</h1>
                </section>
                <section class="texto1">
                    <div>
                        <p class="contenedor1">Tecnologo En Analisis Y Sistemas de Informacion en el Centro de Teleinformatica Y Produccion <Industrial-></Industrial->SENA</p>
                    </div>
                </section>
            </header>
        </div>
        <div>
            <header class="flex-box2">
                <section class="hab">
                    <h1>Habilidades</h1>
                </section>
                <section class="texto2">
                    <ul>
                        <li>Trabajo En Equipo</li>
                        <li>Empatía</li>
                        <li>Flexibilidad y Adaptacion</li>
                        <li>Relaciones Interpersonales</li>
                    </ul>
                </section>
            </header>
        </div>
    </main>
    
</template>

<script>
export default{
    name: 'CurriculumComponent',
    data(){
    }
}
</script>

<style scoped>
.color{
background-color: antiquewhite;
width: 100%;
height: 1150px;
}
h1{
    text-align: center;
}
.estudio{
    font-family:'Times New Roman', Times, serif;
    font-size: 26px;
    position: absolute;
    top: 150px;
    left: 400px;
    color: black;
}
.flex{
    display: flex;
    margin: auto;
    border: 1px solid black;
    width: 50%;
    height: 200px;
    background-color: rgb(255, 255, 255);

    position: absolute;
    top: 250px;
    left: 400px;

    box-shadow: 10px 10px 13px gray;
}
.año{
    width: 50%;
    margin: auto;
    color:dodgerblue;
}
.texto{ 
    width: 50%;
    margin: auto;
}
.contenedor{
    font-size: medium;
    text-align: left;
}
.flex-box{
    display: flex;
    margin: auto;
    border: 1px solid black;
    width: 50%;
    height: 200px;
    background-color: rgb(255, 255, 255);

    position: absolute;
    top: 510px;
    left: 400px;

    box-shadow: 10px 10px 13px gray;
}
.año1{
    width: 50%;
    margin: auto;
    color:dodgerblue;
}
.texto1{
    width: 50%;
    margin: auto;
}
.contenedor1{
    font-size: medium;
    text-align: left;
}
.flex-box2{
    display: flex;
    margin: auto;
    border: 1px solid black;
    width: 50%;
    height: 200px;
    background-color: rgb(255, 255, 255);

    position: absolute;
    top: 770px;
    left: 400px;

    box-shadow: 10px 10px 13px gray;
}
.hab{
    width: 50%;
    margin: auto;
    color:dodgerblue;
}
.texto2{
    width: 50%;
    margin: auto;
}
.contenedor2{
    font-size: medium;
    text-align: left;
}
</style>