<template>
  <h2 class="wrap">sad</h2>
  {{ message }}
  <Field v-model="msg" ref="inputRef"></Field>
  <Button @click="handleClick" ref="preRef">cli阿斯顿撒多按时ck</Button>
  <LevelComponent :level="2">{{ message }}</LevelComponent>
  <slot name="default" />
  <slot name="header" />
</template>

<script>
import { defineComponent, ref, toRef, toRefs } from 'vue';
import { Field, Button } from 'vant';
import LevelComponent from './Level';
import useInputAutoFocus from '../hooks/autoFocus';

export default defineComponent({
  props: {
    message: {
      type: String,
      required: true,
    },
    title: String,
  },
  components: {
    Field,
    Button,
    LevelComponent,
  },
  setup(props, ctx) {
    const { inputRef } = useInputAutoFocus();

    const { message } = toRefs(props);
    console.log(message.value);

    /// optional prop
    const title = toRef(props, 'title');
    console.log(title.value);

    const msg = ref('哇咔咔');
    const preRef = ref(null);

    const handleClick = () => {
      console.log(msg.value);
      console.log('asd');
    };
    /// 1. 获取dom
    // console.log(preRef.value);

    // onMounted(() => {
    //   console.log(preRef.value);
    // });

    // nextTick(() => {
    //   console.log(preRef.value);
    // });

    return {
      handleClick,
      msg,
      preRef,
      inputRef,
    };
  },
});
</script>
<style lang="scss">
.wrap {
  color: red;
}
</style>