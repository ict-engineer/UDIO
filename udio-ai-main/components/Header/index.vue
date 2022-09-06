<template>
  <section class="bg-udio-blue-700 text-udio-white-100 pt-8">
    <div class="container mx-auto flex flex-wrap">

      <div class="flex flex-wrap items-center w-full md:w-2/3">
        <div class="w-full font-bold p-4">
          <p>Faster & Cheaper Transactions</p>
          <h1 class="font-3xl my-8">
            Trusted digital transactions
          </h1>
          <p>e-Signature | e-Archives | e-Invoices</p>
        </div>

        <div class="flex flex-wrap justify-around md:justify-start w-full">
          <div class="w-full p-4 h-auto overflow-ellipsis text-center md:text-left">
            Supporting our clients implementing digital future
          </div>
          <div class="flex justify-start items-center">
            <button class="bg-udio-blue-900 py-2 px-8 m-4 font-bold shadow">EXPLORE UDIO</button>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap justify-around md:justify-start w-full md:w-1/3 px-4 pt-12">
        <img src="~/assets/images/udiomobilescreen.png" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"

@Component
export default class Header extends Vue {}
</script>

<style lang="css" scoped>
</style>
