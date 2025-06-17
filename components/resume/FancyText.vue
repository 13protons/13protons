<template>
  <span :class="getColorForText()" class="colortag px-2 py-1 mb-1 transition-all duration-200"><slot /></span>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        'bg-slate-100 dark:bg-slate-800 hover:border-b-2 hover:border-slate-600',
        'bg-stone-100 dark:bg-stone-800 hover:border-b-2 hover:border-stone-600',
        'bg-red-100 dark:bg-red-800 hover:border-b-2 hover:border-red-600',
        'bg-orange-100 dark:bg-orange-800 hover:border-b-2 hover:border-orange-600',
        'bg-amber-100 dark:bg-amber-800 hover:border-b-2 hover:border-amber-600',
        'bg-yellow-100 dark:bg-yellow-800 hover:border-b-2 hover:border-yellow-600',
        'bg-lime-100 dark:bg-lime-800 hover:border-b-2 hover:border-lime-600',
        'bg-green-100 dark:bg-green-800 hover:border-b-2 hover:border-green-600',
        'bg-emerald-100 dark:bg-emerald-800 hover:border-b-2 hover:border-emerald-600',
        'bg-teal-100 dark:bg-teal-800 hover:border-b-2 hover:border-teal-600',
        'bg-cyan-100 dark:bg-cyan-800 hover:border-b-2 hover:border-cyan-600',
        'bg-sky-100 dark:bg-sky-800 hover:border-b-2 hover:border-sky-600',
        'bg-blue-100 dark:bg-blue-800 hover:border-b-2 hover:border-blue-600',
        'bg-indigo-100 dark:bg-indigo-800 hover:border-b-2 hover:border-indigo-600',
        'bg-violet-100 dark:bg-violet-800 hover:border-b-2 hover:border-violet-600',
        'bg-purple-100 dark:bg-purple-800 hover:border-b-2 hover:border-purple-600',
        'bg-fuchsia-100 dark:bg-fuchsia-800 hover:border-b-2 hover:border-fuchsia-600',
        'bg-pink-100 dark:bg-pink-800 hover:border-b-2 hover:border-pink-600',
        'bg-rose-100 dark:bg-rose-800 hover:border-b-2 hover:border-rose-600',
      ]
    }
  },
  methods: {
    hashString(str) {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5) - hash) + str.charCodeAt(i);
        hash |= 0; // Convert to 32bit integer
      }
      return Math.abs(hash);
    },
    getColorForText() {
      // Try to extract text from the slot using this.$el.textContent as a fallback
      let text = '';
      if (this.$el && this.$el.textContent) {
        text = this.$el.textContent.trim();
      }
      if (!text && this.$children && this.$children.length > 0) {
        text = this.$children.map(child => child.$el && child.$el.textContent ? child.$el.textContent : '').join('');
      }
      if (!text) text = 'default';
      const hash = this.hashString(text.toString());
      const index = hash % this.colors.length;
      return this.colors[index];
    }
  }
}
</script>

<style lang="postcss">
.colortag {
  /* @apply inline-block rounded-lg text-sm font-semibold; */
  /* @apply transition-colors duration-200 ease-in-out; */
  /* @apply border-b-2 border-transparent; */
  /* @apply text-slate-900 dark:text-white; */
  @apply shadow-sm;
  
}

.colortag:hover {
  @apply shadow-md;
}
.colortag:focus {
  @apply outline-none ring-2 ring-offset-2 ring-slate-500;
}

.colortags {
  line-height: 2em;
}
</style>
