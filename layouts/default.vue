<template>
  <v-app>
    <v-app-bar flat fixed style="height: 64px;">
      <v-toolbar-title>Start</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon href="https://github.com/jacobhq/start">
        <v-icon>mdi-star</v-icon>
      </v-btn>
    </v-app-bar>
    <main style="margin-top: 75px; padding: 25px;">
      <Nuxt />
    </main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style>
.fab-row button, .fab-row a {
  margin-left: 15px;
  margin-bottom: 15px;
}
</style>
