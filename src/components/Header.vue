<script setup lang="ts">
import { RouterLink } from 'vue-router'
import router from '../router'
import { ref } from 'vue'

const routes = router.options.routes

const homeRoutes = ref({})

routes.map((route) => {
  if (route?.name === 'home') {
    homeRoutes.value === route
    console.log(homeRoutes.value)
  }
})
</script>

<template>
  <header class="p-3 mb-3 border-bottom">
    <div class="container">
      <div
        class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
      >
        <ul
          v-for="(item, index) in homeRoutes"
          :key="index"
          class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"
        >
          <li><a href="#" class="nav-link px-2 link-secondary">Home</a></li>
          <li><a href="#" class="nav-link px-2 link-body-emphasis">Shop</a></li>
          <li><a href="#" class="nav-link px-2 link-body-emphasis">About</a></li>
          <li><a href="#" class="nav-link px-2 link-body-emphasis">Blog</a></li>
          <li><a href="#" class="nav-link px-2 link-body-emphasis">Contact</a></li>

          <!-- <RouterLink :to="item?.path + subItem.path" class="list-group-item capitalize">
                {{ subItem.name }}
              </RouterLink> -->
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" class="form-control" placeholder="Search..." aria-label="Search" />
        </form>

        <div class="text-end">
          <a href="">Login</a>
        </div>
      </div>
    </div>
  </header>
</template>
