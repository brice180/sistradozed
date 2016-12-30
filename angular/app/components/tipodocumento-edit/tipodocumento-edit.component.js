class TipodocumentoEditController{
    constructor ($stateParams, $state, API) {
    'ngInject'

    this.$state = $state
    this.formSubmitted = false
    this.alerts = []

    if ($stateParams.alerts) {
      this.alerts.push($stateParams.alerts)
    }

    let tipodocumentoId = $stateParams.tipodocumentoId
    let Tipodocumento = API.service('tipodocumento-show', API.all('tipodocumentos'))
    Tipodocumento.one(tipodocumentoId).get()
      .then((response) => {
        this.tipodocumento = API.copy(response)
      })
  }

  save (isValid) {
    if (isValid) {
      let $state = this.$state
      this.tipodocumento.put()
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

export const TipodocumentoEditComponent = {
    templateUrl: './views/app/components/tipodocumento-edit/tipodocumento-edit.component.html',
    controller: TipodocumentoEditController,
    controllerAs: 'vm',
    bindings: {}
}
