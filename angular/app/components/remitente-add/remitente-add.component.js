class RemitenteAddController{
    constructor (API, $state, $stateParams, $scope) {
    'ngInject'

    this.$state = $state
    this.formSubmitted = false
    this.API = API
    this.alerts = []
    this.$scope = $scope

    let Entidades = this.API.service('entidades')
    Entidades.getList()
      .then((response) => {
        $scope.entis = response.plain() 
        this.enti = null 
    })

    let Tipodoc = this.API.service('tipodocs')
    Tipodoc.getList()
      .then((response) => {
        $scope.tipodocs = response.plain()
        this.tdocs = null
    })

    let Tiporem = this.API.service('tipospersonas')
    Tiporem.getList()
      .then((response) => {
        $scope.tipor = response.plain()
        this.tipors = null //$scope.tipor[0] 
    })

    if ($stateParams.alerts) {
      this.alerts.push($stateParams.alerts)
    }   

  }

  save (isValid) {
    this.$state.go(this.$state.current, {}, { alerts: 'test' })
    if (isValid) {
      let Remitentes = this.API.service('remitente', this.API.all('remitentes'))
      let $state = this.$state

      Remitentes.post({
        'tipodoc_id' : this.tdocs,
        'numdoc' : this.numdoc,
        'nombres' : this.nombres,
        'apellidos' : this.apellidos,
        'entidad_id': this.enti,
        'tiporemitente_id' : this.tipors,
        'razonSocial' : this.rsocial,
      }).then(function () {
        let alert = { type: 'success', 'title': 'Éxito!', msg: 'Remitente a sido agregado.' }
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

export const RemitenteAddComponent = {
    templateUrl: './views/app/components/remitente-add/remitente-add.component.html',
    controller: RemitenteAddController,
    controllerAs: 'vm',
    bindings: {}
}
