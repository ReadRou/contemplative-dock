<template>
    <div>
        <List
                :refreshing="home.week.list.refreshing"
                :loading="home.week.list.loading"
                :data="home.week.list.data"
                :commitDialogIsOpen="commitDialogIsOpen"
        />
        <Dialog
                :commitDialogIsOpen="commitDialogIsOpen"
                :title="app.dialog.title"
                :content="app.dialog.content"
                :isOpen="app.dialog.isOpen"
        />
    </div>
</template>

<script>
    import List from "@/components/common/List";
    import {
        mapActions,
        mapState
    }           from "vuex";

    export default {
        name      : "week",
        components: { List },
        created() {
            this.home_week_list_index();
        },
        methods   : {
            ...mapActions([
                "homeWeekCommitListData",
                "commitDialogIsOpen"
            ]),
            home_week_list_index() {
                this.$socket.emit('home_week_list_index');
            },
        },
        mounted() {
            this.sockets.subscribe('home_week_list_response', (data) => {
                this.homeWeekCommitListData(data.data)
            })
        },
        computed  : {
            ...mapState([
                "home",
                "app"
            ])
        }
    };
</script>

<style scoped>
</style>
