<template>
    <div>
        <List
                :refreshing="home.month.list.refreshing"
                :loading="home.month.list.loading"
                :data="home.month.list.data"
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
    import List   from "@/components/common/List";
    import Dialog from "@/components/common/Dialog";
    import {
        mapActions,
        mapState
    }             from "vuex";

    export default {
        name      : "month",
        components: {
            List,
            Dialog
        },
        created() {
            this.home_month_list_index();
        },
        computed  : {
            ...mapState([
                "home",
                "app"
            ])
        },
        methods   : {
            ...mapActions([
                "homeMonthCommitListData",
                "commitDialogIsOpen"
            ]),
            home_month_list_index() {
                this.$socket.emit('home_month_list_index');
            },
        },
        mounted() {
            this.sockets.subscribe('home_month_list_response', (data) => {
                this.homeMonthCommitListData(data.data)
            })
        },
    };
</script>

<style scoped>
</style>
