<template>
  <section class="resumePage">
          <section class="resume hero">
            <header>
              <h1>RESUME OF A LVL 27 WEB DEV</h1>
              <h2>Sean A. Yager</h2>
              <h3 style="centerText"> Web Designer, Comics Artist, Illustrator, Puzzle Solver, Storyteller, Friendly Guy</h3>
            </header>


            <section class="skills">
              <h1>Skills</h1>  
                <section class="flexRow">
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
              <h1>Experience</h1>
              <section class="block">
                <section class="flexRowStart">
                  <h3>Misuse of Mana LLC, Austin, TX</h3>
                  <p> | Owner and Operator</p>
                </section>
                <p class="date">FEB 2013 - PRESENT</p>
                <ul>
                  <li>individual and business branding through art, websites, and iconography.</li>
                  <li>branding work spans over 7 years, clientel ranges from college campus programs, to Youtube channels, Kickstarters, Twitch streamers, family owned businesses, individuals etc.</li>
                </ul>
              </section>
              
              <section class="block">
                <section class="flexRowStart">
                  <h3>Creative Converting, Indianapolis, IN</h3>
                  <p>| Merchandising Coordinator</p>
                </section>
                <p class="date">AUG 2018 - SEPT 2019</p>
                <ul>
                  <li>Printed accurate product samples, cut, assembled, and packaged for mockups.</li>
                  <li>Managed and fulfilled multiple sample orders on deadlines for trade shows, sales meetings, and clients.</li>
                  <li>Navigated physical and digital catalogs to accurately assemble hundreds of name brand products, and custom show displays</li>
                </ul>
              </section>
            </section>
            
            <section class="education">
              <h2>Education</h2>

              <section class="block">
                <h3>Full Stack Bootcamp</h3>
                <h4>Austin Coding Academy</h4>
                <p class="date">MAR 2020 - SEP 2020</p>
                <p>Completed this biweekly intensive bootcamp course over 7 months during COVID quarantine, I receieved a full stack certificate.</p>
                <p>The bootcamp covered HTML, CSS, Javascript, React.js, Github, Node.js, Unit Testing, SQL, API's and many other libraries.</p>
              </section>

              <section class="block">
                <h3>IUPUI</h3>
                <h4>Indianapolis, IN</h4>
                <h4>Media Arts and Science</h4>
                <p class="date">2011 - 2015, 2018</p>
                <p>Studied various subject matters from digital media, illustration, and cartooning.</p>
              </section>

              <section class="block">
                <h2>LYNDA, Skillshare, Codecademy, MDN</h2>
                <h3>Ongoing Remote Research</h3>
                <p class="date">2010 - PRESENT</p>
                <p>Regularly research topics to my freelance, including Adobe Suite, Web Development, and more to stay relevant in my practice.</p>
              </section>
            </section>
            
            <section class="personal">
              <h1>Personal Work</h1>  
              <section class="block">
                <h2>Dungeons of Amara</h2>
                <h3>Kickstarter Book of Art and Poetry</h3>
                <p>I successfully crowd funded and published a softback art book titled "Dungeons of Amara" which is a playable RPG dice game filled with artwork and poetry.</p>
              </section>
              
              <section class="block">
                <h2>Moebius Dungeons</h2>
                <h3>Full Stack Vue.js Web Game</h3>
                <p>During my time as a student of Austin Coding Academy, I created a full stack web game using Vue.js and Google's Firebase Backend</p>
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


h1 {
  font-size:10vw;
  text-align:center;
}

h2 {
  font-size:6vw;
  text-align:left;
}

h3 {
  font-size:4vw;
  font-weight:600;
  text-align:left;
}

h3.centerText {
  text-align:center;
}

h4 {
  font-size:3vw;
  text-align:left;
}

.skills p {
  background:rgb(243, 243, 243);
  padding:10px 10px;
  border-radius:999px;
  margin:5px 0px;
  text-indent: 0px;
  color:black;
  box-shadow: 2px 2px 1px rgb(206, 206, 206);
}

.skills p:not(:last-of-type){
  margin-left:5px;
}

.block {
  background:rgb(243, 243, 243);
  padding:10px;
  margin: 10px 0;
  border-radius:10px;
  box-shadow: 2px 2px 1px rgb(206, 206, 206);
}

.block p {
  text-indent: 0;
}

.date {
  font-style:italic;
}

.resume {
  display:grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  margin:0 auto;
  grid-template-areas: 
    "header"
    "experience"
    "skills"
    "education"
    "personal"
  ;
}

header, .skills, .experience, .education, .personal {
  padding:10px;
}

header {
  display:flex;
  justify-content: center;
  align-items:center;
  flex-direction:column;
  grid-area: header;
  border-bottom:black 1px solid;
}

.skills {
  grid-area: skills;
}

.experience {
  grid-area: experience;
}

.experience ul li{
  text-align:left;
};

.education {
  grid-area: education;
}

.personal {
  grid-area: personal;
}


/* Mobile Port */
@media (min-width: 667px) {}

/* Tablets and Up */
@media (min-width: 768px) {
.skills p {
  background:rgb(243, 243, 243);
  padding:10px 10px;
  margin:5px 5px;
  border-radius:999px;
  text-indent: 0px;
  color:black;
  box-shadow: 2px 2px 1px rgb(206, 206, 206);

}

.block {
  background:rgb(243, 243, 243);
  padding:10px;
  margin: 10px 0;
  border-radius:10px;
  box-shadow: 2px 2px 1px rgb(206, 206, 206);
}

.block p {
  text-indent: 0;
}

.date {
  font-style:italic;
}

.resume {
  display:grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  column-gap: 10px;
  width:75%;
  margin:0 auto;
  grid-template-areas: 
    "header header header header header header"
    "experience experience experience experience skills skills"
    "education education education education personal personal"
  ;
}

header, .skills, .experience, .education, .personal {
  padding:10px;
}

header {
  display:flex;
  justify-content: center;
  align-items:center;
  flex-direction:column;
  grid-area: header;
  border-bottom:black 1px solid;
}

.skills {
  grid-area: skills;
}

.experience {
  grid-area: experience;
}

.education {
  grid-area: education;
}

.personal {
  grid-area: personal;
}
}



</style>
