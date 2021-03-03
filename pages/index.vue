<template>
  <div>
    <FabRow />
    <br>
    <v-expansion-panels v-model="panel" multiple depressed root>
      <v-expansion-panel depressed>
        <v-expansion-panel-header>Self-hosted</v-expansion-panel-header>
        <v-expansion-panel-content>
          <div class="row">
            <div class="col">
              <v-card outlined>
                <v-card-title>Homeassistant</v-card-title>
                <v-card-text>Open source home automation that puts local control and privacy first; a Home Assistant, HASS Config, and MQTT stack.</v-card-text>
                <v-card-actions>
                  <v-btn depressed href="https://hassio.jacobhq.xyz/" color="primary" text target="_blank">Launch</v-btn>
                </v-card-actions>
              </v-card>
            </div>
            <div class="col">
              <v-card outlined>
                <v-card-title>Listmonk</v-card-title>
                <v-card-text>A self-hosted newsletter & mailing list manager with performance and features packed into a single binary. Free and open source.</v-card-text>
                <v-card-actions>
                  <v-btn depressed href="https://mail.jacobhq.xyz/" color="primary" text target="_blank">Launch</v-btn>
                </v-card-actions>
              </v-card>
            </div>
            <div class="col"></div>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel depressed>
        <v-expansion-panel-header>Development</v-expansion-panel-header>
        <v-expansion-panel-content>
          <div class="row">
            <div class="col">
              <v-card outlined>
                <v-card-title>Github</v-card-title>
                <v-card-text>Millions of developers and companies build, ship, and maintain their software on GitHub—the largest and most advanced development platform in the world.</v-card-text>
                <v-card-actions>
                  <v-btn depressed href="https://github.com/" color="primary" text target="_blank">Launch</v-btn>
                </v-card-actions>
              </v-card>
            </div>
            <div class="col">
              <v-card outlined>
                <v-card-title>Bitbucket</v-card-title>
                <v-card-text>Bitbucket is more than just Git code management. Bitbucket gives teams one place to plan projects, collaborate on code, test, and deploy.</v-card-text>
                <v-card-actions>
                  <v-btn depressed href="https://bitbucket.org/account/signin/" color="primary" text target="_blank">Launch</v-btn>
                </v-card-actions>
              </v-card>
            </div>
            <div class="col">
              <v-card outlined>
                <v-card-title>Gitpod</v-card-title>
                <v-card-text>Dev Environments Built for the Cloud. Describe your dev environments as code and automate the last missing piece in your DevOps pipeline.</v-card-text>
                <v-card-actions>
                  <v-btn depressed href="https://gitpod.io/" color="primary" text target="_blank">Launch</v-btn>
                </v-card-actions>
              </v-card>
            </div>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel depressed>
        <v-expansion-panel-header>School apps</v-expansion-panel-header>
        <v-expansion-panel-content>
          <div class="row">
            <div class="col">
              <v-card outlined>
                <v-card-title>Google classroom</v-card-title>
                <v-card-text>A free and easy tool helping educators efficiently manage and assess progress, while enhancing connections with learners from school, from home, or on the go.</v-card-text>
                <v-card-actions>
                  <v-btn depressed href="https://classroom.google.com/u/1/h" color="primary" target="_blank">Launch</v-btn>
                  <v-btn depressed text href="https://classroom.google.com/u/0/h" color="primary" target="_blank">Launch on managed chromebook</v-btn>
                </v-card-actions>
              </v-card>
            </div>
            <div class="col">
              <v-card outlined>
                <v-card-title>Google drive</v-card-title>
                <v-card-text>Easy and secure access to all of your content. Store, share and collaborate on files and folders from any mobile device, tablet or computer</v-card-text>
                <v-card-actions>
                  <v-btn depressed href="https://drive.google.com/u/1/h" color="primary" target="_blank">Launch</v-btn>
                  <v-btn depressed text href="https://drive.google.com/u/0/h" color="primary" target="_blank">Launch on managed chromebook</v-btn>
                </v-card-actions>
              </v-card>
            </div>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel depressed>
        <v-expansion-panel-header>Documentation</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-subheader>Javascript frameworks</v-subheader>
          <div class="row">
            <div class="col">
              <v-card outlined>
                <v-card-title>Vuejs docs</v-card-title>
                <v-card-text>Vuejs is the progressive javaScript framework. It's also an incrementally adoptable ecosystem that scales between a library and a full-featured framework.</v-card-text>
                <v-card-actions>
                  <v-btn depressed text href="https://vuejs.org/" color="primary" target="_blank">Launch</v-btn>
                </v-card-actions>
              </v-card>
            </div>
            <div class="col">
              <v-card outlined>
                <v-card-title>Nuxtjs docs</v-card-title>
                <v-card-text>Build your next Vue.js application with confidence using NuxtJS. An open source framework making web development simple and powerful.</v-card-text>
                <v-card-actions>
                  <v-btn depressed text href="https://nuxtjs.org/" color="primary" target="_blank">Launch</v-btn>
                </v-card-actions>
              </v-card>
            </div>
            <div class="col">
              <v-card outlined>
                <v-card-title>Nextjs docs</v-card-title>
                <v-card-text>Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more.</v-card-text>
                <v-card-actions>
                  <v-btn depressed text href="https://nextjs.org/" color="primary" target="_blank">Launch</v-btn>
                </v-card-actions>
              </v-card>
            </div>
          </div>
          <br>
          <v-divider></v-divider>
          <br>
          <v-subheader>UI frameworks</v-subheader>
          <div class="row">
            <div class="col">
              <v-card outlined>
                <v-card-title>Vuetify docs</v-card-title>
                <v-card-text>Vuetify is a Vue UI Library with beautifully handcrafted Material Components. No design skills required — everything you need to create amazing applications is at your fingertips.</v-card-text>
                <v-card-actions>
                  <v-btn depressed text href="https://vuetifyjs.com/en/" color="primary" target="_blank">Launch</v-btn>
                </v-card-actions>
              </v-card>
            </div>
            <div class="col">
              <v-card outlined>
                <v-card-title>Bootstrap docs</v-card-title>
                <v-card-text>Quickly design responsive sites with Bootstrap, the world’s most popular open source UI toolkit, featuring Sass variables, responsive grid system, extensive components, and JavaScript plugins.</v-card-text>
                <v-card-actions>
                  <v-btn depressed text href="https://getbootstrap.com/" color="primary" target="_blank">Launch</v-btn>
                </v-card-actions>
              </v-card>
            </div>
            <div class="col">
              <v-card outlined>
                <v-card-title>Bootstrap vue docs</v-card-title>
                <v-card-text>With BootstrapVue you can build responsive, mobile-first, and ARIA accessible projects on the web using Vue.js and the world's most popular front-end CSS library — Bootstrap v4.</v-card-text>
                <v-card-actions>
                  <v-btn depressed text href="https://bootstrap-vue.org/" color="primary" target="_blank">Launch</v-btn>
                </v-card-actions>
              </v-card>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <v-card outlined>
                <v-card-title>TailwindCSS docs</v-card-title>
                <v-card-text>A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.</v-card-text>
                <v-card-actions>
                  <v-btn depressed text href="https://tailwindcss.com/" color="primary" target="_blank">Launch</v-btn>
                </v-card-actions>
              </v-card>
            </div>
            <div class="col">
              <v-card outlined>
                <v-card-title>Geist UI docs</v-card-title>
                <v-card-text>Geist is an open source design system for building modern websites and applications. Geist UI originated from Zeit UI, a beautiful UI libary crafted by Vercel.</v-card-text>
                <v-card-actions>
                  <v-btn depressed text href="https://geist-ui.dev/" color="primary" target="_blank">Launch</v-btn>
                </v-card-actions>
              </v-card>
            </div>
            <div class="col">
              <v-card outlined>
                <v-card-title>Desikit docs</v-card-title>
                <v-card-text>A beautiful design system based on bootstrap vue, and heavily inspired by Atlassian design. Desikit was crafefted by Desica, for use on its internal websites.</v-card-text>
                <v-card-actions>
                  <v-btn depressed text href="https://beta.kit.desica.uk/" color="primary" target="_blank">Launch</v-btn>
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
