<template>
    <div>        
        <p v-for="job in this.$store.state.jobs">
          <a :href ="job.url" >{{ job.title }}</a> 
          <small>{{job.time_ago}} by 
              <router-link v-bind:to="`/item/${job.id}`">{{job.user}}</router-link>               
          </small>         
        </p>
    </div>
</template>

<script>
export default {
    
    created(){
        this.$store.dispatch('FETCH_JOBS');
    }

}
</script>

<style>

</style>
