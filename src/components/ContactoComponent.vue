<template>
    <main>
        <div>
            <header>
                <section class="color"></section>
            </header>
        </div>
        <div>
            <section class="contacto">
            <form action="grbbar.html" method="get"></form>
            <p>
                Nombre: <br> <br> <input type="text" maxlength="50" placeholder=" Ingresar Nombres">
            </p>
            <p>
                Apellido: <br> <br> <input type="text" maxlength="50" placeholder=" Ingresar Apellidos"><br>
            </p>
            <p>
               Asunto: <br> <br> <input type="text" maxlength="50" placeholder="Ingresar Asunto del Mensaje "><br>
            </p>
            <p>
              Mensaje: <br> <br> <input type="number" maxlength="50" placeholder="Ingresar Numero"><br>
            </p>
        </section>
        </div>
    <div>
        <button class="boton" @click="$router.push('/Contacto')">Contacto</button>
    </div>
    </main>
</template>

<script>
export default{
    name: 'ContactoComponent',
    data(){
    }
}
</script>

<style scoped>
.color{
background-color: antiquewhite;
width: 100%;
height: 500px;

}
p{
    text-align: center;
}

.contacto{
    background-color: rgb(253, 255, 255);
    font-family:'Times New Roman', Times, serif;
    padding: 10px 10px 10px 10px;
    border: 1px solid black;
    border-radius: 6px;
    margin: 0 auto;
    width: 300px;
    text-align: left;
    box-shadow: 10px 10px 13px gray;

    position: absolute;
    top: 150px;
    left: 500px;
}
.boton{
    background-color: rgb(253, 253, 253);
    width: 90px;
    height: 50px;
    border-radius: 10px;
    border: 1px solid rgb(3, 1, 12);

    position: absolute;
    top: 490px;
    left: 620px;
    box-shadow: 10px 10px 13px gray;
}
.boton:hover{
    background-color:palevioletred;
}

</style>