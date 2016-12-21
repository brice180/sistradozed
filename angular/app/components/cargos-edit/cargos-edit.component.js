class CargosEditController{
    constructor ($stateParams, $state, API) {
    'ngInject'

    this.$state = $state
    this.formSubmitted = false
    this.alerts = []

    if ($stateParams.alerts) {
      this.alerts.push($stateParams.alerts)
    }

    let cargoId = $stateParams.cargoId
    let Cargo = API.service('cargo-show', API.all('cargos'))
    Cargo.one(cargoId).get()
      .then((response) => {
        this.cargo = API.copy(response)
      })
  }

  save (isValid) {
    if (isValid) {
      let $state = this.$state
      this.cargo.put()
        .then(() => {
          let alert = { type: 'success', 'title': 'Éxito!', msg: 'Datos actualizados.' }
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

export const CargosEditComponent = {
    templateUrl: './views/app/components/cargos-edit/cargos-edit.component.html',
    controller: CargosEditController,
    controllerAs: 'vm',
    bindings: {}
}
