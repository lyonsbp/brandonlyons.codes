<template>
  <div id="app">
    <v-app>
      <v-toolbar app dark>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn @click="$vuetify.goTo(0)" flat>Home</v-btn>  
          <v-btn @click="$vuetify.goTo('#experience-section', { offset: -80 })" flat>Experience</v-btn>
          <v-btn @click="$vuetify.goTo('#projects-section', { offset: -80 })" flat>Projects</v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-content>
        <v-container fluid>
          <router-view/>
        </v-container>
      </v-content>
      <v-footer app></v-footer>
    </v-app>  
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center; 
  color: #ffffff;
  background-color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
