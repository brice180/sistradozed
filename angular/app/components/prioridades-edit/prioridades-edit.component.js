class PrioridadesEditController{
    constructor ($stateParams, $state, API) {
    'ngInject'

    this.$state = $state
    this.formSubmitted = false
    this.alerts = []

    if ($stateParams.alerts) {
      this.alerts.push($stateParams.alerts)
    }

    let prioridadId = $stateParams.prioridadId
    let Prioridad = API.service('prioridad-show', API.all('prioridades'))
    Prioridad.one(prioridadId).get()
      .then((response) => {
        this.prioridad = API.copy(response)
      })
  }

  save (isValid) {
    if (isValid) {
      let $state = this.$state
      this.prioridad.put()
        .then(() => {
          let alert = { type: 'success', 'title': 'Éxito!', msg: 'Prioridad actualizada.' }
          $state.go($state.current, { alerts: alert})
        }, (response) => {
          let alert = { type: 'error', 'title': 'Error!', msg: response.data.message }
          $state.go($state.current, { alerts: alert})
        })
    } else {
      this.formSubmitted = true
    }
  }


    $onInit(){
    }
}

export const PrioridadesEditComponent = {
    templateUrl: './views/app/components/prioridades-edit/prioridades-edit.component.html',
    controller: PrioridadesEditController,
    controllerAs: 'vm',
    bindings: {}
}
