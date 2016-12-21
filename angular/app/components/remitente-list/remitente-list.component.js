class RemitenteListController{
    constructor($scope, $state, $compile, DTOptionsBuilder, DTColumnBuilder, API){
        'ngInject'

    this.API = API
    this.$state = $state
    let Remitentes = this.API.service('remitentes')
    
    Remitentes.getList()
      .then((response) => {
        let dataSet = response.plain()

        this.dtOptions = DTOptionsBuilder.newOptions()
          .withOption('data', dataSet)
          .withOption('createdRow', createdRow)
          .withOption('responsive', true)
          .withBootstrap()

        this.dtColumns = [
          DTColumnBuilder.newColumn('id').withTitle('ID'),
          DTColumnBuilder.newColumn('tipodoc').withTitle('Tipo Doc.'),
          DTColumnBuilder.newColumn('numdoc').withTitle('Número Doc.'),
          DTColumnBuilder.newColumn('nombres').withTitle('Nombres'),
          DTColumnBuilder.newColumn('apellidos').withTitle('Apellidos'),
          DTColumnBuilder.newColumn('entidad').withTitle('Entidad'),
          DTColumnBuilder.newColumn('razonSocial').withTitle('Razón Social'),
          DTColumnBuilder.newColumn(null).withTitle('Acciones').notSortable()
            .renderWith(actionsHtml)
        ]

        this.displayTable = true
      })

    let createdRow = (row) => {
      $compile(angular.element(row).contents())($scope)
    }

    let actionsHtml = (data) => {
      return `
                <a class="btn btn-xs btn-warning" ui-sref="app.remitenteedit({remitenteId: ${data.id}})">
                    <i class="fa fa-edit"></i>
                </a>
                &nbsp
                <button class="btn btn-xs btn-danger" ng-click="vm.delete(${data.id})">
                    <i class="fa fa-trash-o"></i>
                </button>`
    }
  }

  delete (remitenteId) {
    let API = this.API
    let $state = this.$state

    swal({
      title: 'Estas seguro?',
      text: 'Estos datos no podrán ser recuperados!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#DD6B55',
      confirmButtonText: 'Si, eliminar',
      closeOnConfirm: false,
      showLoaderOnConfirm: true,
      html: false
    }, function () {
      API.one('remitentes').one('remitente', remitenteId).remove()
        .then(() => {
          swal({
            title: 'Eliminado!',
            text: 'Remitente eliminado con éxito.',
            type: 'success',
            confirmButtonText: 'OK',
            closeOnConfirm: true
          }, function () {
            $state.reload()
          })
        })
    })
    }

    $onInit(){}
}

export const RemitenteListComponent = {
    templateUrl: './views/app/components/remitente-list/remitente-list.component.html',
    controller: RemitenteListController,
    controllerAs: 'vm',
    bindings: {}
}
