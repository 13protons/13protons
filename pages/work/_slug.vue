<template>
  <div class="pt-16">
    <!-- <h2 class="text-4xl font-bold mb-8 text-white/50">Here's a thing I did</h2> -->
    <div
          v-if="featuredImage"
          class="
            bg-slate-800
            h-72
            w-full
            rounded-lg
            bg-cover bg-center
            p-0
           
            flex flex-col
            justify-end
          "
          :style="{ backgroundImage: `url(${require(`@/assets/img/work/${featuredImage}`)})` }"
        >
      
    </div>

    <div class="py-8">  
      <h1 class="text-6xl font-bold mb-4">
        {{ page.title }}
      </h1>    
      <p class="content text-2xl">{{ page.description }}</p>
    </div>
    <div>
      Image Carousel
    </div>
    <nuxt-content class="prose-lg max-w-prose dark:prose-invert" :document="page"/>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, app, params, error }) {
    const path = `/work/${params.slug}`
    const [page] = await $content({ deep: true }).where({ path }).fetch()

    if (!page) {
      return error({ statusCode: 404, message: 'page not found' })
    }

    return {
      page
    }
  },
  computed: {
    featuredImage() {
      if (this.page.img) {
        return this.page.img
      }
      return ''
    },
  },
}
</script>
