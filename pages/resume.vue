<template>
  <section class="resumePage">
          <section class="resume hero">
            <header>
              <h1>RESUME OF A LVL {{this.devLevel}} WEB DEV</h1>
              <h2>Sean A. Yager</h2>
              <h3 class="centerText"> Web Designer, Comics Artist, Illustrator, Puzzle Solver, Storyteller, Friendly Guy</h3>
            </header>

            <section class="skills">
              <h1>Skills</h1>  
                <section class="flexRowWrap">
                  <p><Icon name="keyboard"/> Mac &amp; Windows OSX</p>
                  <p><Icon name="file-code"/> HTML 5</p>
                  <p><Icon name="code"/> CSS 3</p>
                  <p><Icon name="laptop-code"/> Javascript ES6</p>
                  <p><Icon name="cubes"/> Visual Studio Code</p>
                  <p><Icon name="code-branch"/> GitHub</p>
                  <p><Icon name="people-carry"/> Node.js</p>
                  <p><Icon name="cubes"/> Vue.js</p>
                  <p><Icon name="cubes"/> React.js</p>
                  <p><Icon name="fire-alt"/> Google Firebase</p>
                  <p><Icon name="database"/> SQL</p>
                  <p><Icon name="camera"/> Adobe Photoshop</p>
                  <p><Icon name="bezier-curve"/> Adobe Illustrator</p>
                  <p><Icon name="edit"/> Adobe InDesign</p>
                  <p><Icon name="film"/> Adobe Premier</p>
                  <p><Icon name="microphone"/> Adobe Audition</p>
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
                  <li>cooperate with individual and business branding through art, websites, and iconography.</li>
                  <li>work spans over 7 years, clientel ranges from college campus programs, to Youtube channels, Kickstarters, Twitch streamers, family owned businesses, individuals etc.</li>
                </ul>
              </section>
              
              <section class="block">
                <section class="flexRowStart">
                  <h3>Creative Converting, Indianapolis, IN</h3>
                  <p>| Merchandising Coordinator</p>
                </section>
                <p class="date">AUG 2018 - SEPT 2019</p>
                <ul>
                  <li>printed accurate product samples, cut, assembled, and packaged for mockups.</li>
                  <li>managed and fulfilled multiple sample orders on deadlines for trade shows, sales meetings, and clients.</li>
                  <li>navigated physical and digital catalogs to accurately assemble hundreds of name brand products, and custom trade show displays</li>
                </ul>
              </section>
            </section>
            
            <section class="education">
              <h1>Education</h1>

              <section class="block">
                <h3>Full Stack Bootcamp</h3>
                <h4>Austin Coding Academy</h4>
                <p class="date">MAR 2020 - SEP 2020</p>
                <p>Completed this biweekly intensive bootcamp course over 7 months during COVID quarantine, I receieved a full stack certification in 2020.</p>
                <p>The bootcamp covered HTML, CSS, Javascript, React.js, Github, Node.js, Unit Testing, SQL, and various APIs.</p>
              </section>

              <section class="block">
                <h3>IUPUI</h3>
                <h4>Media Arts and Science</h4>
                <p class="date">2011 - 2015, 2018</p>
                <p>Studied various subject matters from digital media, illustration, to cartooning. Each of these focuses helped develop my abilities as a designer, and as a creative mind.</p>
              </section>

              <section class="block">
                <h3>Ongoing Research</h3>
                <h2>LYNDA, Skillshare, Codecademy, MDN</h2>
                <p class="date">2010 - PRESENT</p>
                <p>Regularly research topics relevant to my freelance work, including Adobe Suite, new standards in ES6, Javascript, web frameworks, and more to stay relevant in my practice.</p>
              </section>
            </section>
            
            <section class="personal">
              <h1>Personal Work</h1>  
              <section class="block">
                <h2>Dungeons of Amara</h2>
                <h3>Kickstarter Book of Art and Poetry</h3>
                <p>I successfully crowd funded and published a softback art book titled "Dungeons of Amara" which is a playable RPG dice game filled with artwork and poetry.</p>
                <a class="button" target="_blank" href="https://www.kickstarter.com/projects/dungeonsofamara/dungeons-of-amara-poems-about-monsters-and-townfol"> <Icon name="link" /> Check it out!</a>
              </section>
              
              <section class="block">
                <h2>Moebius Dungeons</h2>
                <h3>Full Stack Vue.js Web Game</h3>
                <p>During my time as a student of Austin Coding Academy, I created a full stack web game using Vue.js and Google's Firebase Backend</p>
                <a class="button" target="_blank" href="https://www.moebiusdungeons.com"> <Icon name="link" /> Play Moebius Dungeons</a>

              </section>
            </section>


          </section>
  </section>
</template>

<script>
import moment from 'moment';

export default {
  name: 'ResumePage',
  data() {
    return {

    }
  },
  computed: {
    devLevel: function () {
      return moment(19930326, "YYYYMMDD").fromNow().slice(0, -9) - 1;
    }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button{
  display:block;
  text-decoration:none;
  background:rgb(0, 116, 124);
  color:white;
  font-family: var(--plain-font);
  text-transform:uppercase;
  padding:10px;
  border-radius:10px;
  margin:10px;
}

.button:hover {
  background:rgb(0, 151, 161);
}

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

ul li {
  margin-bottom:5px;
}

.skills p {
  background:rgb(243, 243, 243);
  padding:10px 10px;
  border-radius:999px;
  margin:5px 5px;
  text-indent: 0px;
  color:black;
  box-shadow: 2px 2px 1px rgb(206, 206, 206);
  display:flex;
  align-items:center;
  justify-content: center;
}

.fa-icon {
  margin-right:5px;
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

@media (min-width: 1024px) {
  h1 {
  font-size:5vw;
  margin-bottom:0px;
  text-align:center;
}

h2 {
  font-size:3vw;
  margin-bottom:10px;
  text-align:left;
}

h3 {
  font-size:1vw;
  margin-bottom:10px;
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
  margin:5px 5px;
  border-radius:999px;
  font-size:1.4vw;
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
  width:80%;
  margin:0 auto;
  grid-template-areas: 
    "header header header header header header"
    "experience experience experience skills skills skills"
    "personal personal personal education education education"
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

.experience p{
  text-align:left;
}

.experience h1 {
  text-align: left;
}

.experience h3 {
  font-size:2vw;
}

.education {
  grid-area: education;
}

.education h1 {
  text-align: left;
}

.education p {
  text-align:left;
}

.personal {
  grid-area: personal;
}

.personal h1 {
  text-align: left;
}

.personal p {
  text-align: left;
}
}

</style>
