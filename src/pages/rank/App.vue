<template>
  <div ref="refWrap">
    rank
    {{ msg }}
    <Model
      :message="msg"
      @vnode-mounted="hookChildMounted"
      title="optional title prop"
    >
      <!-- <h1>asd</h1> -->
      <template #default>
        <h1>asd</h1>
      </template>
      <template #header> 阿萨德好看的阿萨德 </template>
    </Model>
  </div>
</template>

<script>
import {
  ref,
  nextTick,
  onBeforeMount,
  onBeforeUnmount,
  onMounted,
  onUnmounted,
} from 'vue';
import Model from './components/Model.vue';
import { materialDetail } from '../../api/index.js'

export default {
  components: {
    Model,
  },
  setup() {
    console.log(import.meta.env);
    const refWrap = ref(null);

    materialDetail({ id: 1 })

    nextTick(() => {
      console.log(refWrap.value);
    });

    onMounted(() => {
      console.log('console mounted !');
    });

    onBeforeMount(() => {
      console.log('console before mounted !');
    });

    onBeforeUnmount(() => {
      console.log('page before destory!');
    });

    onUnmounted(() => {
      console.log('page destory!');
    });

    const msg = ref('哇咔咔13');
    return {
      msg,
      refWrap,
    };
  },
  methods: {
    hookChildMounted() {
      console.log('子组件 mounted 了!');
    },
  },
};
</script>
