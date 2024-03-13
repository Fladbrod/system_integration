# Exposee

1. Download [MongoDB Shell](https://www.mongodb.com/try/download/shell)
2. In the terminal of your choice make sure you have mongosh properly installed by running: 
```
mongosh --version or mongo --version
```
3. Run the following command: 
```
mongosh "mongodb+srv://04b-db-granular-access.ejwryml.mongodb.net/" --apiVersion 1 --username normalUser
```
4. Enter password when prompted: 
```
oGEG0jqPwRnLrs4V
```
5. Run the following command: 
```
use sample_mflix 
```

## MongoDB Queries 

| Collections  | Permissions |
| ------------- | ------------- |
| movies  | Read  |
| comments  | ReadWrite  |
| users  | No Access  |

You have Read access to the *movies* collection: 
```
db.movies.find({}).limit(1)
```
You have ReadWrite access to the *comments* collection: 
```
db.comments.find({}).limit(1)
```
```
db.comments.insertOne({ name: "Test Comment", text: "This is a test comment." })
```
You DO NOT have access to the *users* collection:
```
db.users.find({}).limit(1)
```
```
db.users.insertOne({ email: "test@email.com", password: "password" })
```