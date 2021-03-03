<template>
  <v-app>
    <v-app-bar flat fixed style="height: 64px;">
      <v-toolbar-title>Start</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on" @click="toggle()">
            <v-icon v-show="$vuetify.theme.dark">mdi-moon-waxing-crescent</v-icon>
            <v-icon v-show="!$vuetify.theme.dark">mdi-white-balance-sunny</v-icon>
          </v-btn>
        </template>
        <span>Toggle dark mode</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-on="on" v-bind="attrs" href="https://github.com/jacobhq/start">
            <v-icon>mdi-star</v-icon>
          </v-btn>
        </template>
        <span>Star on GitHub</span>
      </v-tooltip>
    </v-app-bar>
    <main style="margin-top: 75px; padding: 25px; margin-bottom: 64px;">
      <Nuxt />
    </main>
    <v-footer padless absolute>
      <v-col class="text-center" cols="12">&copy; {{ new Date().getFullYear() }} <strong>&middot; JacobHQ</strong></v-col>
    </v-footer>

  </v-app>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  methods: {
    toggle() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
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
