<template>
  <div class="row fab-row">
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn fab x-large v-bind="attrs" v-on="on" href="https://hassio.jacobhq.xyz/" color="primary" depressed target="_blank">
            <v-icon>mdi-home</v-icon>
          </v-btn>
        </template>
        <span>Homeassistant</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn fab x-large v-bind="attrs" v-on="on" href="http://mail.jacobhq.xyz/" color="primary" depressed target="_blank">
            <v-icon>mdi-email</v-icon>
          </v-btn>
        </template>
        <span>Listmonk</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn fab x-large v-bind="attrs" v-on="on" href="http://github.com/" color="primary" depressed target="_blank">
            <v-icon>mdi-github</v-icon>
          </v-btn>
        </template>
        <span>GitHub</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn fab x-large v-bind="attrs" v-on="on" href="https://dashboard.balena-cloud.com/apps" color="primary" depressed target="_blank">
            <v-icon>mdi-package-variant-closed</v-icon>
          </v-btn>
        </template>
        <span>Balena</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn fab x-large v-bind="attrs" v-on="on" href="http://amazing-emails.vercel.app/" color="primary" depressed target="_blank">
            <v-icon>mdi-fountain-pen-tip</v-icon>
          </v-btn>
        </template>
        <span>Scribe</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn fab x-large v-bind="attrs" v-on="on" href="https://desica.atlassian.net/jira" color="primary" depressed target="_blank">
            <v-icon>mdi-jira</v-icon>
          </v-btn>
        </template>
        <span>Jira</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn fab x-large v-bind="attrs" v-on="on" href="https://bitbucket.org/account/signin/" color="primary" depressed target="_blank">
            <v-icon>mdi-bitbucket</v-icon>
          </v-btn>
        </template>
        <span>Bitbucket</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn fab x-large v-bind="attrs" v-on="on" href="https://dash.cloudflare.com/" color="primary" depressed target="_blank">
            <v-icon>mdi-cloud-tags</v-icon>
          </v-btn>
        </template>
        <span>Cloudflare</span>
      </v-tooltip>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
