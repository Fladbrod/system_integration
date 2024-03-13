# Research

When researching databases for granularity, I wanted to try something that wasn't SQL based.

The choice came down to Neo4j and MongoDB, here are the pros and cons:

## MongoDB

MongoDB is a NoSQL, document-oriented database that excels in flexibility and ease of use. It's designed to handle large volumes of data and offers powerful query capabilities.

### Pros:

- **Flexible Schema**: MongoDB's document model can easily accommodate changes, which is great for evolving data structures.
- **Scalability**: It's known for horizontal scalability, making it suitable for applications with large and growing data sets.
- **Granular Access Control**: MongoDB offers Role-Based Access Control (RBAC) that can define user roles with specific permissions at the database and collection level.
- **Rich Query Language**: MongoDB's query language is powerful and can perform complex queries, aggregations, and data analysis.
- **Large Community and Support**: As one of the most popular NoSQL databases, MongoDB has a large community and extensive documentation.

### Cons:

- **No Collection-Level Permissions**: While MongoDB allows for granular access at the database level, defining permissions at the collection level requires creating custom roles.
- **No Built-In Graph Processing**: MongoDB is not optimized for complex relationships and graph-like data which might be necessary for certain applications.

## Neo4j

Neo4j is a graph database that excels at managing and querying highly connected data. It is designed for storing and querying interrelated data more efficiently than relational databases.

### Pros:

- **Graph-Based Model**: Ideal for applications that require the modeling of complex relationships between data points.
- **Cypher Query Language**: Neo4j's query language is designed to be readable and expressive for handling graph queries.
- **Granular Security Controls**: Neo4j offers fine-grained security controls that can define access at the node and relationship levels within the graph.
- **Transaction ACID Compliance**: Ensures that database transactions are processed reliably.

### Cons:

- **Performance Overhead**: The graph model can introduce performance overhead for simple CRUD operations compared to document or key-value stores.
- **Learning Curve**: The graph model and Cypher query language may have a steeper learning curve for developers familiar with SQL or document databases.
- **Scalability**: While Neo4j can scale, it is generally not as straightforward as sharding in MongoDB, especially when it comes to horizontal scaling.
- **Less Suitable for Document Storage**: If your application's data is more document-centric rather than relationship-driven, Neo4j might not be the best fit.

Both MongoDB and Neo4j offer unique advantages for specific use cases. The choice between them should be based on the specific needs of your application, especially concerning how data is structured, accessed, and scaled.


TODO: 