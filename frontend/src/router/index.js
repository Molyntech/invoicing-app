import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/components/SignIn'
import Dashboard from '@/components/Dashboard'
import SingleInvoice from "@/components/SingleInvoice";


Vue.use(Router)

export default new Router({

  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/invoices',
      name: "SingleInvoice",
      component: SingleInvoice
    }
  ]
});
