export class BaseLogger{
    log(data){
        console.log("Default Logger"+data)
    }
}

export class ElasticLogger extends BaseLogger{
    log(data){
        console.log("Logged To Elastic"+data)
    }
}

export class MongoDbLogger extends BaseLogger{
    log(data){
        console.log("Logged To Mongo Database"+data)
    }
}