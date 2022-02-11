<template>
  <div class="flex flex-col space-y-40 py-20">
    <!-- <hr class="mb-8 border-gray-500 "> -->
    <div>
      <h2 class="text-4xl lg:text-6xl font-bold mb-8">Hi, I'm Alan</h2>
      <Hello />
    </div>

    <div>
      <h2 class="text-4xl font-bold mb-8">Here's some things I've done</h2>
      <WorkList />
      <p class="text-center p-8 mt-4">
        <nuxt-link
          to="/work"
          class="
            rounded-md
            bg-cyan-700
            dark:bg-yellow-500
            text-white
            dark:text-slate-900
            px-6
            py-2
            border-2 
            border-slate-900
            
            hover:border-cyan-500
            dark:hover:border-amber-700
            transition-border-color
            duration-100
            transition-translate
            hover:-translate-y-1
            active:translate-y-1
          "
        >
          See More...
        </nuxt-link>
      </p>
    </div>

    <!-- <div>03</div> -->
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

