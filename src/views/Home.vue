<template>
  <div id="container">
    <div class="intro">
      <h1>Bienvenue sur le portfolio de William Schmitt</h1>
      <h2>développeur web fullstack</h2>
    </div>
    <div id="matrix">
    </div>
 
    <div id="cards">
    <div class = "description">
          <h2>Présentation</h2>
          <p>Salut moi c'est William, développeur fullstack </p>
    </div>
    <div class="projects"> 
          <h2>Mes projets</h2>
          <ProjectsList />
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: "HomePage",
  mounted() {
    const matrix = document.getElementById('matrix');
    const total = window.innerWidth * window.innerHeight / 250
    for (let i = 0; i < total; i++) 
      matrix.innerText += Math.floor(Math.random() * 2)
  },
}
</script>

<style scoped>

#container {

  color: #008F11;
  background-color: #0D0208;
}

.description {
  border: #008F11 solid;
  background-color: #0D0208;
  padding: 5px;
  z-index: 2;
  opacity: 2;
}

.projects {
  border: #008F11 solid;
  background-color: #0D0208;
  padding: 5px;
  z-index: 2;
  opacity: 2;
}

#matrix {
  position: absolute;
  overflow: hidden;
  word-break: break-all;
  writing-mode: vertical-lr;
  text-orientation: upright;
  user-select: none;
  opacity: 0.7;
  background-color: #0D0208;
  height: 100%;

}

#cards {

  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  writing-mode: horizontal-tb;
  margin-top: 100px;
  background-color: #0D0208;
}


</style>

