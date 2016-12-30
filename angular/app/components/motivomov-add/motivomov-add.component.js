class MotivomovAddController{
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
      let Motivo = this.API.service('motivo', this.API.all('motivos'))
      let $state = this.$state

      Motivo.post({
        'descripcion': this.desc,
      }).then(function () {
        let alert = { type: 'success', 'title': 'Éxito!', msg: 'Motivo a sido agregado.' }
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

export const MotivomovAddComponent = {
    templateUrl: './views/app/components/motivomov-add/motivomov-add.component.html',
    controller: MotivomovAddController,
    controllerAs: 'vm',
    bindings: {}
}
