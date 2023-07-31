<template>
    <div class="flex flex-col h-full">
        <div>
            <ChatRoomBar />
        </div>
        <div class="flex-1">
            <Messages />
        </div>
        <div>
            <SendMessageBar />
        </div>


    </div>
</template>

<script setup>
import ChatRoomBar from '../components/ChatRoomBar.vue';
import Messages from "../components/Messages.vue"
import SendMessageBar from "../components/SendMessageBar.vue"
</script>