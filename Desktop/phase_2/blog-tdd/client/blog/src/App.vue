<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>

import Navbar from '@/components/Navbar'
export default {
  components: {Navbar}
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
// }
</script>
