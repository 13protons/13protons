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
        'Developer',
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


