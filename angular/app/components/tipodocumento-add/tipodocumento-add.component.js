class TipodocumentoAddController{
    constructor (API, $state, $stateParams) {
    'ngInject'

    this.$state = $state
    this.formSubmitted = false
    this.API = API
    this.alerts = []

    if ($stateParams.alerts) {
      this.alerts.push($stateParams.alerts)
    }
  }

  save (isValid) {
    this.$state.go(this.$state.current, {}, { alerts: 'test' })
    if (isValid) {
      let Tipodocumentos = this.API.service('tipodocumento', this.API.all('tipodocumentos'))
      let $state = this.$state

      Tipodocumentos.post({
        'descripcion': this.desc,
      }).then(function () {
        let alert = { type: 'success', 'title': 'Éxito!', msg: 'Tipo de Documento a sido agregado.' }
        $state.go($state.current, { alerts: alert})
      }, function (response) {
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

export const TipodocumentoAddComponent = {
    templateUrl: './views/app/components/tipodocumento-add/tipodocumento-add.component.html',
    controller: TipodocumentoAddController,
    controllerAs: 'vm',
    bindings: {}
}
