<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import SideBar from '@/components/SideBar'
</script>

<template>
  <div class="row">
    <div class="col-12">
      <Header />
    </div>
  </div>

  <div class="row">
    <div class="col-3">

    </div>

    <div class="col-9">
      <RouterView />
    </div>
  </div>
</template>