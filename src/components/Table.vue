<template>
    <div>
    <input type="text" placeholder="Podaj film" @keyup.enter="HandleClick" v-model="inputField"/>
    <button v-on:click="HandleClick">Add a movie</button>
    <v-data-table
        :headers="TableHeaders"
        :items="movies"
        class="elevation-1"
    />
    </div>
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
          const response = await fetch(`http://api.tvmaze.com/search/shows?q=${this.inputField}`)
          const responseParsed = await response.json()
          console.log(responseParsed)
          this.movies = responseParsed
        }
        myFetch()
      }
    }
  }
/* data: () => {
    return {
      headers:
      [
        {
          text: 'Index',
          align: 'left',
          sortable: 'false',
          value:
        }
      ]
    }
  } */
}
</script>

<style scoped>
    input{
        border: 1px solid black;
    }
    button{
        border: 1px black solid;

    }
</style>
