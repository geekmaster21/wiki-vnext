const routes = [
  {
    path: '/',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('../pages/Index.vue') },
      { path: 'n/:editor?', component: () => import('../pages/Index.vue') }
    ]
  },
  {
    path: '/login',
    component: () => import('../layouts/AuthLayout.vue'),
    children: [
      { path: '', component: () => import('../pages/Login.vue') }
    ]
  },
  {
    path: '/p',
    component: () => import('../layouts/ProfileLayout.vue'),
    children: [
      { path: '', redirect: '/p/profile' },
      { path: 'profile', component: () => import('../pages/Profile.vue') }
    ]
  },
  {
    path: '/_admin',
    component: () => import('../layouts/AdminLayout.vue'),
    children: [
      { path: '', redirect: '/_admin/dashboard' },
      { path: 'dashboard', component: () => import('../pages/AdminDashboard.vue') },
      { path: 'sites', component: () => import('../pages/AdminSites.vue') },
      { path: 'general', component: () => import('../pages/AdminGeneral.vue') },
      { path: 'editors', component: () => import('../pages/AdminEditors.vue') },
      { path: 'locale', component: () => import('../pages/AdminLocale.vue') },
      { path: 'login', component: () => import('../pages/AdminLogin.vue') },
      { path: 'navigation', component: () => import('../pages/AdminNavigation.vue') },
      { path: 'storage/:id?', component: () => import('../pages/AdminStorage.vue') },
      // { path: 'pages', component: () => import('../pages/AdminPages.vue') },
      // { path: 'pages/:id(\\d+)', component: () => import('../pages/AdminPagesEdit.vue') },
      // { path: 'pages/visualize', component: () => import('../pages/AdminPagesVisualize.vue') },
      // { path: 'tags', component: () => import('../pages/AdminTags.vue') },
      { path: 'theme', component: () => import('../pages/AdminTheme.vue') },
      { path: 'auth', component: () => import('../pages/AdminAuth.vue') },
      { path: 'groups/:id?/:section?', component: () => import('../pages/AdminGroups.vue') },
      { path: 'users/:id?/:section?', component: () => import('../pages/AdminUsers.vue') },
      // { path: 'users/:id(\\d+)', component: () => import('../pages/AdminUsersEdit.vue') },
      // { path: 'analytics', component: () => import('../pages/AdminAnalytics.vue') },
      // { path: 'comments', component: () => import('../pages/AdminComments.vue') },
      // { path: 'rendering', component: () => import('../pages/AdminRendering.vue') },
      // { path: 'logging', component: () => import('../pages/AdminLogging.vue') },
      { path: 'api', component: () => import('../pages/AdminApi.vue') },
      { path: 'extensions', component: () => import('../pages/AdminExtensions.vue') },
      { path: 'mail', component: () => import('../pages/AdminMail.vue') },
      { path: 'security', component: () => import('../pages/AdminSecurity.vue') },
      // { path: 'ssl', component: () => import('../pages/AdminSsl.vue') },
      { path: 'system', component: () => import('../pages/AdminSystem.vue') },
      { path: 'utilities', component: () => import('../pages/AdminUtilities.vue') },
      { path: 'webhooks', component: () => import('../pages/AdminWebhooks.vue') },
      { path: 'flags', component: () => import('../pages/AdminFlags.vue') }
    ]
  },
  {
    path: '/_unknown-site',
    component: () => import('../pages/UnknownSite.vue')
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('../pages/Error404.vue')
  }
]

export default routes
