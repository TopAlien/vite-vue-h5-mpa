<template>
  <h2>sad</h2>
  {{ message }}
  <Field v-model="msg"></Field>
  <Button @click="handleClick">click</Button>
  <LevelComponent :level="2">{{ message }}</LevelComponent>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { Field, Button } from 'vant';
import LevelComponent from './Level';

export default defineComponent({
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  components: {
    Field,
    Button,
    LevelComponent
  },
  setup() {
    const msg = ref('哇咔咔');

    const handleClick = () => {
      console.log(msg.value);
      console.log('asd');
    };

    return {
      handleClick,
      msg,
    };
  },
});
</script>
