class EntidadesEditController{
    constructor ($stateParams, $state, API) {
    'ngInject'

    this.$state = $state
    this.formSubmitted = false
    this.alerts = []

    if ($stateParams.alerts) {
      this.alerts.push($stateParams.alerts)
    }

    let entidadId = $stateParams.entidadId
    let Entidad = API.service('entidad-show', API.all('entidades'))
    Entidad.one(entidadId).get()
      .then((response) => {
        this.entidad = API.copy(response)
      })
  }

  save (isValid) {
    if (isValid) {
      let $state = this.$state
      this.entidad.put()
        .then(() => {
          let alert = { type: 'success', 'title': 'Éxito!', msg: 'Entidad actualizada.' }
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

export const EntidadesEditComponent = {
    templateUrl: './views/app/components/entidades-edit/entidades-edit.component.html',
    controller: EntidadesEditController,
    controllerAs: 'vm',
    bindings: {}
}
