<template>
    <div class="w-full hover:bg-[#F0F0F0]">
        <div class="flex py-2 px-2">
            <div class="flex-1 flex gap-2 items-center">
                <img src="https://picsum.photos/40/40" alt="User Photo" class="rounded-full" />
                <div>
                    <p>Sai</p>
                    <div class="flex gap-2">
                        <CheckAllIcon />
                        <span class="text-sm text-gray-400">that was super fast</span>
                    </div>
                </div>
            </div>
            <div class="flex h-full">
                <p class="text-sm text-gray-400">Dec 2022 | 16:12 PM</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import CheckAllIcon from "vue-material-design-icons/CheckAll.vue";
</script>