<template>
  <div>
    <h2 class="text-4xl font-bold mb-8">Here's some things I've done</h2>

    <div class="flex flex-col space-y-12">
      <nuxt-link
        v-for="item in features"
        :key="item.title"
        class="
          bg-gradient-to-br
          from-stone-900
          to-stone-800
          rounded-lg
          cursor-pointer
          flex flex-col
          md:flex-row md:h-64
          border-2 border-slate-900
          hover:border-cyan-500
          transition-border-color
          duration-100
          transition-translate
          hover:-translate-y-1
          active:translate-y-1
          flex flex-col
        "
        :to="`/work/${item.slug}`"
      >
        <div
          class="
            bg-slate-800
            h-48
            shrink-0
            w-full
            rounded-t-lg
            md:rounded-l-lg md:rounded-tr-none md:w-64 md:h-full
            bg-cover bg-center
          "
          :style="{ backgroundImage: `url(/work/${featuredImage(item)})` }"
        ></div>
        <div class="p-5 grow flex flex-col">
          
            <div class="mb-4">
              <h4 class="text-lg font-bold">
                {{ item.title }}
              </h4>
            </div>
            <div class="grow">
              <p class="text-ellipsis">{{ item.description }}</p>
              {{ item.images }}
            </div>
            <div v-if="item.tags" class="text-sm text-gray-400" >
              <hr class="my-4 border-gray-500 opacity-25" />
              {{ item.tags }}
            </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import Debug from 'debug'
const debug = Debug('13protons.components.worklist')
export default {
  name: 'FullWorkList',
  data() {
    return {
      items: {},
    }
  },
  async fetch() {
    this.items = await this.$nuxt.context
      .$content('/work')
      .fetch()
      .catch((err) => {
        debug('err', err)
      })
  },

  computed: {
    features() {
      return this.items || []
    },
  },
  methods: {
    featuredImage(item) {
      if (item.img) {
        return item.img
      }
      return ''
    },
  },
}
</script>

