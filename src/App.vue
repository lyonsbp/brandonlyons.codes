<template>
  <div id="app">
    <v-app>
      <v-toolbar app dark>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn flat>Home</v-btn>  
          <v-btn flat>Experience</v-btn>
          <v-btn flat>Projects</v-btn>
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
