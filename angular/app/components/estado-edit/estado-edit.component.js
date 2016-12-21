class EstadoEditController{
    constructor ($stateParams, $state, API) {
    'ngInject'

    this.$state = $state
    this.formSubmitted = false
    this.alerts = []

    if ($stateParams.alerts) {
      this.alerts.push($stateParams.alerts)
    }

    let estadoId = $stateParams.estadoId
    let Estado = API.service('estados-show', API.all('estados'))
    Estado.one(estadoId).get()
      .then((response) => {
        this.estado = API.copy(response)
      })
  }

  save (isValid) {
    if (isValid) {
      let $state = this.$state
      this.estado.put()
        .then(() => {
          let alert = { type: 'success', 'title': 'Éxito!', msg: 'Estado actualizado.' }
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

export const EstadoEditComponent = {
    templateUrl: './views/app/components/estado-edit/estado-edit.component.html',
    controller: EstadoEditController,
    controllerAs: 'vm',
    bindings: {}
}
