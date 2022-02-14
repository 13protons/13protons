<template>
  <div class="font-mono">
    <span v-for="skill in skills" :key="skill" class="inline-block">
      <ResumeFancyText>{{skill}}</ResumeFancyText>&nbsp;
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
     skills: [
        'Node',
        'Vue',
        'Webpack',
        'Bash',
        'Express',
        'MongoDB',
        'Mongoose',
        'Vuex',
        'Bulma',
        'Tailwind',
        'Bootstrap',
        'React',
        'CSS',
        'SASS',
        'Lottie',
        'Photoshop',
        'Illustrator',
        'XD',
        'AfterEffects',
        'Lightroom',
        'Sketchup',
        'VSCode',
        'Git',
        'GitHub',
        'CLI',
        'Stripe',
        'Mapbox',
        'Postmark',
        'Twilio',
        'Nuxt',
        'Particle',
        'Mailgun',
        'Heroku',
        'SocketIO',
        'MQTT',
        'Notion',
        'Basecamp',
        'Productboard',
      ]
    }
  }
}
</script>

