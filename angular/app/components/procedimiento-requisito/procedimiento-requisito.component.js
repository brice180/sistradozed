class ProcedimientoRequisitoController{
    constructor ($stateParams, $state, API, $scope) {
    'ngInject'
    this.$state = $state
    this.formSubmitted = false
    this.alerts = []    
    this.$scope = $scope
    this.listarequisitos = []

      
    if ($stateParams.alerts) {
      this.alerts.push($stateParams.alerts)
    }

    let procedimientoId = $stateParams.procedimientoId
    let ProcReq = API.service('requisitos', API.all('procedimientos'))
    ProcReq.one(procedimientoId).get()
      .then((response) => {
        let listar = []
        let procreq = response.plain()    

        angular.forEach(procreq.data.requisito, function (value) {
          listar.push({id: value.id, descripcion: value.descripcion})
        })
        this.listar = listar
        this.procedimiento = API.copy(response) 
        //console.log(this.procedimiento)
      }) 

      this.requisitos = API.all('requisitos').getList().$object//Obtiene la lista de todos los requisitos      
  }

  agregarequisito() { //Agrega nuevo requisito a la lista
    this.listar.push({id: this.requisito.id, descripcion: this.requisito.descripcion})
    this.requisito=null
  }

  save (isValid) {
    if (isValid) {
      let $state = this.$state
      this.procedimiento.put()
        .then(() => {
          let alert = { type: 'success', 'title': 'Éxito!', msg: 'Procedimiento actualizado.' }
          $state.go($state.current, { alerts: alert})
        }, (response) => {
          let alert = { type: 'error', 'title': 'Error!', msg: response.data.message }
          $state.go($state.current, { alerts: alert})
        })
    } else {
      this.formSubmitted = true
    }
  }

    $onInit(){}
}

export const ProcedimientoRequisitoComponent = {
    templateUrl: './views/app/components/procedimiento-requisito/procedimiento-requisito.component.html',
    controller: ProcedimientoRequisitoController,
    controllerAs: 'vm',
    bindings: {}
}
