<template>
  <section id="artPage" class="heroWrapper">

      <h2>Looking for a creative, web developer?</h2>
      <p>Here's how I look on paper.</p>

      <br>


        <section class="paper">
          <section class="resume">
            <header>
              <h1>Sean A. Yager</h1>
              <h2>Designer | Illustrator | Puzzle Solver | Friendly Guy</h2>
            </header>


            <section class="skills">
              <h2>Skills</h2>  
                <section class="flex2Col">
                  <p><v-icon name="keyboard"></v-icon> Mac &amp; Windows OSX</p>
                  <p><v-icon name="file-code"></v-icon> HTML 5</p>
                  <p><v-icon name="code"></v-icon> CSS 3</p>
                  <p><v-icon name="laptop-code"></v-icon> Javascript ES6</p>
                  <p><v-icon name="cubes"></v-icon> Visual Studio Code</p>
                  <p><v-icon name="code-branch"></v-icon> GitHub</p>
                  <p><v-icon name="people-carry"></v-icon> Node.js</p>
                  <p><v-icon name="cubes"></v-icon> Vue.js</p>
                  <p><v-icon name="cubes"></v-icon> React.js</p>
                  <p><v-icon name="fire-alt"></v-icon> Google Firebase</p>
                  <p><v-icon name="database"></v-icon> SQL</p>
                  <p><v-icon name="camera"></v-icon> Adobe Photoshop</p>
                  <p><v-icon name="bezier-curve"></v-icon> Adobe Illustrator</p>
                  <p><v-icon name="edit"></v-icon> Adobe InDesign</p>
                  <p><v-icon name="film"></v-icon> Adobe Premier</p>
                  <p><v-icon name="microphone"></v-icon> Adobe Audition</p>
                </section>
            </section>
            
            <section class="experience">
              <h2>Experience</h2>  
            </section>
            
            <section class="education">
              <h2>Education</h2>  
            </section>
            
            <section class="personal">
              <h2>Personal Work</h2>  
            </section>


          </section>
        </section>

        
  </section>
</template>

<script>
export default {
  name: 'ResumePage',
  data() {
    return {
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.skills p {
  background:rgb(243, 243, 243);
  padding:10px 10px;
  margin:5px 5px;
  border-radius:999px;
  text-indent: 0px;
  color:black;
}

.resume {
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  width:75%;
  height:80vh;
  margin:0 auto;

  background: rgb(255, 255, 255);
  box-shadow:
    /* The top layer shadow */
    0 -1px 1px rgba(0,0,0,0.15),
    /* The second layer */
    0 -10px 0 -5px rgb(255, 255, 255),
    /* The second layer shadow */
    0 -10px 1px -4px rgba(0,0,0,0.15),
     /* The third layer */
    0 -20px 0 -10px rgb(255, 255, 255),
    /* The third layer shadow */
    0 -20px 1px -9px rgba(0, 0, 0, 0.15);
    /* Padding for demo purposes */
    padding: 30px;
}

header, .skills, .experience, .education, .personal {
  padding:10px;
}

header {
  display:flex;
  justify-content: center;
  align-items:center;
  flex-direction:column;
  grid-column: 1/4;
  grid-row: 1/2;
  /* border-top: black solid 2px;
  border-right: black solid 2px;
  border-left: black solid 2px; */
  border-bottom:black 1px solid;
}

.skills {
  grid-column: 1/2;
  grid-row: 2/3;
  /* border: black solid 2px;
  border-right: none;
  border-bottom: none; */
}

.experience {
  /* border: black solid 2px;
  border-bottom:none; */
  grid-column: 2/4;
  grid-row: 2/3;
}

.education {
  /* border: black solid 2px;
  border-right:none; */
  grid-column: 1/2;
  grid-row: 3/4;
}

.personal {
  /* border: black solid 2px; */
  grid-column: 2/4;
  grid-row: 3/4;
}
</style>
