<template>
  <v-card>
    <v-row align="center" justify="center">
      <v-col cols="6" xs="6">
        <v-text-field @keyup.enter="HandleClick" label="Type in title" v-model="inputField"></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-btn width="100%" @click="HandleClick">Search movies</v-btn>
      </v-col>
    </v-row>
    <v-row :align="center" :justify="center">
      <v-col cols="12">
        <v-data-table :headers="TableHeaders" :items="movies" />
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'Table',
  data: function () {
    return {
      inputField: '',
      TableHeaders: [
        {
          text: 'Title',
          align: 'left',
          sortable: false,
          // eslint-disable-next-line no-undef
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
      ],
      movies: []
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
          this.movies = responseParsed
        }
        myFetch()
      }
    }
  }
}
</script>
