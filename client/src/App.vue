<template>
    <div id="app">
        <keep-alive>
            <router-view/>
        </keep-alive>
        <div class="footer-fix"></div>
        <Footer/>
    </div>
</template>

<style lang="less">
    .footer-fix {
        position: relative;
        height: 3.5rem;
    }
</style>
<script>
    import Footer from "@/components/common/Footer";
    import {
        mapActions,
        mapState
    }             from "vuex";

    export default {
        components: { Footer },
        computed  : {
            ...mapState(["home"])
        },
        created() {
            let footerPath = this.$route.path.substring(1);
            const index    = footerPath.indexOf("/");
            if (index !== -1) {
                footerPath = footerPath.substring(0, index);
            }
            this.commitPath(footerPath);
            this.$progress.start();
            this.$progress.done();
        },
        methods   : {
            ...mapActions(["commitPath"])
        }
    };
</script>
