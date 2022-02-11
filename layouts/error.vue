<template>
  <div class="text-center py-12">
    <h1 class="text-4xl mb-4">Well, this is embarassing</h1>

    <div v-if="error.statusCode === 404">
      <p>No page was found for that address. Sorry about that. 😬</p>
      
    </div>
    <div v-else>
      <div class="p-4 mt-8 bg-amber-700/20 max-w-prose mx-auto border-2 border-amber-700 rounded-lg">
        <h3 class="text-xl">{{error.statusCode}}</h3>
        <p>{{error.message}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    layout: 'error', // you can set a custom layout for the error page
    // eslint-disable-next-line vue/require-prop-types
    props: ['error']
  }
</script>