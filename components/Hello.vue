<!-- Please remove this file from your project -->
<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
    <div class="text-lg max-w-prose leading-relaxed space-y-6 ">
      <p>
        I'm a tech generalist with deep knowledge of front-end web development
        and a long list of adjacencies. I went to school thinking I would become
        a mechanical engineer, got an art degree instead, and then just ended up
        in software. I've been confusing myself and others with that blurry line
        ever since.
      </p>

      <!-- <p>I've tried my hand at all manner of projects, and I love where software overlaps with the people that need to use it, and the physical world it's meant to model or interact with. </p>-->

      <p>If you like what you see, <a href="#footer" class="link">Get in touch!</a> <br>(links at bottom of page)</p>
    </div>

    <div class="grid justify-items-center p-8 rounded-lg ">
      
      
        <img
          v-if="$colorMode.value == 'dark'"
          v-show="!loadingDark"  
          alt="Photo of Alan smiling"
          :class="imgStyle"
          class="mix-blend-lighten"
          src="@/assets/img/alan-point-dark.jpg"
          @load="loadingDark = false"
        />
        <img
          v-else 
          v-show="!loadingLight"
          alt="Photo of Alan smiling"
          class="mix-blend-darken"
          :class="imgStyle"
          src="@/assets/img/alan-point-light.jpg"
          @load="loadingLight = false"
        />
    </div>
  </div>
</template>

<script>
export default {
  name: 'IntroText',
  data() {
    return {
      loadingDark: true,
      loadingLight: true,
    }
  },
  computed: {
    imgStyle() {
      return 'w-full max-w-lg opacity-70 hover:opacity-100 transition-opacity duration-500'
    },
  },
}
</script>
