import Axios from 'axios'

const createItem = (todo) => Axios.post('api/todo/create', todo)
const getAll = (params) => Axios.get('api/todo/all', { params })
const getItem = ({ id, ...params }) => Axios.get(`api/todo/item/${id}`, { params })
const updateStatusItem = ({ id, status, ...params }) => Axios.post(`api/todo/item/${id}/status/${status}`, { params })
const removeItem = ({ id, ...params }) => Axios.get(`api/todo/item/${id}/remove`, { id })

export {
  createItem,
  getAll,
  getItem,
  updateStatusItem,
  removeItem
}
