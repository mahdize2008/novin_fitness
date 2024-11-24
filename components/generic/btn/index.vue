<script setup>
let {size,theme,rounded,iconName,iconPathCount}=defineProps({
    size:{
        type:String,
        default:'sm'
    },
    theme:{
        type:String,
        default:'primary'
    },
    tag:{
        type:String,
        default:'NuxtLink'
    },
    to:{
        type:String,
    },
    rounded:{
        type:Boolean,
        default:false
    },
    outline:{
        type:Boolean,
        default:false
    },
    square:{
        type:Boolean,
        default:false
    },
    lightness:{
        type:Boolean,
        default:false
    },
    iconName:{
        type:String
    },
    iconPathCount:{
        type:Number,
        default:0
    }
})
</script>

<template>
  <component :is="tag" :to="to" class="btn" :class="[{'btn-lightness':lightness},{'btn-outline':outline},{'btn-square':square},{'btn-rounded':rounded},`btn-${theme}`]">
      <slot/>
      <GenericIcon class="mr-4 text-xs" :name="iconName" :path-count="iconPathCount" v-if="iconName"/>
  </component>
</template>

<style scoped>
.btn{
    @apply h-11 px-5 flex items-center justify-center cursor-pointer rounded-xl text-sm text-white border-4 bg-primary border-primary font-medium transition-all
}

/* COLOR */
.btn-dark{
    @apply bg-dark border-dark
}
.btn-white{
    @apply bg-white border-white
}
.btn-secondary{
    @apply bg-secondary border-secondary
}

/* SQUARE */
.btn-square{
    @apply aspect-square px-0
}

/* ROUNDED */
.btn-rounded{
    @apply rounded-full
}

/* OUTLINE */
.btn-outline{
    @apply bg-opacity-0 hover:bg-opacity-100
}
.btn-outline.btn-dark{
    @apply text-dark hover:text-white
}
.btn-outline.btn-white{
    @apply text-white hover:text-dark
}
.btn-outline.btn-secondary{
    @apply text-secondary hover:text-white
}

/* SIZE */
.btn-lg{
    @apply h-14
}
.btn-sm{
    @apply h-6
}
</style>