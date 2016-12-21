class TipodocAddController{
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
      let Tipodocs = this.API.service('tipodoc', this.API.all('tipodocs'))
      let $state = this.$state

      Tipodocs.post({
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

export const TipodocAddComponent = {
    templateUrl: './views/app/components/tipodoc-add/tipodoc-add.component.html',
    controller: TipodocAddController,
    controllerAs: 'vm',
    bindings: {}
}
