function validateForm(){

    let v = document.getElementById('email')
    let x= document.getElementById('email').value;
    let z = document.getElementById('bad')
 
    if (x ===''){
       
      
        v.style.borderColor = 'red'
        v.style.borderWidth = '1px'
        z.style.display ='block'
     
    
    
    } else if (x.includes('@') === false){
      
        v.style.borderColor = 'red'
        v.style.borderWidth = '1px'
        z.style.display ='block'
       
    
    } else if(x.includes('@') === true && x.length<4){
        v.style.borderColor = 'red'
        v.style.borderWidth = '1px'
        z.style.display ='block'
       
        
    }else if ( x.includes('@') === true && x.length>4){
       
        document.getElementById("myForm").submit();
     }
}