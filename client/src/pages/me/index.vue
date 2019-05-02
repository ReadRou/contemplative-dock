<template>
    <div>
        <h1>{{ app.io.homeResponse }}</h1>
        <mu-button color="primary" @click="handleClick">发送socket</mu-button>
    </div>
</template>

<script>

    import {
        mapActions,
        mapState
    } from "vuex";

    export default {
        name    : "mePage",
        computed: {
            ...mapState(['app']),
        },
        methods : {
            ...mapActions(['socketCommitTestData']),
            handleClick() {
                this.$socket.emit('home_today_index', 'hello')
            }
        },
        mounted() {
            this.sockets.subscribe('home_response', (data) => {
                this.socketCommitTestData(data)
            });
        }
    };
</script>

<style scoped>
</style>
