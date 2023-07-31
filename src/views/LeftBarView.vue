<template>
    <div class="w-full flex flex-col h-full px-0.5" style="overflow-y: scroll">
        <div class="bg-[#F0F0F0]">
            <div class="flex py-2 px-2 justify-center items-center">
                <div class="flex-1">
                    <img src="https://picsum.photos/40/40" alt="User Photo" class="rounded-full" />
                </div>
                <div class="flex">
                    <AccountGroupIcon fillColor="#515151" />
                    <DotsVerticalIcon fillColor="#515151" @click="logoutHandler" />
                </div>
            </div>
        </div>
        <div class="flex w-full justify-center item-center p-3 bg-white border-b shadow-sm">
            <div class="px-1 w-full bg-[#F0F0F0] flex items-center justify-center rounded-md">
                <MagnifyIcon />
                <input placeholder="Start a new chat"
                    class="ml-5 flex-1 apperance-none w-full bg-[#F0F0F0] py-1.5 px-2.5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm placeholder:text-gray-500" />
            </div>
        </div>
        <div class="w-full h-full flex-1">
            <div v-for="(message, index) in Array(100)" :key="index">
                <MessageRow />
            </div>
        </div>
    </div>
</template>

<script setup>
import DotsVerticalIcon from "vue-material-design-icons/DotsVertical.vue";
import AccountGroupIcon from "vue-material-design-icons/AccountGroup.vue";
import MagnifyIcon from "vue-material-design-icons/Magnify.vue";
import MessageRow from "../components/MessageRow.vue"
import {useUserStore} from "@/store/userStore";
import router from "@/router";
import {onMounted} from "vue";

const userStore = useUserStore();
const logoutHandler = ()=>{
  let res = confirm("are you sure want to logout");
  if(res){
    userStore.logout();
    router.push("/login");
  }

};

onMounted(()=>{
  try{
    userStore.getAllUser();
  }catch (err){
    console.log(err);
  }
})
</script>