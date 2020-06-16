import { defineComponent } from 'vue'
import './my-Input.css'

const MyInput = defineComponent({
  setup(props) {
    const handleChange = e => {
      props.onChange(e.target.value)
    }
    // return () => (
    //   <input value={props.value} onInput={handleChange} />
    // )
  },

  render() {
    return (
      <input value={props.value} onInput={this.handleChange} />
    )
  }
})

export default MyInput