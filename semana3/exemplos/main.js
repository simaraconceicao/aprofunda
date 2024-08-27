const UserFactory = require('./factory')

const admin1 = UserFactory.createUser('admin', 'Mari')
console.log(admin1.getPermissions())



