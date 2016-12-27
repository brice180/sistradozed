class UitAddController{
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
      let Uit = this.API.service('uit', this.API.all('uits'))
      let $state = this.$state

      Uit.post({
        'monto': this.monto,
        'anio': this.anio
      }).then(function () {
        let alert = { type: 'success', 'title': 'Éxito!', msg: 'Uit agregada.' }
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

export const UitAddComponent = {
    templateUrl: './views/app/components/uit-add/uit-add.component.html',
    controller: UitAddController,
    controllerAs: 'vm',
    bindings: {}
}
