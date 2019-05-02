<template>
    <div>
        <Swiper :data="home.today.swiper.data" :commitDialogIsOpen="commitDialogIsOpen"/>
        <List :refreshing="home.today.list.refreshing"
              :loading="home.today.list.loading"
              :data="home.today.list.data"
              :commitDialogIsOpen="commitDialogIsOpen"
        />
        <Dialog :commitDialogIsOpen="commitDialogIsOpen"
                :title="app.dialog.title"
                :content="app.dialog.content"
                :isOpen="app.dialog.isOpen"
        />
    </div>
</template>

<script>
    import List   from "@/components/common/List";
    import Dialog from "@/components/common/Dialog";
    import Swiper from "@/components/common/Swiper";
    import {
        mapActions,
        mapState
    }             from "vuex";

    export default {
        name      : "today",
        components: {
            List,
            Dialog,
            Swiper,
        },
        computed  : {
            ...mapState([
                "home",
                "app"
            ])
        },
        methods   : {
            ...mapActions([
                "homeTodayCommitListData",
                "homeTodayCommitSwiperData",
                "commitDialogIsOpen"
            ]),
            home_today_list_index() {
                this.$socket.emit('home_today_list_index');
            },
            home_today_swiper_index() {
                this.$socket.emit('home_today_swiper_index');
            }
        },
        created() {
            this.home_today_list_index();
            this.home_today_swiper_index();
        },
        mounted() {
            this.sockets.subscribe('home_today_list_response', (data) => {
                this.homeTodayCommitListData(data.data)
            });
            this.sockets.subscribe('home_today_swiper_response', (data) => {
                this.homeTodayCommitSwiperData(data.data)
            })
        }

    };
</script>

<style scoped>
</style>
