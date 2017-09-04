Vue.component('jumbotron', {
template: `
<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-3">{{siswa.name}}</h1>
    <p class="lead">{{siswa.hobi}}</p>
  </div>
</div>`,
props: ['siswa']
})

new Vue({
  el: '#app',
  data: {
    students:[

      {id:2, name:'jaenal', hobi:'nari'},
      {id:3, name:'nasikin', hobi:'joget'}
    ]
  }
})
