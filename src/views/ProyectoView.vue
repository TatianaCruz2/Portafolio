<template>
    
    <div>
        <main>
            <NavComponent/>
        </main>
        <ProyectoComponent />
        <GaleriaComponent/>
        <footer>
            <footerComponent/>
        </footer>
    </div>
</template>
<script>
import ProyectoComponent from '@/components/ProyectoComponent.vue';
import NavComponent from '../components/NavComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';
import GaleriaComponent from '../components/GaleriaComponent.vue';

export default{
 name:'ProyectoView',
 components:{
    ProyectoComponent,
    NavComponent,
  FooterComponent,
  GaleriaComponent
}
}
</script>
