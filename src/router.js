import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      meta: {layout : "Login"},
      component: Login
    },
    {
      path: '/inicio',
      name: 'inicio',
      component: () => import('./views/Inicio.vue')
    },
    {
      path: '/administracion/empresas',
      name: 'AdministracionEmpresa',
      component: () => import('./views/Administracion/Empresa.vue')
    },
    {
      path: '/administracion/empleados',
      name: 'AdministracionEmpleado',
      component: () => import('./views/Administracion/Empleado.vue')
    }
  ]
})
