<script setup lang="ts">
import { RouterView } from 'vue-router'
import SideBar from '../components/SideBar.vue'
</script>

<template>
  <div class="row">
    <div class="col-3 h-full sidebar pe-0">
      <SideBar />
    </div>

    <div class="col-9">
      <RouterView />
    </div>
  </div>
</template>
