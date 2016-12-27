class RequisitoAddController{
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
      let Requisitos = this.API.service('requisito', this.API.all('requisitos'))
      let $state = this.$state

      Requisitos.post({
        'descripcion': this.desc,
      }).then(function () {
        let alert = { type: 'success', 'title': 'Éxito!', msg: 'Requisito agregado.' }
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

export const RequisitoAddComponent = {
    templateUrl: './views/app/components/requisito-add/requisito-add.component.html',
    controller: RequisitoAddController,
    controllerAs: 'vm',
    bindings: {}
}
