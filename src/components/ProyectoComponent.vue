<template>
    <main>
        <div>
            <header>
                <section class="color"></section>
            </header>
        </div>
        <div>
            <p class="proyect"> <strong>Proyecto</strong></p>
        </div>
        <div>
            <header class="flex-box">
                <section class="proyecto">
                    <h1>SinTapujos</h1>
                </section>
                <section class="descripcion">
                    <div>
                        <p class="text">Es un Aplicativo movil con soporte web que busca fomentar la Educacion Sexual en los Jovenes, a traves de Informacion clara y consiva de igual forma brindando para los aprendices SENA acompañamiento psicologico por parte de Bienestar al Aprendiz, trasmedio de citas en la plataforma. </p>
                    </div>
                </section>
            </header>
        </div>
    </main>
</template>

<script>
export default{
    name:'ProyectoComponent',
    data(){
    }
}
</script>

<style scoped>
.proyect{
    font-family: Verdana, Geneva, Tahoma, sans-serif     ;
    position: absolute;
    top: 200px;
    left: 400px;
    color: black;
}
.color{
background-color: antiquewhite;
width: 100%;
height: 600px;
}

.flex-box{
    display: flex;
    margin: auto;
    border: 1px solid black;
    width: 50%;
    height: 200px;
    background-color: rgb(255, 255, 255);

    position: absolute;
    top: 300px;
    left: 400px;

    box-shadow: 10px 10px 13px gray;
}
h1{
    text-align: center;
  font-family:'Times New Roman', Times, serif;
}
.proyecto{
    width: 50%;
    margin: auto;
    
}
.descripcion{ 
    width: 50%;
    margin: auto;
}
.text {
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: medium;

    text-align: left;
}
</style>