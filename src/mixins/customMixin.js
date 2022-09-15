const customMixin = (names = []) => {
  let computed = {}
  for (let i = 0; i < names.length; i++) {
    computed[names[i]] = () => {
      return `Hello, ${names[i]}`
    }
  }
  return computed
}
export default customMixin
