
//event bubbling

// document.querySelector("#grand")
// .addEventListener('click',()=>{
//     console.log('grand clicked');
// })

// document.querySelector("#parent")
// .addEventListener('click',()=>{
//     console.log('parent clicked');
// })

// document.querySelector("#child")
// .addEventListener('click',()=>{
//     console.log('child clicked');
// })


// capturing event

// document.querySelector("#grand")
// .addEventListener('click',()=>{
//     console.log('grand clicked');
// },true)

// document.querySelector("#parent")
// .addEventListener('click',()=>{
//     console.log('parent clicked');
// },true)

// document.querySelector("#child")
// .addEventListener('click',()=>{
//     console.log('child clicked');
// },true)


//stop propogation

// document.querySelector("#grand")
// .addEventListener('click',()=>{
//     console.log('grand clicked');
// })

// document.querySelector("#parent")
// .addEventListener('click',(e)=>{
//     console.log('parent clicked');
//     e.stopPropagation()
// })

// document.querySelector("#child")
// .addEventListener('click',(e)=>{
//     console.log('child clicked');
//     e.stopPropagation()  // whwn we click the child only child will work
// })


//even deligation

document.querySelector("#category")
.addEventListener('click',(e)=>{

    console.log(e.target);

    if(e.target.tagName == 'LI'){
        window.location.href = "/" + e.target.id
    }

})
