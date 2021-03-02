<template>
  <div>
    <FabRow />
    <br>
    <v-expansion-panels v-model="panel" multiple>
      <v-expansion-panel>
        <v-expansion-panel-header>Self-hosted</v-expansion-panel-header>
        <v-expansion-panel-content>
          <div class="row">
            <div class="col">
              <v-card outlined>
                <v-card-title>Homeassistant</v-card-title>
                <v-card-text>Open source home automation that puts local control and privacy first; a Home Assistant, HASS Config, and MQTT stack.</v-card-text>
                <v-card-actions>
                  <v-btn depressed text href="https://hassio.jacobhq.xyz/">Launch</v-btn>
                </v-card-actions>
              </v-card>
            </div>
            <div class="col">
              <v-card outlined>
                <v-card-title>Listmonk</v-card-title>
                <v-card-text>A self-hosted newsletter & mailing list manager with performance and features packed into a single binary. Free and open source.</v-card-text>
                <v-card-actions>
                  <v-btn depressed text href="https://mail.jacobhq.xyz/">Launch</v-btn>
                </v-card-actions>
              </v-card>
            </div>
            <div class="col"></div>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>Development</v-expansion-panel-header>
        <v-expansion-panel-content>
          <div class="row">
            <div class="col">
              <v-card outlined>
                <v-card-title>Github</v-card-title>
                <v-card-text>Millions of developers and companies build, ship, and maintain their software on GitHub—the largest and most advanced development platform in the world.</v-card-text>
                <v-card-actions>
                  <v-btn depressed text href="https://github.com/">Launch</v-btn>
                </v-card-actions>
              </v-card>
            </div>
            <div class="col">
              <v-card outlined>
                <v-card-title>Bitbucket</v-card-title>
                <v-card-text>Bitbucket is more than just Git code management. Bitbucket gives teams one place to plan projects, collaborate on code, test, and deploy.</v-card-text>
                <v-card-actions>
                  <v-btn depressed text href="https://bitbucket.org/account/signin/">Launch</v-btn>
                </v-card-actions>
              </v-card>
            </div>
            <div class="col">
              <v-card outlined>
                <v-card-title>Gitpod</v-card-title>
                <v-card-text>Dev Environments Built for the Cloud. Describe your dev environments as code and automate the last missing piece in your DevOps pipeline.</v-card-text>
                <v-card-actions>
                  <v-btn depressed text href="https://gitpod.io/">Launch</v-btn>
                </v-card-actions>
              </v-card>
            </div>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import FabRow from '~/components/fab-row.vue'

export default {
  components: {
    FabRow
  },
  data() {
    return {
      panel: [0]
    }
  }
}
</script>
