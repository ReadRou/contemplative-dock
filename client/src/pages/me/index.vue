<template>
    <div>
        <h1>{{ me.response }}</h1>
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
            ...mapState(['me']),
        },
        methods : {
            ...mapActions(['meCommitResponse']),
            handleClick() {
                this.$socket.emit('me_index', {
                    unknow: 'hello'
                })
            }
        },
        mounted() {
            this.sockets.subscribe('me_response', (data) => {
                this.meCommitResponse(data)
            });
        }
    };
</script>

<style scoped>
</style>
