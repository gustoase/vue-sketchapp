<template>
    <div id="app" >
        <Block color="red"   data-sketch-symbol="Blocks1/Red"/>
        <Block color="black" data-sketch-symbol="Blocks1/Black"/>
        <Block color="green" data-sketch-symbol="Blocks1/Green"/>
        <div class="head1" data-sketch-text="Heading">
            Heading1
        </div>
        <div class="head2" data-sketch-text="Heading/Two">
            Heading2
        </div>
        <div data-sketch-color="#565454" class="test" style="background-color: #565454">sfsf</div>
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
        width: 100px;
        height: 100px;
    }

    .head1 {
        font-size: 22px;
    }
    .head2 {
        font-size: 24px;
    }
</style>
