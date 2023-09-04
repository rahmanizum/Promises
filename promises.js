const posts = [
    {title:'post One', body:'This is post one',createdAt: new Date().getTime()},
    {title:'post Two', body:'This is post two',createdAt: new Date().getTime()}
];
var interval;

//printing post in console
function printPost() {
    clearInterval(interval);
    interval = setTimeout( () => {
        posts.forEach((post) => {
            console.log(post.title);
             
        })
    }, 1000);

}
function createPost(obj){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            obj.createdAt = new Date().getTime();
            posts.push(obj);
            resolve();

        },2000);
    })
}

function lastactivityTime(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Last Activity Time:',new Date().getTime());
            resolve();
        },1000);
    })  
}

Promise.all([createPost({ title: 'post Three', body: 'This is post three' }),lastactivityTime()])
.then(printPost);