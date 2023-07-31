<template>
    <div class="w-full bg-[#F0F0F0]">
        <div class="px-2 w-full gap-3   flex items-center  rounded-md">
            <div class="flex ">
                <EmoticonExcitedOutlineIcon :size="27" fillColor="#515151" />
                <PaperclipIcon :size="27" fillColor="#515151" />
            </div>
            <div class="py-2 flex-1">
                <input placeholder="Start a new chat"
                    class=" flex-1 apperance-none w-full bg-white  py-1.5 px-2.5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm placeholder:text-gray-500" />
            </div>
            <button>
                <SendIcon fillColor="#515151" />
            </button>

        </div>
    </div>
</template>

<script setup>
import EmoticonExcitedOutlineIcon from 'vue-material-design-icons/EmoticonExcitedOutline.vue'
import PaperclipIcon from 'vue-material-design-icons/Paperclip.vue'
import SendIcon from 'vue-material-design-icons/Send.vue'
</script>