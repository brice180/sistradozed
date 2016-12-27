class ProcedimientoEditController{
    constructor ($stateParams, $state, API, $scope) {
    'ngInject'
    this.$state = $state
    this.formSubmitted = false
    this.alerts = []    
    this.$scope = $scope

    $scope.oficinas = API.all('oficinas').getList().$object
    
    let uitId = 3
    let Uit = API.service('uit-show', API.all('uits'))
   //let Uit = API.service('uitactual', API.all('uits'))
    Uit.one(uitId).get()
      .then((response) => {
        this.uit = API.copy(response)
      })

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

export const ProcedimientoEditComponent = {
    templateUrl: './views/app/components/procedimiento-edit/procedimiento-edit.component.html',
    controller: ProcedimientoEditController,
    controllerAs: 'vm',
    bindings: {}
}
