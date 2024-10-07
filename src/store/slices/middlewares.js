export const logger = (store) => (next) => (action) => {
  console.group(action.type)
  console.info("dispatching", action)
  const result = next(action)
  console.log("next state", store.getState()) // Выводим новое состояние в консоль
  console.groupEnd()
  return result
}
