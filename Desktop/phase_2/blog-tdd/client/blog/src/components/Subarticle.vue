<template>
  <div>
    <div v-for='(article , idx) in articles'>
      <h3> {{article.title}} </h3><br>
      <p> {{article.body}} </p>
    </div>
  </div>
</template>

<script>
// var axios = require('axios')
export default {
  props: ['id'],
  data () {
    return {
      articles: []
    }
  },
  methods: {
    getArticles () {
      // console.log('halo sblm axios')
      // var self = this
      this.$http.get(`/${this.id}`)
      // axios.get('http://localhost:3000')
      .then((data) => {
        this.articles = data.data
        console.log(this.articles, 'this is self articles per id')
      })
      .catch((error) => {
        console.log(error)
      })
    }
  },
  mounted () {
    this.getArticles()
  },
  watch: {
    id () {
      this.getArticles()
    }
  }
}
</script>

<style>

</style>
