<template>
    <div>
        <mu-tabs :value.sync="headerIndex" full-width color="teal" indicator-color="#fff">
            <mu-tab to="/home/today">
                <mu-icon value="today"></mu-icon>
                今日头条
            </mu-tab>
            <mu-tab to="/home/week">
                <mu-icon value="view_week"></mu-icon>
                本周排行
            </mu-tab>
            <mu-tab to="/home/month">
                <mu-icon value="assessment"></mu-icon>
                月度精选
            </mu-tab>
            <mu-tab to="/home/company">
                <mu-icon value="location_city"></mu-icon>
                企业招聘
            </mu-tab>
        </mu-tabs>

        <!-- <mu-bottom-nav :value.sync="headerIndex">
          <mu-bottom-nav-item title="今日头条" value="today" to="/home/today" icon="today"/>
          <mu-bottom-nav-item title="本周排行" value="week" to="/home/week" icon="view_week"/>
          <mu-bottom-nav-item title="月度精选" value="month" to="/home/month" icon="assessment"/>
          <mu-bottom-nav-item title="企业招聘" value="company" to="/home/company" icon="location_city"/>
        </mu-bottom-nav>-->
        <keep-alive>
            <router-view/>
        </keep-alive>
    </div>
</template>

<script>
    import {
        mapActions,
        mapState
    } from "vuex";

    export default {
        name    : "Header",
        computed: {
            ...mapState(["home"]),

            headerIndex: {
                get() {
                    return this.home.path;
                },
                set(path) {
                    this.homeCommitPath(path);
                }
            }
        },
        methods : {
            ...mapActions(["homeCommitPath"]),
            checkPath(path) {
                switch (path) {
                    case 'today':
                        this.homeCommitPath(0);
                        break;
                    case 'week':
                        this.homeCommitPath(1);
                        break;
                    case 'month':
                        this.homeCommitPath(2);
                        break;
                    case 'company':
                        this.homeCommitPath(3);
                        break;
                }
            }
        },
        created() {
            let path  = this.$route.path;
            let index = path.lastIndexOf('/');
            path      = path.substring(index + 1);
            this.checkPath(path);
        }
    };
</script>

<style scoped lang="less">
    .mu-tabs {
        height: 3.5rem;
    }
</style>
