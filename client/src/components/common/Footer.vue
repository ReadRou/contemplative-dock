<template>
    <mu-bottom-nav :value.sync="footerIndex" shift>
        <mu-bottom-nav-item value="home" to="/home" title="首页" icon="home"/>
        <mu-bottom-nav-item value="video" to="/video" title="视频" icon="video_library"/>
        <mu-bottom-nav-item value="discover" to="/discover" title="发现" icon="remove_red_eye"/>
        <mu-bottom-nav-item value="me" to="/me" title="我" icon="account_circle"/>
    </mu-bottom-nav>
</template>

<script>
    import {
        mapActions,
        mapState
    } from "vuex";

    export default {
        name    : "Footer",
        computed: {
            ...mapState(["app"]),
            footerIndex: {
                get() {
                    return this.app.path;
                },
                set(path) {
                    this.commitPath(path);
                }
            }
        },
        methods : {
            ...mapActions(["commitPath"])
        }
    };
</script>

<style scoped lang="less">
    .mu-bottom-nav {
        width: 100%;
        position: fixed;
        bottom: 0;
    }
</style>
