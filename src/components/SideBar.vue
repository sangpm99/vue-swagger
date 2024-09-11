<script setup lang="ts">
import { RouterLink } from 'vue-router'
import router from '../router'
</script>

<template>
  <div class="list-group">
    <ul>
      <li class="mb-5" v-for="item in router.options.routes" :key="item.name">
        <h3 class="ms-2 capitalize">{{ item.name }}</h3>
        <ul>
          <li>
            <template v-for="subItem in item.children" :key="subItem.name">
              <RouterLink :to="item.path + subItem.path" class="list-group-item capitalize">
                {{ subItem.name }}
              </RouterLink>
            </template>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
