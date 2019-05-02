<template>
    <mu-carousel hide-controls hide-indicators :interval="3000">
        <mu-carousel-item v-for="item in data" :key="item.id">
            <div @click="commitDialogIsOpen({title: item.title, content: item.abstract})">
                <img :src="item.avatar">
            </div>
        </mu-carousel-item>
    </mu-carousel>
</template>

<script>
    export default {
        name : "Swiper",
        props: [
            "data",
            "commitDialogIsOpen"
        ]
    };
</script>

<style lang="less" scoped>
    .mu-carousel {
        height: 15rem;
        width: 100%;

        .mu-carousel-item {
            img {
                width: 100%;
                height: 15rem;
            }
        }
    }
</style>

