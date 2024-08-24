/**


Key Points


    1. Worker Threads Create Multiple Threads in Same Process.

    2. Unlike Clusters , These Worker Threads Don't have a Automatic Load Balancer to Distribute the Requests to Other Threads.

    3. These Worker Threads are useful for tasks that are I/O-bound or computationally expensive, 
        as they can run concurrently without blocking the main event loop.

    4. So Imagine We have 
        * Main Thread
        * Worker Thread
        
    5. Worker threads share the same memory space with the main thread, 
       but they have their own event loop and execution context


Difference Between Clusters and Worker Threads

Cluster                             |    Workers
Process-Based Parallelism           |    Thread-Based Parallelism
Best for CPU Bound Tasks            |    Best for I/O bound tasks
Creates Multiple Child Processes    |    Creates Multiple Thread in a Process
 */