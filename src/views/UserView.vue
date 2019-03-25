<template>
    <div>
        <P>name : {{userInfo.id}}</P>
        <P>karma : {{userInfo.karma}}</P>
        <P>created : {{userInfo.created}}</P>        
    </div>
</template>

<script>

export default {
    computed : {
      userInfo(){
          return this.$store.state.user;
      }
    },
    created() {
        console.log(this.$route.params.id);
        const userName = this.$route.params.id;
        this.$store.dispatch('FETCH_USER', userName);
        
    },
    
}
</script>

<style>

</style>
