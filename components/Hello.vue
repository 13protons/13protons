<!-- Please remove this file from your project -->
<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
    <div class="text-lg max-w-prose leading-relaxed space-y-6 ">
      <p>
        I'm a tech generalist with deep knowledge of front-end web development and a long list of adjacencies. I went to school thinking I would become a mechanical engineer, got an art degree instead, and then became a software engineer when I realized that's where all my interests came together and I could have the biggest impact.
      </p>

      <p>I've worked for big corporations, scrappy startups, and many sizes in between. I've written code, led teams, develop product and even had time for some fun.</p>

      <!-- <p>I've tried my hand at all manner of projects, and I love where software overlaps with the people that need to use it, and the physical world it's meant to model or interact with. </p>-->

      <p class="mb-0">
        Get in touch if you like what you see!<br>
        <Contact />
      </p>
    </div>

    <div class="grid justify-items-center p-8 rounded-lg hidden md:block">
        <img
          v-if="$colorMode.value == 'dark'"            
          alt="Photo of Alan smiling"
          :class="imgStyle"
          width="720" height="540"
          class="mix-blend-lighten"
          src="@/assets/img/alan-face-dark.jpg"
        />
        <img
          v-else-if="$colorMode.value == 'light'" 
          alt="Photo of Alan smiling"
          class="mix-blend-darken"
          :class="imgStyle"
          width="720" height="540"
          src="@/assets/img/alan-face-light.jpg"
        />
        <img 
          v-else
          width="720" height="540"
          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
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
