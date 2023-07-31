<template>
  <div class="flex w-full h-screen">
    <div class="w-[420px]">
      <LeftBarView />
    </div>
    <div v-if="chatRoom" class="flex-1">
      <ChatRoomView />
    </div>
    <div v-else class="flex-1">
      <NoChatRoomView />
    </div>
  </div>
</template>


<script setup>
import { ref} from 'vue';
import ChatRoomView from './ChatRoomView.vue';
import LeftBarView from './LeftBarView.vue';
import NoChatRoomView from './NoChatRoomView.vue';


let chatRoom = ref(true);



</script>