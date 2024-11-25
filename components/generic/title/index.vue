<script setup>
let {size,tag}=defineProps({
    size:{
        type:String,
        default:'md'
    },
    tag:{
        type:String,
        default:'h2'
    },
    theme:{
        type:String,
        default:'primary'
    },
    shape:{
        type:Boolean,
        default:false
    },
    shapeCircle:{
        type:Boolean,
        default:false
    },
    bold:{
        type:Boolean,
        default:false
    },
})
</script>

<template>
  <component :is="tag" class="title-public" :class="[`title-${theme}`,`title-${size}`,{'title-bold' :bold}]">
    <div class="shape" v-if="shape" :class="{'shape-circle' : shapeCircle}"></div>
    <slot/>
  </component>
</template>

<style>
.title-public{
    @apply lg:text-2xl text-sm font-semibold flex items-center
}


/* SHAPE */
.title-public .shape{
    @apply w-0.5 h-7 bg-warning lg:ml-2.5 ml-2 rounded-full
}
.title-public .shape.shape-circle{
    @apply lg:!w-2.5 !w-1.5 lg:!h-2.5 !h-1.5
}


/* SLOT */
.title-public span{
    @apply ml-2
}


/* THEME */
.title-primary{
    @apply text-primary
}
.title-primary .mark{
    @apply text-dark
}
.title-dark{
    @apply text-dark
}
.title-dark .mark{
    @apply text-primary
}
.title-white{
    @apply text-white
}
.title-dark .mark{
    @apply text-dark
}


/* SIZE */
.title-lg{
    @apply lg:text-4xl text-base
}
.title-sm{
    @apply text-lg
}


/* BOLD */
.title-bold{
    @apply font-bold
}
</style>