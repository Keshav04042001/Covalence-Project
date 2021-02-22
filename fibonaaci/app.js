document.addEventListener('DOMContentLoaded', () =>{
    let n1 = 0, n2 = 1, nextTerm;
    
    document.getElementById("submit").addEventListener('click',()=>{
        let x = document.getElementById("number").value;
  
    for (let i = 1; i <= x; i++) {
        console.log(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    })
});