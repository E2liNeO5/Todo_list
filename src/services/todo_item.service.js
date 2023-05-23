import axios from "axios"
import config from "../../config.json"

const TodoItemService = {
  itemsLimit: 3,
  async getAll(page) {
    const data = await axios.get(`${config.server_url}/todo?_page=${page}&_limit=${this.itemsLimit}&_sort=id&_order=desc`)
    return data.data
  },
  async addItem(item) {
    return await axios.post(`${config.server_url}/todo`, item)
  },
  async deleteItem(id) {
    return await axios.delete(`${config.server_url}/todo/${id}`)
  },
  async getMaxPageNumber() {
    const data = await axios.get(`${config.server_url}/todo`)
    return Math.ceil(data.data.length / this.itemsLimit)
  }
}

export default TodoItemService