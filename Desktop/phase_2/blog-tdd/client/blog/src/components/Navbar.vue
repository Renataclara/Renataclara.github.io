<template>
  <nav class="navbar navbar-expand-sm navbar-light bg-faded">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-content" aria-controls="nav-content" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Brand -->
    <a class="navbar-brand" href="#"><h3>Renata Clara Kumala</h3></a>

    <!-- Links -->
    <div class="collapse navbar-collapse justify-content-end" id="nav-content">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/writings" class="nav-link" >Writings</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/books" class="nav-link">Love for Books</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link" >About</router-link>
        </li>
      </ul>
    </div>
  </nav>

</template>

<script>

export default {

}
</script>

<style>
.nav-pills .nav-link.active {
  background-color: pink;
}

a, h3, .nav-link {
  color: white;
}

h3{
  font-family: 'Orbitron', sans-serif;
  /*font-family: 'Sedgwick Ave', cursive;*/
}

h2{
  font-family: 'Abril Fatface', cursive;
}

a , p{
  font-family: 'Comfortaa', cursive;
}

.navbar-light .navbar-nav .nav-link {
  color:white
}
</style>
