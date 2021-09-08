function validateForm(){

    let v = document.getElementById('email')
    let x= document.getElementById('email').value;
 
    if (x ===''){
       
      
        v.style.borderColor = 'red'
        v.style.borderWidth = '1px'
     
    
    
    } else if (x.includes('@') === false){
      
        v.style.borderColor = 'red'
        v.style.borderWidth = '1px'
       
    
    } else if(x.includes('@') === true && x.length<4){
        v.style.borderColor = 'red'
        v.style.borderWidth = '1px'
       
        
    }else if ( x.includes('@') === true && x.length>4){
       
        document.getElementById("myForm").submit();
     }
}