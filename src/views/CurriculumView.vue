<template>
  <div>
    <main>
      <NavComponent />
    </main>
  <CurriculumComponent />
  <footer>
    <FooterComponent/>
  </footer>
  </div>
</template>
<script>
import CurriculumComponent from '@/components/CurriculumComponent.vue'
import NavComponent from '../components/NavComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'
export default{
  name:'CurriculumView',
  components:{
    CurriculumComponent,
    NavComponent,
    FooterComponent

  }
}
</script>
