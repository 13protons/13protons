<template>
<div class="pt-12 print:hidden">
  <a name="footer"></a>
  <hr class="border-sky-700/50 dark:border-amber-700/50">

  <div class="text-center pt-12 pb-4 ">

    <Contact /> -

    <span class="print:hidden"><StyleLink to="/resume" >Resumé</StyleLink></span>

  </div>

  <p class="text-center opacity-60">2011 - {{year}} 13protons</p>
</div>
</template>

<script>
export default {
  name: 'FooterComponent',
  computed: {
    year() {
      const d = new Date();
      return d.getFullYear();
    }
  } 
}
</script>
