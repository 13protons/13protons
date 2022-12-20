<!-- Please remove this file from your project -->
<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
    <div class="text-lg max-w-prose leading-relaxed space-y-6 ">
      <p>You're probably here because you want to learn more about me, stumbled across one of my projects, or because I sent you a link. Welcome.</p>

      <p>Professionally, I've worked for scrappy startups, big corporations, and many sizes in between. I've written code, led teams, develop product and even had time for some fun. I have a bias for action and care about the small details.</p>

      

      <p class="mb-0">
        Get in touch if you like what you see!<br>
        <Contact />
      </p>

      <p><StyleLink to="/resume" >More about me</StyleLink></p>
    </div>

    <div class="grid justify-items-center p-8 rounded-lg hidden md:block">
        <img
          v-if="$colorMode.value == 'dark'"            
          alt="Stylized illustration of Alan smiling"
          :class="imgStyle"
          width="720" height="540"
          class="mix-blend-lighten"
          src="@/assets/img/memoji-dark.jpg"
        />
        <img
          v-else-if="$colorMode.value == 'light'" 
          alt="Stylized illustration of Alan smiling"
          class="mix-blend-darken"
          :class="imgStyle"
          width="720" height="540"
          src="@/assets/img/memoji-light.jpg"
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
