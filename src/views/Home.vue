<template>
  <div class="home">
    <v-layout id="home-section">
      <v-flex xs12 lg10 offset-lg1>
        <welcome-component></welcome-component>          
      </v-flex>
    </v-layout>

    <v-layout row wrap id="experience-section">
      <v-flex xs12 lg10 offset-lg1>
        <experience-component></experience-component>
      </v-flex>
    </v-layout>

    <v-layout row wrap id="projects-section">
      <v-flex xs12 lg10 offset-lg1>
        <projects-component></projects-component>
      </v-flex>
    </v-layout>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Vuetify from 'vuetify';
import WelcomeComponent from '@/components/WelcomeComponent.vue';
import ExperienceComponent from '@/components/ExperienceComponent.vue';
import ProjectsComponent from '@/components/ProjectsComponent.vue';

Vue.use(Vuetify);

@Component({
  components: {
    WelcomeComponent,
    ExperienceComponent,
    ProjectsComponent,
  },
})
export default class Home extends Vue {}
</script>

<style scoped>
  #home-section {
    height: 100vh;
  }
  #experience-section {
    height: 100vh;
  }
  #projects-section {
    height: 100vh;
  }
</style>