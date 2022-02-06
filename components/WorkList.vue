<template>
<div>
  <h2 class="text-4xl font-bold mb-8">
          Here's some things I've done
  </h2>
  
  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
    <div 
        v-for="item in features"
        :key="item.title"
        class="bg-gradient-to-br from-stone-900 to-stone-800 rounded-lg cursor-pointer p-5 h-72 border-2 border-slate-900 hover:border-cyan-500 transition-border-color duration-100 transition-translate hover:-translate-y-1 active:translate-y-1 flex flex-col"
        @click="visit(item)"
    >
      <div>
        <h4 class="text-lg font-bold mb-4">
          {{ item.title }}
        </h4>
      </div>
      <div class="grow">
        <p class="text-ellipsis">{{ item.description }}</p>
      </div>
      <div class="text-sm text-gray-400">
        <hr class="my-4 border-gray-500 opacity-25">
        tech1 tech2 tech3 tech4
      </div>
    </div>
  </div> 

  <p class="text-center p-8">more...</p> 
</div>
</template>

<script>
import Debug from 'debug';
const debug = Debug('13protons.components.worklist');
export default {
  name: 'MainMenu',
   data() {
    return {
      items: {}
    }
  },
  async fetch() {

    this.items = await this.$nuxt.context.$content('/work')
                        .where({ featured: true })
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
    visit(item) {
      debug('should vivit', item);
      const toVisit = `/work/${item.slug}`;
      this.$router.push(toVisit)
    }
  }  
}
</script>

