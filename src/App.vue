<template>
  <div id="app">
    <!-- 카멜 규칙으로 컨포넌트를 생성한 이유는  자동 완성 때문이다. -->
    <tool-bar></tool-bar>
    <!-- url이 만약 news -->
    <router-view></router-view>

  </div>
</template>

<script>
import ToolBar from './components/ToolBar'

export default {
  components :{
    ToolBar,
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  padding: 0;
  margin:  0;
}
</style>
