<template>
    <mu-dialog width="360" transition="slide-right" fullscreen :open.sync="isOpen">
        <mu-appbar color="primary" :title="title">
            <mu-button slot="left" icon @click="commitDialogIsOpen">
                <mu-icon value="close"></mu-icon>
            </mu-button>
            <mu-button slot="right" flat @click="commitDialogIsOpen">
                <mu-icon value="share"></mu-icon>
            </mu-button>
        </mu-appbar>
        <div style="padding: 24px;">{{content}}</div>
    </mu-dialog>
</template>

<script>
    export default {
        name : "Dialog",
        props: [
            "commitDialogIsOpen",
            "isOpen",
            "content",
            "title"
        ]
    };
</script>

<style scoped>
</style>
