<template>
    <div class="grid grid-cols-1 xl:grid-cols-2 gap-8">
      <nuxt-link
        v-for="item in features"
        :key="item.title"
        class="
          
           bg-gradient-to-br

          from-white
          to-stone-100

          dark:from-stone-900
          dark:to-stone-800
                    
          border-2
          border-slate-300
          dark:border-slate-900
          hover:border-cyan-500
          dark:hover:border-amber-500
          
          rounded-lg
          cursor-pointer
          flex flex-col
          md:flex-row md:h-64

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
            min-w-[16em]
            w-full
            rounded-t-lg
            md:rounded-l-lg md:rounded-tr-none md:w-64 md:h-full
            bg-cover

            md:border-r-2
            md:border-b-0
            border-b-2
            
            border-slate-300
            dark:border-slate-900
          "
          :class="item.heroClass"
          :style="{ backgroundImage: `url(${require(`@/assets/img/work/${featuredImage(item)}?resize&size=520&format=jpg`)})` }"
        ></div>
        <div class="p-5 flex flex-col">
          
            <div class="mb-4">
              <h4 class="text-lg font-bold">
                {{ item.title }}
              </h4>
            </div>
            <div class="grow">
              <p class="text-ellipsis">{{ item.description }}</p>
              
            </div>
            <div v-if="item.tags" class="text-sm text-gray-400" >
              <hr class="my-4 border-gray-500 opacity-25" />
              {{ item.tags }}
            </div>
        </div>
      </nuxt-link>
    </div>
</template>

<script>
import Debug from 'debug'
const debug = Debug('13protons.components.worklist')
export default {
  name: 'WorkList',
  data() {
    return {
      items: {},
    }
  },
  async fetch() {
    this.items = await this.$nuxt.context
      .$content('/work')
      .sortBy('order', 'desc')
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
      if (item.images) {
        return item.images[0].path
      }
      return ''
    }
  }
}
</script>

