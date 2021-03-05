import Vue from 'vue'
import Vuex from 'vuex'
import AsyncLock from 'async-lock'
import * as modules from './modules'

Vue.use(Vuex)

const lock = new AsyncLock({ domainReentrant: true })

/* eslint-disable-next-line no-undef */
const initialData = {}

export default () => {
  const store = new Vuex.Store({
    modules: Object.entries(modules)
      .map(([key, factory]) => {
        function safeExec (callable) {
          return lock.acquire(
            `vuex/module/${key}`,
            callable
          )
        }
        return {
          key,
          value: factory({ safeExec, lock, initialData: initialData[key] })
        }
      })
      .reduce((t, entry) => ({
        ...t,
        [entry.key]: entry.value
      }), {})
  })
  return store
}
