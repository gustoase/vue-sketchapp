<template>
    <div :data-rname="name" data-gname="child-block" :class="color" class="block">
        Class {{color}}
    </div>
</template>

<script>
    export default {
        name: "Block",
        props: ['color'],
        computed: {
            name() {
                return 'block-rectangle-'+this.color;
            }
        }
    }
</script>

<style scoped>
    .block {
        width: 100px;
        height: 100px;
        border: 1px solid black;
        margin: 20px;
    }
    .red {
        background-color: red;
    }
    .black {
        background-color: black;
    }
    .green {
        background-color: green;
    }
</style>
