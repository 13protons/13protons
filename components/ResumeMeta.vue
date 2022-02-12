<template>
  <div class="space-x-4 uppercase font-sans font-bold">
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
    @apply p-1 px-4 text-sm rounded-full text-black bg-gray-200 print:pl-0 print:text-amber-900
  }
</style>