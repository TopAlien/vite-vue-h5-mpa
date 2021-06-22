<template>
  <div>
    阿沙迪克
    <Button type="primary">玩撒的</Button>
    <HelloWorld msg="哇咔咔"></HelloWorld>
  </div>
</template>

<script>
import { Button } from 'vant';
import HelloWorld from './components/HelloWorld.vue'
export default {
  components: {
    Button,
    HelloWorld
  },
};
</script>
