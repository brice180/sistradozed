class RequisitoEditController{
    constructor ($stateParams, $state, API) {
    'ngInject'

    this.$state = $state
    this.formSubmitted = false
    this.alerts = []

    if ($stateParams.alerts) {
      this.alerts.push($stateParams.alerts)
    }

    let requisitoId = $stateParams.requisitoId
    let Requisito = API.service('requisito-show', API.all('requisitos'))
    Requisito.one(requisitoId).get()
      .then((response) => {
        this.requisito = API.copy(response)
      })
  }

  save (isValid) {
    if (isValid) {
      let $state = this.$state
      this.requisito.put()
        .then(() => {
          let alert = { type: 'success', 'title': 'Éxito!', msg: 'Requisito actualizado.' }
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

export const RequisitoEditComponent = {
    templateUrl: './views/app/components/requisito-edit/requisito-edit.component.html',
    controller: RequisitoEditController,
    controllerAs: 'vm',
    bindings: {}
}
