import {
  createItem,
  getAll,
  getItem,
  updateStatusItem,
  removeItem
}from './Todo.service'

export default {
  name: 'Todo',

  components: {
  },

  filters: {},

  computed: {},

  watch: {},

  data: () => ({
    items: [],
    inputName: ''
  }),

  methods: {
    async createItem (name) {
      const { data } = await createItem({ name })
      this.inputName = ''
      this.getAll()
    },
    async getAll () {
      const { data } = await getAll()
      this.items = data
    },
    async getItem (id) {
      const { data } = await getItem({ id })
      const item = this.items.find(i => String(i.id) === String(id))
      if (item) {
        item = data
      } else {
        items.push(data)
      }
      this.items = [...this.items]
    },
    async updateStatusItem (id, status) {
      await updateStatusItem({ id, status })
      // this.getItem(id)
      this.getAll()
    },
    async removeItem (id) {
      const { data } = await removeItem({ id })
      this.getAll()
    }
  },

  async created () {
    this.getAll()
  },
  async beforeDestroy () {}
}
