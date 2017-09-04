<template>
  <div id="app">

    <h1>Article</h1>
    <Article />
  </div>
</template>

<script>

import Article from '@/components/Article'
export default {
  name: 'app',
  components: {
    Article
  }
  // ,
  // methods: {
  //
  //   terimaDuit (payloadDuit) {
  //     console.log('Anak bapak yang soleh habis trf duit sebesar: ', payloadDuit)
  //     this.saldoRekening += payloadDuit
  //   }
  // },
  // data () {
  //   return {
  //     // msg: 'Hello Jack'
  //     // ,
  //     // saldoRekening: 100000
  //   }
  // }
}
</script>
