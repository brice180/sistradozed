export function RoutesConfig ($stateProvider, $urlRouterProvider) {
  'ngInject'

  var getView = (viewName) => {
    return `./views/app/pages/${viewName}/${viewName}.page.html`
  }

  var getLayout = (layout) => {
    return `./views/app/pages/layout/${layout}.page.html`
  }

  $urlRouterProvider.otherwise('/')

  $stateProvider
    .state('app', {
      abstract: true,
      views: {
        'layout': {
          templateUrl: getLayout('layout')
        },
        'header@app': {
          templateUrl: getView('header')
        },
        'footer@app': {
          templateUrl: getView('footer')
        },
        main: {}
      },
      data: {
        bodyClass: 'hold-transition skin-blue sidebar-mini'
      }
    })
    .state('app.landing', {
      url: '/',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          templateUrl: getView('landing')
        }
      }
    })
    .state('app.tablessimple', {
      url: '/tables-simple',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<tables-simple></tables-simple>'
        }
      }
    })
    .state('app.uiicons', {
      url: '/ui-icons',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<ui-icons></ui-icons>'
        }
      }
    })
    .state('app.uimodal', {
      url: '/ui-modal',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<ui-modal></ui-modal>'
        }
      }
    })
    .state('app.uitimeline', {
      url: '/ui-timeline',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<ui-timeline></ui-timeline>'
        }
      }
    })
    .state('app.uibuttons', {
      url: '/ui-buttons',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<ui-buttons></ui-buttons>'
        }
      }
    })
    .state('app.uigeneral', {
      url: '/ui-general',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<ui-general></ui-general>'
        }
      }
    })
    .state('app.formsgeneral', {
      url: '/forms-general',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<forms-general></forms-general>'
        }
      }
    })
    .state('app.chartjs', {
      url: '/charts-chartjs',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<charts-chartjs></charts-chartjs>'
        }
      }
    })
    .state('app.comingsoon', {
      url: '/comingsoon',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<coming-soon></coming-soon>'
        }
      }
    })
    .state('app.profile', {
      url: '/profile',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<user-profile></user-profile>'
        }
      },
      params: {
        alerts: null
      }
    })
    .state('app.motivoslist', {
      url: '/lista-motivos-mov',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<motivomov-list></motivomov-list>'
        }
      }
    })
    .state('app.tipodocumentolist', {
      url: '/lista-tipo-documento',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<tipodocumento-list></tipodocumento-list>'
        }
      }
    })
    .state('app.userlist', {
      url: '/user-lists',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<user-lists></user-lists>'
        }
      }
    })
    .state('app.expdtrecibidoslist', {
      url: '/expedientes-recibidos',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<expdtrecibidos-list></expdtrecibidos-list>'
        }
      }
    })
    .state('app.motivoedit', {
      url: '/editar-motivo-mov/:motivoId',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<motivomov-edit></motivomov-edit>'
        }
      },
      params: {
        alerts: null,
        motivoId: null
      }
    })
    .state('app.useredit', {
      url: '/user-edit/:userId',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<user-edit></user-edit>'
        }
      },
      params: {
        alerts: null,
        userId: null
      }
    })
    .state('app.userroles', {
      url: '/user-roles',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<user-roles></user-roles>'
        }
      }
    })
    .state('app.userpermissions', {
      url: '/user-permissions',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<user-permissions></user-permissions>'
        }
      }
    })
    .state('app.prioridadeslist', {
      url: '/listar-prioridades',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<prioridades-list></prioridades-list>'
        }
      }
    })
    .state('app.uitlist', {
      url: '/listar-uit',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<uit-list></uit-list>'
        }
      }
    })
    .state('app.estadolist', {
      url: '/estado-list',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<estado-list></estado-list>'
        }
      }
    })
    .state('app.procedimientoslist', {
      url: '/listar-procedimientos',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<procedimiento-list></procedimiento-list>'
        }
      }
    })
    .state('app.requisitoslist', {
      url: '/listar-requisitos',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<requisitos-list></requisitos-list>'
        }
      }
    })
    .state('app.cargoslist', {
      url: '/cargos-list',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<cargos-list></cargos-list>'
        }
      }
    })
    .state('app.entidadeslist', {
      url: '/entidades-list',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<entidades-list></entidades-list>'
        }
      }
    })
    .state('app.tipodoclist', {
      url: '/tipodoc-list',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<tipodoc-list></tipodoc-list>'
        }
      }
    })
    .state('app.oficinaslist', {
      url: '/oficinas-list',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<oficinas-list></oficinas-list>'
        }
      }
    })
    .state('app.remitenteslist', {
      url: '/remitente-list',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<remitente-list></remitente-list>'
        }
      }
    })
    .state('app.motivoadd', {
      url: '/agregar-motivo-mov',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<motivomov-add></motivomov-add>'
        }
      },
      params: {
        alerts: null
      }
    })
    .state('app.uitadd', {
      url: '/agregar-uit',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<uit-add></uit-add>'
        }
      },
      params: {
        alerts: null
      }
    })
    .state('app.estadoadd', {
      url: '/estado-add',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<estado-add></estado-add>'
        }
      },
      params: {
        alerts: null
      }
    })
    .state('app.prioridadadd', {
      url: '/agregar-prioridad',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<prioridades-add></prioridades-add>'
        }
      },
      params: {
        alerts: null
      }
    })
    .state('app.tipodocumentoadd', {
      url: '/agregar-tipo-documento',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<tipodocumento-add></tipodocumento-add>'
        }
      },
      params: {
        alerts: null
      }
    })
    .state('app.tipodocumentoedit', {
      url: '/editar-tipo-documento/:tipodocumentoId',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<tipodocumento-edit></tipodocumento-edit>'
        }
      },
      params: {
        alerts: null,
        tipodocumentoId: null
      }
    })
    .state('app.procedimientoadd', {
      url: '/nuevo-procedimiento',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<procedimiento-add></procedimiento-add>'
        }
      },
      params: {
        alerts: null
      }
    })
    .state('app.requisitoadd', {
      url: '/nuevo-requisito',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<requisito-add></requisito-add>'
        }
      },
      params: {
        alerts: null
      }
    })
    .state('app.useradd', {
      url: '/nuevo-usuario',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<users-add></users-add>'
        }
      },
      params: {
        alerts: null
      }
    })
    .state('app.expedienteadd', {
      url: '/nuevo-expediente',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<expdtrecibidos-add></expdtrecibidos-add>'
        }
      },
      params: {
        alerts: null
      }
    })
    .state('app.cargosadd', {
      url: '/cargos-add',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<cargos-add></cargos-add>'
        }
      },
      params: {
        alerts: null
      }
    })
    .state('app.entidadesadd', {
      url: '/entidades-add',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<entidades-add></entidades-add>'
        }
      },
      params: {
        alerts: null
      }
    })
    .state('app.tipodocadd', {
      url: '/tipodoc-add',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<tipodoc-add></tipodoc-add>'
        }
      },
      params: {
        alerts: null
      }
    })
    .state('app.remitenteadd', {
      url: '/remitente-add',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<remitente-add></remitente-add>'
        }
      },
      params: {
        alerts: null
      }
    })
    .state('app.oficinasadd', {
      url: '/oficinas-add',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<oficinas-add></oficinas-add>'
        }
      },
      params: {
        alerts: null
      }
    })
    .state('app.prioridadedit', {
      url: '/editar-prioridad/:prioridadId',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<prioridades-edit></prioridades-edit>'
        }
      },
      params: {
        alerts: null,
        prioridadId: null
      }
    })
    .state('app.uitedit', {
      url: '/editar-uit/:uitId',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<uit-edit></uit-edit>'
        }
      },
      params: {
        alerts: null,
        uitId: null
      }
    })
    .state('app.estadoedit', {
      url: '/estado-edit/:estadoId',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<estado-edit></estado-edit>'
        }
      },
      params: {
        alerts: null,
        estadoId: null
      }
    })
    .state('app.procedimientoedit', {
      url: '/editar-procedimiento/:procedimientoId',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<procedimiento-edit></procedimiento-edit>'
        }
      },
      params: {
        alerts: null,
        procedimientoId: null
      }
    })
    .state('app.procedrequisito', {
      url: '/procedimiento-req/:procedimientoId',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<procedimiento-requisito></procedimiento-requisito>'
        }
      },
      params: {
        alerts: null,
        procedimientoId: null
      }
    })
    .state('app.requisitoedit', {
      url: '/editar-requisito/:requisitoId',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<requisito-edit></requisito-edit>'
        }
      },
      params: {
        alerts: null,
        requisitoId: null
      }
    })
    .state('app.tipodocedit', {
      url: '/tipodoc-edit/:tipodocId',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<tipodoc-edit></tipodoc-edit>'
        }
      },
      params: {
        alerts: null,
        tipodocId: null
      }
    })
    .state('app.cargoedit', {
      url: '/cargos-edit/:cargoId',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<cargos-edit></cargos-edit>'
        }
      },
      params: {
        alerts: null,
        cargoId: null
      }
    })
    .state('app.oficinaedit', {
      url: '/oficinas-edit/:oficinaId',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<oficinas-edit></oficinas-edit>'
        }
      },
      params: {
        alerts: null,
        oficinaId: null
      }
    })
    .state('app.userpermissionsadd', {
      url: '/user-permissions-add',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<user-permissions-add></user-permissions-add>'
        }
      },
      params: {
        alerts: null
      }
    })
    .state('app.userpermissionsedit', {
      url: '/user-permissions-edit/:permissionId',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<user-permissions-edit></user-permissions-edit>'
        }
      },
      params: {
        alerts: null,
        permissionId: null
      }
    })
    .state('app.entidadesedit', {
      url: '/entidades-edit/:entidadId',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<entidades-edit></entidades-edit>'
        }
      },
      params: {
        alerts: null,
        entidadId: null
      }
    })
    .state('app.remitenteedit', {
      url: '/editar-remitente/:remitenteId',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<remitente-edit></remitente-edit>'
        }
      },
      params: {
        alerts: null,
        remitenteId: null
      }
    })
    .state('app.userrolesadd', {
      url: '/user-roles-add',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<user-roles-add></user-roles-add>'
        }
      },
      params: {
        alerts: null
      }
    })

    .state('app.userrolesedit', {
      url: '/user-roles-edit/:roleId',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<user-roles-edit></user-roles-edit>'
        }
      },
      params: {
        alerts: null,
        roleId: null
      }
    })
    .state('app.widgets', {
      url: '/widgets',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          template: '<widgets></widgets>'
        }
      }
    })
    .state('login', {
      url: '/login',
      views: {
        'layout': {
          templateUrl: getView('login')
        },
        'header@app': {},
        'footer@app': {}
      },
      data: {
        bodyClass: 'hold-transition login-page'
      },
      params: {
        registerSuccess: null,
        successMsg: null
      }
    })
    .state('loginloader', {
      url: '/login-loader',
      views: {
        'layout': {
          templateUrl: getView('login-loader')
        },
        'header@app': {},
        'footer@app': {}
      },
      data: {
        bodyClass: 'hold-transition login-page'
      }
    })
    .state('register', {
      url: '/register',
      views: {
        'layout': {
          templateUrl: getView('register')
        },
        'header@app': {},
        'footer@app': {}
      },
      data: {
        bodyClass: 'hold-transition register-page'
      }
    })
    .state('userverification', {
      url: '/userverification/:status',
      views: {
        'layout': {
          templateUrl: getView('user-verification')
        }
      },
      data: {
        bodyClass: 'hold-transition login-page'
      },
      params: {
        status: null
      }
    })
    .state('forgot_password', {
      url: '/forgot-password',
      views: {
        'layout': {
          templateUrl: getView('forgot-password')
        },
        'header@app': {},
        'footer@app': {}
      },
      data: {
        bodyClass: 'hold-transition login-page'
      }
    })
    .state('reset_password', {
      url: '/reset-password/:email/:token',
      views: {
        'layout': {
          templateUrl: getView('reset-password')
        },
        'header@app': {},
        'footer@app': {}
      },
      data: {
        bodyClass: 'hold-transition login-page'
      }
    })
    .state('app.logout', {
      url: '/logout',
      views: {
        'main@app': {
          controller: function ($rootScope, $scope, $auth, $state, AclService) {
            $auth.logout().then(function () {
              delete $rootScope.me
              AclService.flushRoles()
              AclService.setAbilities({})
              $state.go('login')
            })
          }
        }
      }
    })
}
