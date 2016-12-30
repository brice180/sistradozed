class MotivomovListController{
     constructor($scope, $state, $compile, DTOptionsBuilder, DTColumnBuilder, API){
        'ngInject'

    this.API = API
    this.$state = $state
    
    let Motivos = this.API.service('motivos')    
    Motivos.getList()
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
                <a class="btn btn-xs btn-warning" ui-sref="app.motivoedit({motivoId: ${data.id}})">
                    <i class="fa fa-edit"></i>
                </a>
                &nbsp
                <button class="btn btn-xs btn-danger" ng-click="vm.delete(${data.id})">
                    <i class="fa fa-trash-o"></i>
                </button>`
    }
  }

  delete (motivoId) {
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
      API.one('motivos').one('motivo', motivoId).remove()
        .then(() => {
          swal({
            title: 'Eliminado!',
            text: 'Motivo eliminado con éxito.',
            type: 'success',
            confirmButtonText: 'OK',
            closeOnConfirm: true
          }, function () {
            $state.reload()
          })
        })
    })
    }

    $onInit(){
    }
}

export const MotivomovListComponent = {
    templateUrl: './views/app/components/motivomov-list/motivomov-list.component.html',
    controller: MotivomovListController,
    controllerAs: 'vm',
    bindings: {}
}
