import axios from "axios";
import { defineStore } from "pinia";

export const useTodoStore = defineStore("todo", {
  state: () => ({
    todos: [],
    baseUrl: "http://localhost:3100/tasks",
  }),
  getters: {
    countTodos: (state) => state.todos.length,
  },
  actions: {
    async fetchTodos() {
      try {
        const response = await axios.get(this.baseUrl);
        this.todos = response.data;
      } catch (error) {
        console.log("Failed to fetch todos:", error);
      }
    },
    async toggleStatus(id) {
      const foundIndex = this.todos.findIndex((t) => t.id == id);
      const doneEndPoint = `${this.baseUrl}/${id}/done`;
      const pendingEndPoint = `${this.baseUrl}/${id}/pending`;
      if (foundIndex >= 0) {
        if (this.todos[foundIndex].completedAt != null) {
          try {
            await axios.patch(pendingEndPoint, { completedAt: null });
            this.todos[foundIndex].completedAt = null;
          } catch (error) {
            console.log(error);
          }
        } else {
          try {
            const date = new Date().toISOString();
            await axios.patch(doneEndPoint, { completedAt: date });
            this.todos[foundIndex].completedAt = date;
          } catch (error) {
            console.log(error);
          }
        }
      }
    },
    async addTodo(todo) {
      const newTodo = {
        id: this.todos.length + 1,
        name: todo.replace(/\r?\n|\r/, ""),
        description: "description",
        createdAt: new Date().toISOString(),
        completedAt: null,
      };
      try {
        await axios.post(this.baseUrl, newTodo);
        this.todos.push(newTodo);
      } catch (error) {
        console.log(error);
      }

      // this.todos = JSON.parse(JSON.stringify(this.todos));
    },
    async clearAll() {
      try {
        await axios.delete(`${this.baseUrl}`);
        this.todos = [];
      } catch (error) {}
    },
  },
});
