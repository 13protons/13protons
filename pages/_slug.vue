<template>
  <div class="pt-16 print:pt-0">
    <div class="px-4">

    <div class="py-8">  
      <h1 class="text-4xl font-bold mb-4 print:mb-0">
        {{ page.title }}
      </h1>    
      <p class="content text-2xl print:hidden">{{ page.description }}</p>
    </div>
   
    <nuxt-content class="prose-base max-w-prose dark:prose-invert" :document="page"/>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const slug = params.slug || "index";
    const page = await $content(slug)
      .fetch()
      // eslint-disable-next-line node/handle-callback-err
      .catch((err) => {
        error({ statusCode: 404, message: "Page not found" });
      });

    return {
      page
    };
  }
};
</script>