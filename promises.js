const posts = [
    {title: "Post One", body: "This is post one"},
    {title: "Post Two", body: "This is post two"},
    {title: "Post Three", body: "This is post three"},
];

function getPosts(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`
        });
        document.getElementById("posts").innerHTML = output;
    }, 1000);
}

function createPost(post, callback){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            
            const error = false;

            if(!error){
                resolve();
            }else{
                reject('Error: Something went wrong');
            }
        }, 2000);
    });
    
}

//getPosts();

/* createPost({title: "Post Four", body: "This is post Found "})
            .then(getPosts)
            .catch(err => console.log(err)); */

// Async / Await
/* async function init(){
    await createPost({title: "Post Four", body: "This is post Found "});

    getPosts();
}

init(); */

// Async / Await / Fetch
// User IIFE Here, which is called as iffy
(async function fetchUsers(){
    const res = await fetch('http://jsonplaceholder.typicode.com/users');
    
    const data = await res.json();

    console.log(data);
})();

//fetchUsers();

// Promise.all
/* const promise1 = Promise.resolve("Hello World");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => 
    setTimeout(resolve, 2000, "Good Bye"));
const promise4 = fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json());

Promise.all([promise1, promise2, promise3, promise4]).then(
    (values) => console.log(values)
); */