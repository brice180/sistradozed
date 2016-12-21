class EstadoAddController{
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
      let Estados = this.API.service('estados', this.API.all('estados'))
      let $state = this.$state

      Estados.post({
        'descripcion': this.desc,
        'color': this.color
      }).then(function () {
        let alert = { type: 'success', 'title': 'Éxito!', msg: 'Estado a sido agregado.' }
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

export const EstadoAddComponent = {
    templateUrl: './views/app/components/estado-add/estado-add.component.html',
    controller: EstadoAddController,
    controllerAs: 'vm',
    bindings: {}
}
