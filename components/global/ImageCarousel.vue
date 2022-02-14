<template>
<div class="relative">
  <div v-if="selected" class="fixed top-0 left-0 bg-slate-900/60 w-screen h-screen p-4 md:p-12" @click="close">
    <button ref="overlayControl" class="absolute ring-0 ring-transparent outline-none right-0 text-white/80 hover:text-cyan-500 rounded-full mr-4 md:mr-12 cursor-pointer rotate-45 align-middle" @click="close" @keyup.left="prev()" @keyup.right="next()" @keyup.space="close">
      <svg
        class="w-8 h-8 transition-opacity duration-500 stroke-cyan-500 stroke-2"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        width="32"
        height="32"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 700 700"
      >
        <path d="m578.61 226.31h-134.99c-10.691-0.023438-20.934-4.2891-28.484-11.855-7.5547-7.5664-11.793-17.82-11.793-28.512v-134.59c-0.023438-13.637-5.4609-26.703-15.113-36.332-9.6523-9.6289-22.734-15.031-36.371-15.02h-3.75c-13.633-0.023438-26.715 5.375-36.367 15.008-9.6484 9.6328-15.07 22.707-15.07 36.344v134.59c-0.035156 10.676-4.2969 20.902-11.852 28.441-7.5586 7.543-17.793 11.781-28.469 11.793h-134.99c-13.629 0-26.699 5.4062-36.344 15.035-9.6445 9.625-15.074 22.688-15.098 36.316v3.75c0.035156 13.625 5.4688 26.684 15.109 36.316 9.6406 9.6328 22.703 15.055 36.332 15.074h134.99c10.691 0.035156 20.934 4.3008 28.488 11.867 7.5547 7.5625 11.809 17.809 11.832 28.5v135.61c0 13.637 5.4219 26.711 15.07 36.344 9.6523 9.6328 22.734 15.031 36.367 15.008h3.75c13.637 0.011719 26.719-5.3906 36.371-15.02 9.6523-9.6289 15.09-22.695 15.113-36.332v-134.2c-0.011719-10.695 4.2227-20.961 11.777-28.539 7.5508-7.5781 17.801-11.844 28.5-11.867h134.99c13.664 0.058593 26.789-5.332 36.469-14.98 9.6797-9.6445 15.113-22.75 15.102-36.414v-3.5742c0.40625-13.902-4.832-27.375-14.523-37.348-9.6914-9.9727-23.008-15.598-36.914-15.59z" fill="currentColor"/>
       </svg>
    </button>
    <div 
      :style="{ backgroundImage: `url(${require(`@/assets/img/work/${selected.path}`)})` }"
      class="mx-auto h-full bg-contain bg-center bg-no-repeat"
      @click="close"
    >
      
    </div>
    <div v-if="selected.alt" class="absolute bottom-0 w-full bg-gray-200 text-slate-900 p-4 text-center pb-8 -ml-4 md:-ml-12" @click="close">
      {{selected.alt}}
    </div>
  </div>
  <div class="flex flex-row flex-wrap" >
    <div 
        v-for="(image, index) in imagePaths" :key="image.path"
        class="w-24 h-24 bg-slate-500 mb-2 mr-2 rounded-lg border-2 border-slate-300 dark:border-slate-900 hover:border-cyan-500 dark:hover:border-amber-500 transition-border-color duration-100 cursor-pointer bg-cover bg-center bg-no-repeat"
        :style="{ backgroundImage: `url(${require(`@/assets/img/work/${image.path}?resize&size=128&format=jpg`)})` }"
        @click="choose(index)"
          >
    <!-- {{ image }} -->
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    images: { type: Array, default: ()=>[]}
  },
  data() {
    return {
      selected: '',
      atIndex: 0
    }
  },
  computed: {
    imagePaths() {
      return this.images || [];
    }
  },
  methods: {
    choose(index) {
      this.selected = this.imagePaths[index];
      this.atIndex = index;
      this.$nextTick(()=>{
        this.$refs.overlayControl.focus();
      })
    },
    prev() {
      this.atIndex = this.atIndex - 1;
      if (this.atIndex < 0) { this.atIndex = this.imagePaths.length - 1; }
      this.choose(this.atIndex);
    },
    next() {
      this.atIndex = this.atIndex + 1;
      if (this.atIndex > this.imagePaths.length - 1) { this.atIndex = 0; }
      this.choose(this.atIndex);
    },
    close() {
      this.selected = '';
    }
  }
}

// <div
//           v-if="featuredImage"
//           class="
//             bg-slate-800
//             h-72
//             w-screen
//             md:w-full
//             md:rounded-lg
//             bg-cover bg-center
//             p-0
//             -mx-4
//             md:mx-0
//             flex flex-col
//             justify-end
//           "
//           :style="{ backgroundImage: `url(${require(`@/assets/img/work/${featuredImage}`)})` }"
//         >
      
//     </div>

</script>