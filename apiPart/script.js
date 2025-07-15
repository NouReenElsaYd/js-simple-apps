//json placeholder for fake api
//fetch data from api
//axios package 
//
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((result) => result.json())
  .then((data) => {
    // title=data[0].title;
    // body = data[0].body;
    // console.log(`title : ${title}`)
    // console.log(`body : ${body}`)
    data.map(loop => {console.log(`id : ${loop.id}`)
console.log(`title : ${loop.title}`)
console.log(`body : ${loop.body}`)
console.log('///////////////////')
})
})
  .catch((err) => console.log(err));  

  //promise
  let uploadVedio = new Promise ((resolve,reject) => {
    complete = true
    complete ? resolve('success') : reject('faild')
  })

//   calling
uploadVedio.then(
    (msg) => console.log(' thank you '+msg)
).catch((msg) => console.log(" sorry! " + msg))
