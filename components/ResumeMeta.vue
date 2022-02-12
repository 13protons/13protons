<template>
  <div class="md:space-x-4 py-2 uppercase font-sans font-bold bg-gray-200 rounded-lg leading-tight md:py-0 md:bg-transparent">
    <span v-if="hasSlot('role')"><slot name="role"></slot></span>
    <span v-if="hasSlot('duration')"><slot name="duration"></slot></span>
    <span v-if="hasSlot('location')"><slot name="location"></slot></span>
  </div>
</template>

<script>
export default {
  methods: {
    hasSlot (name = 'default') {
      return !!this.$slots[ name ] || !!this.$scopedSlots[ name ];
    }
  }
}
</script>

<style lang="postcss" scoped>
  span {
    @apply px-4 md:py-1 text-sm rounded-full text-black md:bg-gradient-to-b md:from-gray-100 md:to-yellow-100 print:pl-0 print:text-amber-900 block md:inline print:inline mb-0;
  }
</style>