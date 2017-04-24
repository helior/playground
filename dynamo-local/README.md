# Dynamo Local

### References
* Link to [DynamoDB Local Article](http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.html).
* Node.js [Hello World setup](http://docs.aws.amazon.com/amazondynamodb/latest/gettingstartedguide/GettingStarted.NodeJs.html).

### Install
* Download Dynamo Local Java JAR file
* Run:

```
$> java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb
```

* Install node dependencies:
```
npm install
```


### Commands

##### Create sample tables
```
$> node MoviesCreateTable.js
```

##### Import sample data
```
$> node MoviesLoadData.js
```

##### List tables
```
aws --region us-east-1 dynamodb list-tables --endpoint-url http://localhost:8000
```
