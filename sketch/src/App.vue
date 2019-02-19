<template>
    <div id="app" data-gname="app">
        <div data-gname="parent-block" class="test">
            <Block color="red" name="rect red"/>
            <Block color="black" name="rect black"/>
            <Block color="green" name="rect green"/>
        </div>
        <div data-gname="parent-block2" class="test">
            <Block color="red" name="rect red"/>
            <Block color="black" name="rect black"/>
            <Block color="green" name="rect green"/>
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
