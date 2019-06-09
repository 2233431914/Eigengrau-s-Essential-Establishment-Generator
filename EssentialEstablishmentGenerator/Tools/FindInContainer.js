export function findInContainer (container, key, value) {
  // searches with a depth of one; i.e. this will search the object setup.professions for a specific
  console.log(`running findInContainer...`)
  console.log({
    container,
    key,
    value
  })
  const found = Object.keys(container).forEach(function (object) {
    if (container[object][key].includes(value)) {
      console.log(`Found ${value} in ${object}`)
      return container[object]
    }
  })
  return found
}
