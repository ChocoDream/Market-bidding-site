import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Auction from "../views/Auction.vue";
import CreateAuction from "../views/CreateAuction.vue";
import Chat from "../views/Chat.vue";
import ChatWindow from "../components/chat-page/ChatWindow";
import ChatList from "../components/chat-page/ChatList";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/auction/:id",
    name: "Auction",
    component: Auction,
  },
  {
    path: "/create-auction",
    name: "CreateAuction",
    component: CreateAuction,
  },
  {
    path: "/chat",
    name: "Chat",
    component: Chat,
    children: [
      {
        path: ":id",
        component: ChatWindow,
      },
      {
        path: "",
        component: ChatList,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
