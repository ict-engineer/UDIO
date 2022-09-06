<template>
  <div class="">
    <Header/>
    <About/>
    <Content/>
    <Industries/>
    <Services/>
    <Footer/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"

@Component
export default class Home extends Vue {}
</script>

<style>
</style>
