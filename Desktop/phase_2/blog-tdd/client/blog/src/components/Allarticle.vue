<template>

<div>
  <div v-for='(article , idx) in articles'>
    <div :id="`scroll${idx}`">
      <div class="item">
        <router-link v-if='article.tag === "blog"' :to="`/writings/${article._id}`"><h2> {{article.title}} </h2>
        {{article.description}}</router-link>

        <router-link v-if='article.tag === "book"' :to="`/books/${article._id}`"><h2> {{article.title}} </h2>
        {{article.description}}</router-link>
      </div>
    </div>
  </div>
</div>
</template>

<script>
// var axios = require('axios')
export default {
  // props: ['perarticle'],
  data () {
    return {
      articles: []
    }
  },
  methods: {
    getArticles () {
      console.log('halo sblm axios')
      if (this.$route.fullPath === `/writings/${this.$route.params.id}` || this.$route.fullPath === `/writings`) {
        this.$http.get('/blog')
        .then((data) => {
          this.articles = data.data
          console.log(this.articles, 'this is self blog articles')
        })
        .catch((error) => {
          console.log(error)
        })
      }
      if (this.$route.fullPath === `/books/${this.$route.params.id}` || this.$route.fullPath === `/books`) {
        this.$http.get('/book')
        .then((data) => {
          this.articles = data.data
          console.log(this.articles, 'this is self book articles')
        })
        .catch((error) => {
          console.log(error)
        })
      }
    }
  },
  mounted () {
    this.getArticles()
  },
  watch: {
    '$route' (to, from) {
      this.getArticles()
    }
  }
}
</script>

<style>

</style>
