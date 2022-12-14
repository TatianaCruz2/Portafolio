<template>
  <div class="home">
    <main>
      <NavComponent />
    </main>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <footer>
      <FooterComponent/>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import NavComponent from '../components/NavComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    NavComponent,
    FooterComponent
  }
}
</script>
