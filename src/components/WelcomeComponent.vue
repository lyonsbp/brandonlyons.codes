<template>
    <v-jumbotron dark height="200px" color="grey darken-4" class="elevation-10 mt-4" ripple>
        <h3 class="display-3 mt-4">Hello, friend</h3>
        <span class="subheading">My name is Brandon Lyons
            <br/>
            Learning new technologies to build a cleaner user experience is my idea of fun
        </span>
    </v-jumbotron>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class WelcomeComponent extends Vue {
}
</script>

<style lang="scss" scoped>
  
</style>
