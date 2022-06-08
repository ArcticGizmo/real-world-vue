import { defineStore } from "pinia";

export const useUserStore = defineStore("UserStore", {
  state() {
    return {
      user: "Ben Hong",
    };
  },
  getters: {
    firstName() {
      return this.user.split(" ")[0];
    },
  },
});
