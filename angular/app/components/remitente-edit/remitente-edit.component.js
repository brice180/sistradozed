class RemitenteEditController{
     constructor ($stateParams, $state, API, $scope) {
    'ngInject'
    this.$state = $state
    this.formSubmitted = false
    this.alerts = []    
    this.$scope = $scope

    this.tipor = API.all('tipospersonas').getList().$object;
    this.tipodocs = API.all('tipodocs').getList().$object;
    this.entis = API.all('entidades').getList().$object; 
    
    if ($stateParams.alerts) {
      this.alerts.push($stateParams.alerts)
    }

    let remitenteId = $stateParams.remitenteId
    let Remitente = API.service('remitente-show', API.all('remitentes'))
    Remitente.one(remitenteId).get()
      .then((response) => { 
        this.remitente = API.copy(response) 
    })        
  }

  save (isValid) {
    if (isValid) {
      let $state = this.$state
      this.remitente.put()
        .then(() => {
          let alert = { type: 'success', 'title': 'Éxito!', msg: 'Remitente actualizado.' }
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

export const RemitenteEditComponent = {
    templateUrl: './views/app/components/remitente-edit/remitente-edit.component.html',
    controller: RemitenteEditController,
    controllerAs: 'vm',
    bindings: {}
}
