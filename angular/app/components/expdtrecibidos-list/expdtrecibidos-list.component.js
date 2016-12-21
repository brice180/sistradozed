class ExpdtrecibidosListController{
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
          DTColumnBuilder.newColumn('id').withTitle('N°'),
          DTColumnBuilder.newColumn('tipodoc').withTitle('Fecha Ingreso'),
          DTColumnBuilder.newColumn('numdoc').withTitle('Hora Ingreso.'),
          DTColumnBuilder.newColumn('nombres').withTitle('Tupa'),
          DTColumnBuilder.newColumn('apellidos').withTitle('Solicitante'),
          DTColumnBuilder.newColumn('entidad').withTitle('Asunto'),
          DTColumnBuilder.newColumn('razonSocial').withTitle('Expediente'),
           DTColumnBuilder.newColumn('razonSocial').withTitle('Folios'),
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
                <a class="btn btn-xs btn-warning" ui-sref="app.cargoedit({cargoId: ${data.id}})">
                    <i class="fa fa-edit"></i>
                </a>
                &nbsp
                <button class="btn btn-xs btn-danger" ng-click="vm.delete(${data.id})">
                    <i class="fa fa-trash-o"></i>
                </button>`
    }
  }
 
  delete (entidadId) {
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
      API.one('entidades').one('entidad', entidadId).remove()
        .then(() => {
          swal({
            title: 'Eliminado!',
            text: 'Entidad externa eliminada con éxito.',
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

export const ExpdtrecibidosListComponent = {
    templateUrl: './views/app/components/expdtrecibidos-list/expdtrecibidos-list.component.html',
    controller: ExpdtrecibidosListController,
    controllerAs: 'vm',
    bindings: {}
}
