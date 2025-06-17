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
        'Engineering Manager',
        'Software Engineer',
        'Full Stack Developer',
        'Front End Developer',
        'Back End Developer',
        'Architect',
        'Designer',
        'Photographer',
        'Tech Lead',
        'Product Manager',
        'Team Lead',
        'Founder',
        'Owner',
        'Instructor',
        'Customer Service'
      ]
    }
  }
}
</script>


