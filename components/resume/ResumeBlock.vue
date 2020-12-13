<template>
    <!-- Use this component by setting the type prop to job, education, or project -->
    
    <div class="block">
         <section class="flexRowStart">
            <section v-if="type==='job'">
              <section class="flexRow">
                <h3>{{ title }} </h3>
                <h4 class="subtitle">: {{ subtitle }}</h4>
              </section>
              <h5>| {{ role }} </h5>
            </section>

            <section v-else-if="type==='education'">
              <section class="flexRow">
                <h3>{{ title }}</h3>
                <h4 v-if="subtitle" class="subtitle">@ {{ subtitle }}</h4>
              </section>
              <h5> | {{ role }} </h5>
            </section>

            <section v-else-if="type==='project'">
              <h3>{{ title }}</h3>
              <h4>{{ subtitle }}</h4>
            </section>  
        </section>

        <section v-if="!url">
          <p class="date">{{ startDate }} - {{ endDate }}</p>
          
          <ul>
              <li v-for="(item, index) in list" :key="`${item}${index}`">{{ item }}</li>
          </ul>
        </section>

        <section v-else>
          <p>{{ description }}</p>
          <a class="button flexRowCenter" :href="url">
            <Icon class="marginRight" :name="iconName"/>
            {{ linkText }}
          </a>
        </section>
    </div>
</template>

<script>
    export default {
        props: [
          'type', 
          'title', 
          'subtitle', 
          'role', 
          'startDate', 
          'endDate',
          'list',
          'description',
          'iconName', 
          'url', 
          'linkText'
        ]
    }
</script>

<style scoped>
.block {
  background:rgb(243, 243, 243);
  padding:15px 20px;
  margin: 20px 0;
  border-radius:10px;
  box-shadow: 2px 2px 1px rgb(206, 206, 206);
}

.date {
  font-style:italic;
  text-align:left;
}

ul {
  margin:20px;
}

ul li {
  margin-bottom:5px;
}

.marginRight {
  margin-right:8px;
}
   
   a {
    text-decoration:none;
    color:white;
    border-radius:10px;
    margin:10px;
    background-color:var(--primary-color);
    padding:10px;
  }

@media (min-width: 768px) {

}

@media (min-width: 1024px) {
  .subtitle {
    margin-left:5px;  
  }
}
</style>