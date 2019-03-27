<template>
  <transition name="fade" mode="out-in">
    <router-view></router-view>
  </transition>
</template>

<script>
import AppTr from './AppTr.vue'
import AppEng from './AppEng.vue'
export default {
  data(){
    return{
      
    }
  },
  components: {
    'app-tr': AppTr,
    'app-eng': AppEng
  },
  methods: {
    
  },
  created(){
    
  }
}
</script>

<style>
  .fade-enter{
    opacity: 0;
  }
  .fade-enter-active{
    transition: opacity 0.5s;
  }
  .fade-leave{
    opacity: 1;
  }
  .fade-leave-active{
    transition: opacity 0.5s;
    opacity: 0;
  }
</style>
