class ProcedimientoListController{
    constructor($scope, $state, $compile, DTOptionsBuilder, DTColumnBuilder, API){
        'ngInject'

    this.API = API
    this.$state = $state
    let Procedimientos = this.API.service('procedimientos')
    
    Procedimientos.getList()
      .then((response) => {
        let dataSet = response.plain()

        this.dtOptions = DTOptionsBuilder.newOptions()
          .withOption('data', dataSet)
          .withOption('createdRow', createdRow)
          .withOption('responsive', true)
          .withBootstrap()

        this.dtColumns = [
          DTColumnBuilder.newColumn('id').withTitle('ID'),
          DTColumnBuilder.newColumn('descripcion').withTitle('Descripción'),
          DTColumnBuilder.newColumn('porcentaje_uit').withTitle('% UIT'),
          DTColumnBuilder.newColumn('monto').withTitle('Monto'),
          DTColumnBuilder.newColumn('dias_resolver').withTitle('Plazo (Días)'),
          DTColumnBuilder.newColumn('inicia').withTitle('Inicia Proc.'),
          DTColumnBuilder.newColumn('resuelve').withTitle('Resuelve Proc.'),
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
                <a class="btn btn-xs btn-warning" ui-sref="app.procedimientoedit({procedimientoId: ${data.id}})">
                    <i class="fa fa-edit"></i>
                </a>
                &nbsp
                <a class="btn btn-xs btn-warning" ui-sref="app.procedrequisito({procedimientoId: ${data.id}})">
                    <i class="fa fa-file-text-o"></i>
                </a>
                &nbsp
                <button class="btn btn-xs btn-danger" ng-click="vm.delete(${data.id})">
                    <i class="fa fa-trash-o"></i>
                </button>`
    }
  }

  delete (procedimientoId) {
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
      API.one('procedimientos').one('procedimiento', procedimientoId).remove()
        .then(() => {
          swal({
            title: 'Eliminado!',
            text: 'Procedimiento eliminado con éxito.',
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

export const ProcedimientoListComponent = {
    templateUrl: './views/app/components/procedimiento-list/procedimiento-list.component.html',
    controller: ProcedimientoListController,
    controllerAs: 'vm',
    bindings: {}
}
