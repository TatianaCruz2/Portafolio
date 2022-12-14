<template>
    <div>
        <main>
            <NavComponent/>
        </main>
        <contactoComponent />
        <footer>
            <FooterComponent/>
        </footer>
    </div>
</template>
<script>
import ContactoComponent from '../components/ContactoComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'
import NavComponent from '../components/NavComponent.vue'
export default{
    name:'ContactoView',
    components:{
        ContactoComponent,
        NavComponent,
        FooterComponent

    }
}
</script>