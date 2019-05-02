<template>
    <div>
        <Video :title="'一首非常好听的歌曲'"
               :url="'https://api.dogecloud.com/player/get.mp4?vcode=5ac682e6f8231991&userId=17&ext=.mp4'"/>
    </div>
</template>

<script>
    import Video from "@/components/common/Video";

    export default {
        name      : "videoPage",
        components: { Video },
    };
</script>

<style lang='less'>
    .video-js {
        width: 100%;
        height: 14.6rem;
    }
</style>
