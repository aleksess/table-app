<template>
<div id="app">
  <v-app>
    <v-app-bar color="primary" dark hide-on-scroll="true"  app><v-toolbar-title>Table-App</v-toolbar-title></v-app-bar>
    <v-content><router-view/></v-content>
  </v-app>
</div>
</template>

<script>

export default {
  name: 'App'
}
</script>
