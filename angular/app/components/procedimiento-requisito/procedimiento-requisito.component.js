class ProcedimientoRequisitoController{
    constructor ($stateParams, $state, API, $scope) {
    'ngInject'
    this.$state = $state
    this.formSubmitted = false
    this.alerts = []    
    this.$scope = $scope
    this.listarequisitos = []

    $scope.requisitos = API.all('requisitos').getList().$object
    
    if ($stateParams.alerts) {
      this.alerts.push($stateParams.alerts)
    }

    let procedimientoId = $stateParams.procedimientoId
    let Procedimiento = API.service('procedimiento-show', API.all('procedimientos'))
    Procedimiento.one(procedimientoId).get()
      .then((response) => { 
        this.procedimiento = API.copy(response) 
    })        
  }

  agregarequisito() {
    let $scope = this.$scope
    this.listarequisitos.push({id: this.requisito.id, descripcion: this.requisito.descripcion})
    this.requisito=null
  }

  save (isValid) {
    if (isValid) {
      let $state = this.$state
      this.procedimiento.put()
        .then(() => {
          let alert = { type: 'success', 'title': 'Éxito!', msg: 'Procedimiento actualizado.' }
          $state.go($state.current, { alerts: alert})
        }, (response) => {
          let alert = { type: 'error', 'title': 'Error!', msg: response.data.message }
          $state.go($state.current, { alerts: alert})
        })
    } else {
      this.formSubmitted = true
    }
  }

    $onInit(){}
}

export const ProcedimientoRequisitoComponent = {
    templateUrl: './views/app/components/procedimiento-requisito/procedimiento-requisito.component.html',
    controller: ProcedimientoRequisitoController,
    controllerAs: 'vm',
    bindings: {}
}
