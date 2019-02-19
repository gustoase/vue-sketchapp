<template>
  <div id="app">
    <div data-sname="app" class="test">
      <Block color="red" name="block red"/>
      <Block color="black" name="block black"/>
      <Block color="green" name="block green"/>
    </div>
  </div>
</template>

<script>
import Block from './components/Block'

export default {
  name: 'app',
  components: {
    Block
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


  .test {
    border: 1px solid red;
    padding: 10px;
  }


</style>
