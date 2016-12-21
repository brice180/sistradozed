class EntidadesAddController{
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
      let Entidad = this.API.service('entidad', this.API.all('entidades'))
      let $state = this.$state

      Entidad.post({
        'razonSocial': this.rsocial,
      }).then(function () {
        let alert = { type: 'success', 'title': 'Éxito!', msg: 'Entidad a sido agregada.' }
        $state.go($state.current, { alerts: alert})
      }, function (response) {
        let alert = { type: 'error', 'title': 'Error!', msg: response.data.message }
        $state.go($state.current, { alerts: alert})
      })
    } else {
      this.formSubmitted = true
    }
  }

    $onInit(){}
}

export const EntidadesAddComponent = {
    templateUrl: './views/app/components/entidades-add/entidades-add.component.html',
    controller: EntidadesAddController,
    controllerAs: 'vm',
    bindings: {}
}
