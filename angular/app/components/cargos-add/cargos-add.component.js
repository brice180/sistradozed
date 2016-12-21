class CargosAddController{
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
      let Entidad = this.API.service('cargo', this.API.all('cargos'))
      let $state = this.$state

      Entidad.post({
        'descripcion': this.descripcion,
      }).then(function () {
        let alert = { type: 'success', 'title': 'Éxito!', msg: 'Cargo a sido agregado.' }
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

export const CargosAddComponent = {
    templateUrl: './views/app/components/cargos-add/cargos-add.component.html',
    controller: CargosAddController,
    controllerAs: 'vm',
    bindings: {}
}
