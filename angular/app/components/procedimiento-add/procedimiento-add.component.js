class ProcedimientoAddController{
    constructor (API, $state, $stateParams, $scope) {
    'ngInject'

    this.$state = $state
    this.formSubmitted = false
    this.API = API
    this.alerts = []
    this.$scope = $scope

    
    $scope.uit2 = API.service('uitactual', API.all('uits'))
    //$scope.tipor = API.all('requisitos').getList().$object
    $scope.oficinas = API.all('oficinas').getList().$object

   let Uit = API.service('uitactual', API.all('uits'))
    Uit.one().get()
      .then((response) => {
        this.uit = API.copy(response)
      })
     
    if ($stateParams.alerts) {
      this.alerts.push($stateParams.alerts)
    }   
  }

  save (isValid) {
    this.$state.go(this.$state.current, {}, { alerts: 'test' })
    if (isValid) {
      let Procedimiento = this.API.service('procedimiento', this.API.all('procedimientos'))
      let $state = this.$state

      Procedimiento.post({
        'descripcion' : this.desc,
        'porcentaje_uit' : this.porc_uit,
        'monto' : this.montot,
        'dias_resolver' : this.dias_resolv,
        'inicia_proc': this.inicia,
        'resuelve_proc' : this.resuelve,
        'reconsidera_proc' : this.reconsidera,
      }).then(function () {
        let alert = { type: 'success', 'title': 'Éxito!', msg: 'Procedimiento agregado.' }
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

export const ProcedimientoAddComponent = {
    templateUrl: './views/app/components/procedimiento-add/procedimiento-add.component.html',
    controller: ProcedimientoAddController,
    controllerAs: 'vm',
    bindings: {}
}
