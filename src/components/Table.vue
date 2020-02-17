<template>
  <v-card class="pa-10">
    <v-row align="center" justify="center">
      <v-col cols="12" md="6">
        <v-text-field @keyup.enter="HandleClick" label="Title" v-model="inputField"></v-text-field>
      </v-col>
      <v-col cols="auto">
        <v-btn color="primary" @click="HandleClick"> <v-icon>mdi-magnify</v-icon>  Search movies</v-btn>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <v-data-table :headers="TableHeaders" :items="Movies" />
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'Table',
  computed: {
    Movies () {
      return this.$store.state.SMovies
    }
  },
  data: function () {
    return {
      inputField: '',
      TableHeaders: [
        {
          text: 'Title',
          sortable: false,
          value: 'show.name'
        },
        {
          text: 'Language',
          value: 'show.language'
        },
        {
          text: 'Origin Country',
          value: 'show.network.country.name'
        },
        {
          text: 'Release Date',
          value: 'show.premiered'
        }
      ]
    }
  },
  methods: {
    HandleClick () {
      if (this.inputField !== '') {
        const myFetch = async () => {
          const response = await fetch(
            `http://api.tvmaze.com/search/shows?q=${this.inputField}`
          )
          const responseParsed = await response.json()
          console.log(responseParsed)
          this.$store.commit('setMovies', responseParsed)
        }
        myFetch()
      }
    }
  }
}
</script>
