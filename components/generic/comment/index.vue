<script setup>
let { avatar , name , comment ,username}=defineProps({
  avatar:{
    type:String,
    default:null
  },
  name:{
    type:String
  },
  comment:{
    type:String
  },
  username:{
    type:String
  },
})

function setAvatar(){
  if(avatar==='' || avatar===null){
    return '/img/avatar.png'
  }
  else{
    return avatar
  }
}
</script>

<template>
  <div class="bg-white shadow-light-shadow lg:px-8 lg:py-6 p-4">
    <div class="flex items-center lg:mb-5 mb-3">
        <img :src="setAvatar()" class="lg:w-[65px] w-[45px] lg:h-[65px] h-[45px] rounded-full ml-3" alt="">
        <h2 class="lg:text-base text-sm font-semibold text-dark">
            {{name}}
        </h2>
    </div>
    <p class="lg:text-sm text-xs text-dark font-medium">
        {{ comment }}
    </p>
  </div>
</template>

<style>

</style>