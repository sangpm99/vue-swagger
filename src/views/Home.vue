<script setup lang="ts">
import { useUserData } from '@/composables/useUserData'
const { userData } = useUserData()
</script>

<template>
  <h1>This is an Home page</h1>
  <h2 v-show="userData">Hi {{ userData ? userData.data.fullName : '' }}, Welcome to dashboard</h2>
</template>
