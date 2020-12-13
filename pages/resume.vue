<template>
  <section class="resumePage">
          <section class="resume hero">
            <header>
              <h1>RESUME OF A LVL {{this.devLevel}} WEB DEV</h1>
              <h2>Sean A. Yager</h2>
              <h3> Web Designer, Comics Artist, Illustrator, Puzzle Solver, Storyteller, Friendly Guy</h3>
            </header>

            <section class="experience">
              <h1>Experience</h1>
              <ResumeBlock 
                type="job"  
                title="Freelance Web Developer"
                subtitle="Austin, TX"
                role="Owner &amp; Operator"
                startDate="Feb 2013"
                endDate="Present"
                :list="[
                  'cooperate with individual and business branding through art, websites, and iconography.',
                  'work spans over 7 years, clientel ranges from college campus programs, to Youtube channels, Kickstarters, Twitch streamers, family owned businesses, individuals etc.', 
                ]"
              />
              <ResumeBlock
                  type='job'  
                  title="Creative Converting"
                  subtitle="Indianapolis, IN"
                  role="Merchandising Coordinator"
                  startDate="AUG 2018"
                  endDate="SEPT 2019"
                  :list="[
                  'printed accurate product samples, cut, assembled, and packaged for mockups.',
                  'managed and fulfilled multiple sample orders on deadlines for trade shows, sales meetings, and clients.',
                  'navigated physical and digital catalogs to accurately assemble hundreds of name brand products, and custom trade show displays',
                  'suggested ways to improve efficiancy in workplace processes'
                  ]"
                />
            </section>

            <section class="skills">
              <h1>Skills</h1>

              <h2><Icon name="desktop"/> Operating Systems</h2>
              <section class="flexRowWrap">
                <ResumeChip iconName="keyboard" skill="Mac OS" />
                <ResumeChip iconName="desktop" skill="Windows OS" />
              </section>
              <br>
              <h2><Icon name="code"/> Coding</h2>
              <section class="flexRowWrap">
                <ResumeChip iconName="file-code" skill="HTML 5"/>
                <ResumeChip iconName="code" skill="CSS 3"/>
                <ResumeChip iconName="laptop-code" skill="Javascript ES6"/>
                <ResumeChip iconName="cubes" skill="Visual Studio Code"/>
                <ResumeChip iconName="code-branch" skill="Github"/>
                <ResumeChip iconName="people-carry" skill="NPM"/>
                <ResumeChip iconName="cubes" skill="Vue JS"/>
                <ResumeChip iconName="cubes" skill="React JS"/>
                <ResumeChip iconName="cubes" skill="Nuxt JS"/>
                <ResumeChip iconName="fire-alt" skill="Google Firebase"/>
                <ResumeChip iconName="database" skill="SQL"/>
              </section>
              <br>
              <h2><Icon name="swatchbook"/> Design</h2>
              <section class="flexRowWrap">
                  <ResumeChip iconName="palette" skill="Procreate"/>
                  <ResumeChip iconName="search-plus" skill="Photoshop"/>
                  <ResumeChip iconName="bezier-curve" skill="Illustrator"/>
                  <ResumeChip iconName="edit" skill="InDesign"/>
                  <ResumeChip iconName="film" skill="Premier"/>
                  <ResumeChip iconName="microphone" skill="Audition"/>
                  <ResumeChip iconName="camera-retro" skill="Photography"/>
                  <ResumeChip iconName="blender" skill="Blender"/>
              </section>
            </section>
                          
            <section class="education">
              <h1>Education</h1>
              <ResumeBlock
                  type='education'
                  title="Full Stack Bootcamp"
                  subtitle="Austin Coding Academy"
                  role="Certified Full Stack Web Developer"
                  startDate="MAR 2020"
                  endDate="SEPT 2019"
                  :list="[
                  'Completed this biweekly intensive bootcamp course over 7 months during COVID quarantine, I receieved a full stack certification in 2020.',
                  'The bootcamp covered HTML, CSS, Javascript, React.js, Github, Node.js, Unit Testing, SQL, and various APIs.'
                  ]"
                />

                <ResumeBlock
                  type='education'
                  title="Media Arts and Science"
                  subtitle="IUPUI"
                  role="Various Studies in Computer Science"
                  startDate="2011"
                  endDate="2015, 2018"
                  :list="[
                  'Studied various subject matters from digital media, illustration, to cartooning. Each of these focuses helped develop my abilities as a designer, and as a creative mind despite choosing not to continue pursuing college education.'
                  ]"
                />
                
                <ResumeBlock
                  type="education"
                  title="Ongoing Research"
                  subtitle=""
                  role="Independent Self-Education"
                  startDate="2010"
                  endDate="Present"
                  :list="[
                  'Regularly research topics relevant to my freelance work, including Adobe Suite, new standards in ES6, Javascript, web frameworks, and more to stay relevant in my practice.'
                  ]"
                />
            </section>
            
            <section class="personal">
              <h1>Personal Work</h1>  

              <ResumeBlock
                type="project"
                title="Dungeons of Amara"
                subtitle="Kickstarter Book of Art and Poetry"
                description='I successfully crowd funded and published a softback art book titled "Dungeons of Amara" which is a playable RPG dice game filled with artwork and poetry.'
                url="https://www.kickstarter.com/projects/dungeonsofamara/dungeons-of-amara-poems-about-monsters-and-townfol"
                linkText="Check It Out!"
                iconName="book-reader"
              />
              
              <ResumeBlock
                type="project"
                title="Moebius Dungeons"
                what="Full Stack Vue JS Web Game"
                description="During my time as a student of Austin Coding Academy, I created a full stack web game using Vue.js and Google's Firebase Backend"
                url="https://www.moebiusdungeons.com"
                linkText="Play the Game!"
                iconName="gamepad"
              />

              </section>
            </section>
          </section>
</template>

<script>
import moment from 'moment';

export default {
  name: 'ResumePage',
  computed: {
    devLevel: function () {
      return moment(19930326, "YYYYMMDD").fromNow().slice(0, -9) - 1;
    }
}
}
</script>


<style scoped>
.resumePage {
  margin-bottom:20px;
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

header h1, header h2, header h3 {
    text-align:center;
  }

  h1, h2, h3 {
    text-align:left;
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

/* Tablets and Up */
@media (min-width: 768px) {

}

@media (min-width: 1024px) {
  .resume {
    display:grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
    margin:0 auto;
    grid-template-areas: 
      "header header"
      "experience skills"
      "personal education"
    ;
  }

  header h1, header h2, header h3 {
    text-align:center;
    margin:5px;
  }

  h1, h2, h3 {
    text-align:left;
  }
}

</style>
