<template>
  <div class="home">
    <v-parallax src="../assets/background.jpg" height="600px">
      <v-layout align-center>
        <v-flex xs12>
          <v-jumbotron dark height="250px" color="grey darken-4" class="elevation-5" ripple>
            <h3 class="display-3">Hello, friend</h3>
            <span class="subheading">My name is Brandon Lyons
              <br/>
              Learning new technologies to build a cleaner user experience is my idea of fun
            </span>
          </v-jumbotron>
          
        </v-flex>
      </v-layout>
    </v-parallax>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Vuetify from 'vuetify';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

Vue.use(Vuetify);

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
