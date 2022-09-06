<template>
  <section class="bg-udio-blue-700 text-udio-white-100 p-4 text-center my-32">
    <div class="container mx-auto my-12">
      <div class="p-2 m-2">
        <h1>Industries</h1>
      </div>
      <div class="p-2 m-2">
        <p>Explore your industry and see how DTM optimizes our customer's businesses.</p>
      </div>

      <carousel :per-page="1" class="md:hidden">
        <slide>
          <Automotive/>
        </slide>
        <slide>
          <Manufacturing/>
        </slide>
        <slide>
          <PublicAdministration/>
        </slide>
        <slide>
          <Telecommunication/>
        </slide>
      </carousel>

      <div class="sm:hidden w-full flex flex-wrap justify-around mx-2 my-8">
        <Automotive/>
        <Manufacturing/>
        <PublicAdministration/>
        <Telecommunication/>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"

// @Component({
//   components: {
//     Carousel,
//     Slide
//   }
// })
@Component
export default class Industries extends Vue {}
</script>

<style lang="css" scoped>
</style>
