<template>
  <div class="pt-16">
    <!-- <h2 class="text-4xl font-bold mb-8 text-white/50">Here's a thing I did</h2> -->
    <div
          v-if="featuredImage"
          class="
            bg-slate-800
            h-72
            w-screen
            sm:w-full
            sm:rounded-lg
            bg-cover
            p-0
            -mx-4
            sm:mx-0
            flex flex-col
            justify-end
            border-slate-300 dark:border-slate-900
          "
          :class="page.heroClass"
          :style="{ backgroundImage: `url(${require(`@/assets/img/work/${featuredImage}`)})` }"
        >
      
    </div>
    <div class="px-4">

    <div class="py-8">  
      <h1 class="text-5xl font-bold mb-4">
        {{ page.title }}
      </h1>    
      <p class="content text-2xl">{{ page.description }}</p>
    </div>
    
   
    <nuxt-content class="prose-lg max-w-prose dark:prose-invert" :document="page"/>
    </div>
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
      if (this.page.images) {
        return this.page.images[0].path;
      }
      return ''
    },
  },
}
</script>
