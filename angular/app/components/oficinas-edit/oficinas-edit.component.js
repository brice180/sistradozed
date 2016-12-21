class OficinasEditController{
    constructor ($stateParams, $state, API) {
    'ngInject'

    this.$state = $state
    this.formSubmitted = false
    this.alerts = []

    if ($stateParams.alerts) {
      this.alerts.push($stateParams.alerts)
    }

    let oficinaId = $stateParams.oficinaId
    let Oficina = API.service('oficina-show', API.all('oficinas'))
    Oficina.one(oficinaId).get()
      .then((response) => {
        this.oficina = API.copy(response)
      })
  }

  save (isValid) {
    if (isValid) {
      let $state = this.$state
      this.oficina.put()
        .then(() => {
          let alert = { type: 'success', 'title': 'Éxito!', msg: 'Oficina actualizada.' }
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

export const OficinasEditComponent = {
    templateUrl: './views/app/components/oficinas-edit/oficinas-edit.component.html',
    controller: OficinasEditController,
    controllerAs: 'vm',
    bindings: {}
}
