import { nextTick, ref } from "vue"

export default function useInputAutoFocus (){
  const inputRef = ref(null)

  nextTick(()=> {
    inputRef.value?.focus()
  })

  return {
    inputRef
  }
}