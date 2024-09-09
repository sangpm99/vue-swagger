<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  import { ref } from 'vue';
  import router from '../router';
</script>

<template>
    <div class="list-group">
        <h2 class="ms-2">Dashboard</h2>
        <nav v-for="(item, index) in router.options.routes" :key="item.name">
          <RouterLink 
            :to="item.path" 
            :class="router.currentRoute.value.path === item.path ? 'list-group-item capitalize active' : 'list-group-item capitalize'">
              {{ item.name }}
          </RouterLink>
        </nav>
    </div>
</template>