<template>
  <div class="flex h-screen font-roboto bg-udio-gray-100">
    <!-- <Menu class="pt-12"/> -->

    <div class="flex-1 flex flex-col">
      <div class="flex justify-space h-16 bg-udio-blue-900 text-white-900">
        <button class="w-1/5 p-4">
          <Logo class=""/>
        </button>
        <div class="w-3/5 p-4">

        </div>
        <button class="w-1/5 flex justify-around md:justify-end items-center p-4 text-right">
          <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z" fill="#1AFFC8"/>
          </svg>
        </button>
      </div>

      <main class="flex-1 overflow-x-hidden">
        <nuxt/>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"

@Component
export default class Layout extends Vue {}
</script>

<style>
button {
  @apply rounded text-udio-white-100
}
</style>
