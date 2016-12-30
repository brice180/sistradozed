class PrioridadesAddController{
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
      let Prioridad = this.API.service('prioridad', this.API.all('prioridades'))
      let $state = this.$state

      Prioridad.post({
        'descripcion': this.desc,
      }).then(function () {
        let alert = { type: 'success', 'title': 'Éxito!', msg: 'Prioridad a sido agregada.' }
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

export const PrioridadesAddComponent = {
    templateUrl: './views/app/components/prioridades-add/prioridades-add.component.html',
    controller: PrioridadesAddController,
    controllerAs: 'vm',
    bindings: {}
}
