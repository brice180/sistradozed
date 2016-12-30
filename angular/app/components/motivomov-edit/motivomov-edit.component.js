class MotivomovEditController{
     constructor ($stateParams, $state, API) {
    'ngInject'

    this.$state = $state
    this.formSubmitted = false
    this.alerts = []

    if ($stateParams.alerts) {
      this.alerts.push($stateParams.alerts)
    }

    let motivoId = $stateParams.motivoId
    let Motivo = API.service('motivo-show', API.all('motivos'))
    Motivo.one(motivoId).get()
      .then((response) => {
        this.motivo = API.copy(response)
      })
  }

  save (isValid) {
    if (isValid) {
      let $state = this.$state
      this.motivo.put()
        .then(() => {
          let alert = { type: 'success', 'title': 'Éxito!', msg: 'Motivo actualizado.' }
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

export const MotivomovEditComponent = {
    templateUrl: './views/app/components/motivomov-edit/motivomov-edit.component.html',
    controller: MotivomovEditController,
    controllerAs: 'vm',
    bindings: {}
}
