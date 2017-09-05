<template>
  <!-- <div class="row">
    <div class="col-sm-3" id="spy" v-for='article in articles'>
      <ul class="nav nav-pills flex-column">
        <li class="nav-item"><a class="nav-link active" href='#scroll`${article._id}`'>{{article.title}}</a></li>
      </ul>
    </div>
    <div class="col-sm-9 scrollspy-example" data-spy="scroll" data-target="#spy" v-for='article in articles'>
      <div id="scroll`${article._id}`">
        <h2>{{article.title}}</h2>
        <p>
          {{article.body}}
        </p>
      </div>
    </div>
  </div> -->


  <div class="row">
  <div class="col-sm-3" id="spy" >
    <ul class="nav nav-pills flex-column" v-for='(article , idx) in articles'>


<!-- <router-link v-if='idx == 0' class="nav-link active" :to="`/writings/${article._id}`" :href="`#scroll${idx}`"> {{article.title}} {{ $route.params.id }}}}</router-link> -->
<router-link v-if='article.tag === "blog"' :class="{'active': $route.params.id == article._id}" class="nav-link" :to="`/writings/${article._id}`" :href="`#scroll${idx}`"> {{article.title}} </router-link>
<router-link v-if='article.tag === "book"' :class="{'active': $route.params.id == article._id}" class="nav-link" :to="`/books/${article._id}`" :href="`#scroll${idx}`"> {{article.title}} </router-link>



    </ul>

  </div>
  <div class="col-sm-9 scrollspy-example" data-spy="scroll" data-target="#spy" >
    <div id="exampleAccordion" data-children=".item">

      <router-view></router-view>

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
      // var self = this
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
      // axios.get('http://localhost:3000')
    }
  },
  mounted () {
    this.getArticles()
    console.log(this.$route.fullPath, 'ini fullPath')
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
