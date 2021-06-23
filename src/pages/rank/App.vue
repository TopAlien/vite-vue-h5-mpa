<template>
  <div>
    rank
    <Model message="哇咔咔"></Model>
  </div>
</template>

<script>
import Model from './components/Model.vue'

export default {
  components: {
    Model
  },
  data(){
    return {
      msg: "哇咔咔"
    }
  },
  created(){
    console.log(import.meta.env)
  }
}
</script>