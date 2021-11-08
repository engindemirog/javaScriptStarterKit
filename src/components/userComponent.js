import { BaseLogger, ElasticLogger, MongoDbLogger } from "../crossCuttingConcers/logging/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User Component Yüklendi.")

let logger1 = new MongoDbLogger()
let userService = new UserService(logger1)

let user1 = new User(1,"Ahmet","ÖZER","Sakarya")
let user2 = new User(1,"Tuna","ÖZER","Sakarya")

userService.add(user1)
userService.add(user2)
console.log(userService.list())
console.log(userService.getById(1))



let customer = {id:1, firstName:"Ahmet"}
//protayping
customer.lastName="ÖZER"