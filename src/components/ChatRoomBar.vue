<template>
    <div class="w-full bg-[#F0F0F0]">
        <div class="flex py-2 px-2 justify-center items-center">
            <div class="flex-1 w-full flex items-center">
                <div class="flex items-center gap-3  flex-1">
                    <img src="https://picsum.photos/40/40" alt="User Photo" class="rounded-full" />
                    <span class="font-bold">Sai</span>
                </div>

                <div class="flex">
                    <DotsVerticalIcon fillColor="#515151" />
                </div>
            </div>

        </div>
    </div>
</template>


<script setup>
import DotsVerticalIcon from 'vue-material-design-icons/DotsVertical.vue'
</script>