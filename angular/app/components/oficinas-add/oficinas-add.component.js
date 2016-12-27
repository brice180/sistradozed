class OficinasAddController{
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
      let Oficina = this.API.service('oficina', this.API.all('oficinas'))
      let $state = this.$state

      Oficina.post({
        'nombre': this.nombre,
        'siglas': this.siglas
      }).then(function () {
        let alert = { type: 'success', 'title': 'Éxito!', msg: 'Oficina agregada.' }
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

export const OficinasAddComponent = {
    templateUrl: './views/app/components/oficinas-add/oficinas-add.component.html',
    controller: OficinasAddController,
    controllerAs: 'vm',
    bindings: {}
}
