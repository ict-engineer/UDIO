<template>
  <section class="flex flex-wrap bg-udio-petrol-800 text-udio-petrol-200">
    <div class="flex flex-wrap justify-around w-full p-8">
      <div class="w-full my-2">
        <Logo/>
      </div>
      <div class="w-full my-2">
        <div class="w-full">
          <p>+020 1 62 45 00</p>
        </div>
        <div class="w-full">
          <p>info@udio.com</p>
        </div>
      </div>
      <div class="w-full">
        <p>124 Ermin Street</p>
      </div>
      <div class="w-full">
        <p>WRITHLINGTON</p>
      </div>
      <div class="w-full">
        <p>BA3 3AG</p>
      </div>
    </div>
    <div class="w-full bg-udio-petrol-900 p-8">
      <div class="flex flex-wrap justify-around">
        <a href="#">Contact us</a>
        <a href="#">Terms</a>
        <a href="#">Privacy Policy</a>
      </div>
      <div class="flex w-full justify-around text-center p-4">
        <p>© 2021 UDIO</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"

@Component
export default class Footer extends Vue {}
</script>

<style lang="css" scoped>
</style>
