<!-- Please remove this file from your project -->
<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
    <div class="text-lg max-w-prose leading-relaxed space-y-6">
      <p>
        I'm a tech generalist with deep knowledge of front-end web development
        and a long list of adjacencies. I went to school thinking I would become
        a mechanical engineer, got an art degree instead, and then just ended up
        in software. I've been confusing myself and others with that blurry line
        ever since.
      </p>

      <!-- <p>I've tried my hand at all manner of projects, and I love where software overlaps with the people that need to use it, and the physical world it's meant to model or interact with. </p>-->

      <p><StyleLink to="/contact" >Get in touch</StyleLink> if you like what you see!</p>
    </div>

    <div class="grid justify-items-center p-8 rounded-lg">
      <!-- <img
        v-show="loading"
        :class="imgStyle"
        class="animate-pulse"
        src="@/assets/img/alan-point.png?sqip"
      /> -->
      <img
        v-show="!loading"
        :class="imgStyle"
        src="@/assets/img/alan-point.png"
        @load="didLoadImg"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'IntroText',
  data() {
    return {
      loading: true,
    }
  },
  computed: {
    imgStyle() {
      return 'w-full max-w-lg dark:mix-blend-lighten opacity-70 hover:opacity-100 transition-opacity duration-500'
    },
  },
  methods: {
    didLoadImg() {
      this.loading = false
    },
  },
}
</script>
