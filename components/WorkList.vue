<template>
  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      <nuxt-link
        v-for="item in features"
        :key="item.title"
        class="
          bg-gradient-to-br

          from-stone-200
          to-stone-100

          dark:from-stone-900
          dark:to-stone-800
          
          rounded-lg
          cursor-pointer
          flex flex-col
          
          border-2
          border-slate-300
          dark:border-slate-900
          hover:border-cyan-500
          dark:hover:border-amber-500

          transition-border-color
          duration-100
          transition-translate
          hover:-translate-y-1
          active:translate-y-1
          h-72
        "
        :to="`/work/${item.slug}`"
      >
        <!-- <div
          class="
            bg-slate-800
            h-32
            shrink-0
            w-full
            rounded-t-lg
            bg-cover
          "
          :class="item.heroClass"
          :style="{ backgroundImage: `url(/work/${featuredImage(item)}?resize&size=300&format=jpg)` }"
        ></div> -->

         <div
          class="
            bg-slate-800
            h-32
            shrink-0
            w-full
            rounded-t-lg
            bg-cover
          "
          :class="item.heroClass"
          :style="{ backgroundImage: `url(${require(`@/assets/img/work/${featuredImage(item)}?resize&size=300&format=jpg`)})` }"
        ></div>
        <div class="p-5 grow flex flex-col">
          
            <div class="mb-4">
              <h3 class="text-lg font-bold">
                {{ item.title }}
              </h3>
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
import Debug from 'debug';
const debug = Debug('13protons.components.worklist');
export default {
  name: 'MainMenu',
  props: {
    featured: { type: Boolean, default: false }
  },
  data() {
    return {
      items: {}
    }
  },
  async fetch() {

    this.items = await this.$nuxt.context.$content('/work')
                        .where({ featured: true })
                        .sortBy('order', 'desc')
                        .limit(4)
                        .fetch()
                        .catch(err => {
                          debug('err', err);
                        });
    
  },
 
  computed: {
    features() {
      return this.items || [];
    }
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

