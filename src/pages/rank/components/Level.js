import { h } from 'vue'

const Level = (props, ctx) => {
  return h(`h${props.level}`, ctx.attrs, ctx.slots)
}

Level.props = ['level']

export default Level