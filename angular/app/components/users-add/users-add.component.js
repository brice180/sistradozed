class UsersAddController{
    constructor ($auth, $state, $scope,API) {
    'ngInject'

    this.$auth = $auth
    this.$state = $state
    this.$scope = $scope

    this.password = ''
    this.password_confirmation = ''
    this.formSubmitted = false
    this.errors = []
  }

  $onInit () {
    this.name = ''
    this.email = ''
    this.dni=''
    this.password = ''
    this.password_confirmation = ''
  }

  register (isValid) {
    if (isValid) {
      var user = {
        name: this.name,
        email: this.email,
        dni: this.dni,
        password: this.password,
        password_confirmation: this.password_confirmation
      }
      this.$auth.signup(user)
        .then(() => {
          this.$state.go('app.userlist', { registerSuccess: true })
        })
        .catch(this.failedRegistration.bind(this))
    } else {
      this.formSubmitted = true
    }
  }
  
  failedRegistration (response) {
    if (response.status === 422) {
      for (var error in response.data.errors) {
        this.errors[error] = response.data.errors[error][0]
        this.$scope.userForm[error].$invalid = true
      }
    }
  }
}


export const UsersAddComponent = {
    templateUrl: './views/app/components/users-add/users-add.component.html',
    controller: UsersAddController,
    controllerAs: 'vm',
    bindings: {}
}
