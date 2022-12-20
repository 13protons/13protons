<template>
  <span class="">
    <span class="link cursor-pointer" @click="trymail">hello [at] 13protons.com</span> -
    <StyleLink href="https://www.linkedin.com/in/13protons/">LinkedIn</StyleLink> -
    <StyleLink href="https://github.com/13protons">GitHub</StyleLink>
    <!-- <StyleLink href="https://twitter.com/13protons">Twitter</StyleLink> -->
  </span>
</template>

<script>
export default {
  name: 'ContactComponent',
  data() {
    return {
      botwait: false
    }
  },
  mounted() {
    setTimeout(()=>{
      this.botwait = true;
    }, 350);
  },
  methods: {
    trymail() {
      if (this.botwait) {
        const whereto = ['mai','lto',':','hell','o@13p','roto','ns.co','m'].join('');
        window.location = whereto;
      }
    }
  }
}
</script>
