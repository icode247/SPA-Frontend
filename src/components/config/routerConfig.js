import { createRouter, createWebHistory } from "vue-router";

import Transactions from "../Transactions.vue";
import TransactionDetails from "../TransactionDetails.vue";

const routes = [
  { path: "/", component: Transactions },
  { path: "/transaction/:id", name: "detail", component: TransactionDetails },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
