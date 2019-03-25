<template>
   <div>
      <P>name : {{itemInfo.id}}</P>
      <P>time : {{itemInfo.time}}</P>
      <P>time_ago : {{itemInfo.time_ago}}</P>
   </div>
</template>

<script>
export default {
    computed : {
         itemInfo(){
          return this.$store.state.item;
      }
    },
    created(){
      console.log(this.$route.params.id); 
      const item = this.$route.params.id; 
      this.$store.dispatch('FETCH_ITEM', item);
    }
}
</script>

<style>

</style>
