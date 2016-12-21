class TipodocEditController{
    constructor ($stateParams, $state, API) {
    'ngInject'

    this.$state = $state
    this.formSubmitted = false
    this.alerts = []

    if ($stateParams.alerts) {
      this.alerts.push($stateParams.alerts)
    }

    let tipodocId = $stateParams.tipodocId
    let Tipodoc = API.service('tipodoc-show', API.all('tipodocs'))
    Tipodoc.one(tipodocId).get()
      .then((response) => {
        this.tipodoc = API.copy(response)
      })
  }

  save (isValid) {
    if (isValid) {
      let $state = this.$state
      this.tipodoc.put()
        .then(() => {
          let alert = { type: 'success', 'title': 'Éxito!', msg: 'Tipo de Documento actualizado.' }
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

export const TipodocEditComponent = {
    templateUrl: './views/app/components/tipodoc-edit/tipodoc-edit.component.html',
    controller: TipodocEditController,
    controllerAs: 'vm',
    bindings: {}
}
