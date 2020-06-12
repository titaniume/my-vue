import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home';
import NotFound from './views/404';
import Nprogress from 'nprogress';
import 'nprogress/nprogress.css';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/user',
      component: () =>
        import(/*webpackChunkName:"layout",*/ './layouts/UserLayout'),
      children: [
        {
          path: '/user',
          redirect: '/user/Login',
        },
        {
          path: '/user/login',
          name: 'login',
          component: () =>
            import(/*webpackChunkName:"user",*/ './views/User/Login'),
        },
        {
          path: '/user/register',
          name: 'register',
          component: () =>
            import(/*webpackChunkName:"user",*/ './views/User/Register'),
        },
      ],
    },
    {
      path: '/',
      component: () =>
        import(/*webpackChunkName:"layout",*/ './layouts/BasicLayout'),
      children: [
        //dashbord
        {
          path: '/',
          redirect: '/dashboard/analysis',
        },
        {
          path: '/dashboard',
          name: 'dashboard',
          component: { render: h => h('router-view') },
          children: [
            {
              path: '/dashboard/analysis',
              name: 'dashboard',
              component: () =>
                import(
                  /*webpackChunkName:"dashboard",*/ './views/dashboard/Analysis'
                ),
            },
          ],
        },
        //form
        {
          path: '/form',
          name: 'form',
          component: { render: h => h('router-view') },
          children: [
            {
              path: '/form/basic-form',
              name: 'bsicform',
              component: () =>
                import(/*webpackChunkName:"form",*/ './views/Forms/BasicForm'),
            },
            {
              path: '/fomr/step-form',
              name: 'stepform',
              component: () =>
                import(/*webpackChunkName:"form",*/ './views/Forms/StepForm'),
              children: [
                {
                  path: '/form/step-form',
                  redirect: '/form/step-form/info',
                },
                {
                  path: '/form/step-form/info',
                  name: 'info',
                  component: () =>
                    import(
                      /*webpackChunkName:"form",*/ './views/Forms/StepForm/Step1'
                    ),
                },
                {
                  path: '/form/step-form/confirm',
                  name: 'confirm',
                  component: () =>
                    import(
                      /*webpackChunkName:"form",*/ './views/Forms/StepForm/Step2'
                    ),
                },
                {
                  path: '/form/step-form/result',
                  name: 'result',
                  component: () =>
                    import(
                      /*webpackChunkName:"form",*/ './views/Forms/StepForm/Step3'
                    ),
                },
              ],
            },
          ],
        },
      ],
    },
    {
      path: '*',
      name: '404',
      component: NotFound,
    },
  ],
});

router.beforeEach((to, form, next) => {
  Nprogress.start();
  next();
});

router.afterEach(() => {
  Nprogress.done();
});

export default router;
