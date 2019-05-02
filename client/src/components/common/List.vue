<template>
    <div>
        <mu-load-more :refreshing="refreshing"
                      :loading="loading"
                      loading-text="正在加载...">
            <mu-list textline="three-line">
                <mu-divider/>
                <mu-list-item
                        avatar
                        button
                        v-for="item in data"
                        :key="item.id"
                        @click="commitDialogIsOpen({title: item.title, content: item.abstract})"
                >
                    <mu-list-item-action>
                        <mu-avatar>
                            <img :src="item.avatar">
                        </mu-avatar>
                    </mu-list-item-action>
                    <mu-list-item-content>
                        <mu-list-item-title>{{item.title}}</mu-list-item-title>
                        <mu-list-item-sub-title>
                            <span style="color: rgba(0, 0, 0, .87)">{{item.user__nickname}} -</span>
                            {{item.abstract}}
                        </mu-list-item-sub-title>
                    </mu-list-item-content>
                </mu-list-item>
                <mu-divider/>
            </mu-list>
        </mu-load-more>
    </div>
</template>

<script>
    export default {
        name : "List",
        props: [
            "data",
            "refreshing",
            "loading",
            "commitDialogIsOpen"
        ]
    };
</script>

<style scoped lang="less">
</style>
