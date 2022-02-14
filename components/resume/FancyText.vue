<template>
  <span :class="aColor()" class="px-2 py-1 mb-1"><slot /></span>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        'bg-slate-100 dark:bg-slate-800',
        'bg-stone-100 dark:bg-stone-800',
        'bg-red-100 dark:bg-red-800',
        'bg-orange-100 dark:bg-orange-800',
        'bg-amber-100 dark:bg-amber-800',
        'bg-yellow-100 dark:bg-yellow-800',
        'bg-lime-100 dark:bg-lime-800',
        'bg-green-100 dark:bg-green-800',
        'bg-emerald-100 dark:bg-emerald-800',
        'bg-teal-100 dark:bg-teal-800',
        'bg-cyan-100 dark:bg-cyan-800',
        'bg-sky-100 dark:bg-sky-800',
        'bg-blue-100 dark:bg-blue-800',
        'bg-indigo-100 dark:bg-indigo-800',
        'bg-violet-100 dark:bg-violet-800',
        'bg-purple-100 dark:bg-purple-800',
        'bg-fuchsia-100 dark:bg-fuchsia-800',
        'bg-pink-100 dark:bg-pink-800',
        'bg-rose-100 dark:bg-rose-800',
      ]
    }
  },
  methods: {
    aColor() {
      const index = Math.floor((Math.random() * this.colors.length -1));
      return this.colors[index];
    }
  }
}
</script>

