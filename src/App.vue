<script setup>


</script>

<template>
  <div class="lg:container mx-auto overflow-hidden">
    <router-view />
  </div>
</template>


<script setup>

import {onMounted} from "vue";
import {useRouter} from "vue-router";
const router = useRouter();
const user = JSON.parse(localStorage.getItem("user"));



onMounted(()=>{
if(!user.sub){
  router.push('/login')
}
})
</script>