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

        <li class="nav-item" v-if='idx == 0'><a class="nav-link active" :href="`#scroll${idx}`">{{article.title}}</a></li>


      <li class="nav-item" v-if='idx >= 1'><a class="nav-link" :href="`#scroll${idx}`">{{article.title}}</a></li>

    </ul>
  </div>
  <div class="col-sm-9 scrollspy-example" data-spy="scroll" data-target="#spy" >
      <div id="exampleAccordion" data-children=".item">

        <div v-for='(article , idx) in articles'>
        <div :id="`scroll${idx}`">
        <div class="item">
          <a data-toggle="collapse" data-parent="#exampleAccordion" :href="`#sc${idx}`" aria-expanded="false" aria-controls="exampleAccordion2">
            <h2> {{article.title}} </h2>
            {{article.description}}
          </a>
          <div :id="`sc${idx}`" v-if='idx == 0' class="collapse show" role="tabpanel">
            <p class="mb-3">
                {{article.body}}
            </p>
          </div>

          <div :id="`sc${idx}`" v-if='idx > 0' class="collapse" role="tabpanel">
            <p class="mb-3">
                {{article.body}}
            </p>
          </div>
        </div>
      </div>


    </div>
  </div>
    </div>
  </div>


</template>

<script>
var axios = require('axios')
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
      var self = this
      axios.get('http://localhost:3000')
      .then((data) => {
        console.log(data.data)
        self.articles = data.data
        console.log(self.articles, 'this is self articles')
      })
      .catch((error) => {
        console.log(error)
      })
    }
  },
  mounted () {
    this.getArticles()
  }
}
</script>

<style>

</style>
