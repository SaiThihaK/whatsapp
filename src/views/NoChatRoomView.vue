<template>
    <div class="h-screen bg-[#eff2f5] w-full  flex justify-center items-center">
        <div class="w-full flex flex-col gap-1 justify-center items-center">
            <img :src="NoChat" />
            <h1 class="text-[25px]">WhatsApp Web</h1>
            <p>Send and receive messages without keeping your phone online.</p>
            <p>Use WhatsApp on up to 4 linked devices and 1 phone at the same time.</p>
        </div>
    </div>
</template>

<script setup>
import NoChat from '../assets/chatnotfound.png'
</script>