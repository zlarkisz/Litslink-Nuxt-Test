<template>
  <v-app>
    <v-navigation-drawer
      app
      temporary
      v-model="drawer"
      >
      <v-list color="red darken-4">
        <v-list-item
        v-for="(link, i) of links"
        :key="i"
        @click="goToLink(link.url)"
        >
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="link.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dark color="red darken-4">
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        class="d-md-none d-lg-flex"
      ></v-app-bar-nav-icon>
      <v-toolbar-title><nuxt-link to="/" class="title">"The Lord of the Rings"</nuxt-link></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="d-sm-none d-md-flex d-none">
        <v-btn
          v-for="(link, i) in links"
          :key="i"
          text
          @click="goToLink(link.url)"
          >
          <v-icon left>{{ link.icon }}</v-icon>
          {{ link.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

      <nuxt />
  </v-app>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      drawer: false,
      links: [
        {title: 'Book', icon: 'menu_book', url: '/book'},
        {title: 'Movie', icon: 'local_movies', url: '/movie'},
        {title: 'Character', icon: 'folder_shared', url: '/character'},
        {title: 'Quote', icon: 'insert_comment', url: '/quote'},
        {title: 'Chapter', icon: 'list', url: '/chapter'},
      ]
    }
  },
  methods: {
    goToLink(e) {
      this.$router.push(e)
    }
  }
}
</script>

<style lang="scss" scoped>
  .title {
    text-align: center;
    text-decoration: none !important;
    color: #FFFFFF;
  }
  .container {
    margin: 64px 0 0 0;
    padding: 0 !important;

    @media only screen and(max-width: 960px) {
      margin: 56px 0 0 0 !important;
    }
  }
</style>

<style lang="scss">
  h1 {
    text-align: center;
  }
</style>