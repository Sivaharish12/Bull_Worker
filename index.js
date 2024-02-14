// const Queue=require('bull')

// const textQueue=new Queue('text',{redis:{port:6379,host:'127.0.0.1'}});

// textQueue.process(function(job,done){
//     console.log(job.id);
//     console.log(job.data);  //The custom value which we pass to the add function in the Queue
//     job.progress(50);
//     console.log(job.progress());  //The progress is a function so to get the value so we need to call the function
//     // done();
//     done(null, { width: 1280, height: 720 })
// })


// textQueue.add({value:"This is just a simple task"});

// textQueue.on('global:completed', (jobId, result) => {
//     console.log(jobId);
//     console.log(result);
// });

// actually done is a callback


// ------------------------------------------------------------------------------------------------------------------------------
//  BY Using the Promise

// const Queue=require('bull')
// const textQueue=new Queue('text',{
//     redis:{port:6379,host:'127.0.0.1'}
// });

// textQueue.process(function(job){
//     return new Promise((resolve,reject)=>{
//         resolve(job.data)
//     });
// });

// textQueue.add({value:"This is just a sample text"});

// textQueue.on('global:completed', async (jobId, result) => {
//     // Access the finished job using job ID
//     const job = await textQueue.getJob(jobId);

//     // Access the promise returned from the process function
//     const processPromise = job.finished();
    
//     // Handle the result of the promise
//     processPromise.then((message) => {
//         console.log(message)
//     }).catch((error) => {
//         console.error(error)
//     });
// });

