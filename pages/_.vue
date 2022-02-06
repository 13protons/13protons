<template>
  <div>
    <h1>{{ page.title }}</h1>
    <p>{{ page.description }}</p>
    
    <nuxt-content :document="page"/>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, app, params, error }) {
    const path = `/${params.pathMatch || 'index'}`
    const [page] = await $content({ deep: true }).where({ path }).fetch()

    if (!page) {
      return error({ statusCode: 404, message: 'page not found' })
    }

    return {
      page
    }
  }
}
</script>
