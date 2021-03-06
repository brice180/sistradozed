class ExpdtrecibidosAddController{
    constructor(API, $state,$stateParams, $scope, $uibModal, $log){
        'ngInject'

        this.API = API
        this.$state = $state
        this.formSubmitted = false
        this.alerts = []

        this.origenes = API.all('origenes').getList().$object
        this.origen=1
        this.tipodocs = API.all('tipodocumentos').getList().$object 
        this.oficinas = API.all('oficinas').getList().$object
        this.entis = API.all('entidades').getList().$object        
        this.origenes = API.all('origenes').getList().$object

        this.$uibModal = $uibModal
        this.$log = $log
        this.$scope = $scope
        this.items = ['item1', 'item2', 'item3']
        this.factual = new Date()
        this.origen=1
        this.anio= (new Date).getFullYear()
        this.animationsEnabled = true  

        if ($stateParams.alerts) {
          this.alerts.push($stateParams.alerts)
        }   
        console.log(this.origen2)
    }

     modalOpen (size) {
    let $uibModal = this.$uibModal
    let $scope = this.$scope
    let $log = this.$log
    let items = this.items

    var modalInstance = $uibModal.open({
      animation: this.animationsEnabled,
      templateUrl: 'myModalContent.html',
      controller: this.modalcontroller,
      controllerAs: 'mvm',
      size: size,
      resolve: {
        items: () => {
          return items
        }
      }
    })

    modalInstance.result.then((selectedItem) => {
      $scope.selected = selectedItem
    }, () => {
      $log.info('Modal dismissed at: ' + new Date())
    })
  }

  modalcontroller ($scope, $uibModalInstance, items) {
    'ngInject'

    this.items = items

    $scope.selected = {
      item: items[0]
    }

    this.ok = () => {
      $uibModalInstance.close($scope.selected.item)
    }

    this.cancel = () => {
      $uibModalInstance.dismiss('cancel')
    }
  }


    $onInit(){}
}

export const ExpdtrecibidosAddComponent = {
    templateUrl: './views/app/components/expdtrecibidos-add/expdtrecibidos-add.component.html',
    controller: ExpdtrecibidosAddController,
    controllerAs: 'vm',
    bindings: {}
}
