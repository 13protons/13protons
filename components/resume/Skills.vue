<template>
  <div class="font-mono colortags">
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
        // Programming Languages
        'Typescript',
        'JavaScript',
        'SQL',
        'Dart',
        'Bash',
        
        // Frontend Frameworks & Libraries
        'React',
        'Next.js',
        'Jest',
        'Eslint',
        'Prettier',
        'Vite',
        'Flutter',
        'MUI',
        'Nuxt',
        'Vue',
        'Vuex',
        
        // CSS Frameworks & Styling
        'Tailwind',
        'Bulma',
        'Bootstrap',
        'CSS',
        'SASS',
        
        // Backend & Runtime
        'Node',
        'Express',
        
        // Databases
        'Postgres',
        'Sequelize',
        'Redis',
        'MongoDB',
        'Mongoose',
        
        // Cloud & Infrastructure
        'Docker',
        'Azure',
        'Heroku',
        'Github Actions',
        'Datadog',
        'Metabase',
        'Amplitude',
        
        // Development Tools
        'Git',
        'GitHub',
        'Copilot',
        'VSCode',
        'CLI',
        'Webpack',
        'Tableplus',
        
        // Testing & Development
        'Storybook',
        'Playwright',
        
        // Communication & Real-time
        'BullMQ',
        'SocketIO',
        'MQTT',
        
        // Email & Messaging
        'Twilio',
        'Sendgrid',
        'Postmark',
        'Mailgun',
        'Stripe',
        
        // Payment & Services
        'Mapbox',
        'Particle',
        'Vanta',
        'Gusto',
        
        // Design & Creative
        'Figma',
        'Photoshop',
        'Illustrator',
        'XD',
        'AfterEffects',
        'Lightroom',
        'Sketchup',
        'Lottie',
        
        // Project Management & Productivity
        'Notion',
        'Basecamp',
        'Productboard',
        'Miro',
        
        // Mobile
        'iOS'
      ]
    }
  }
}
</script>

