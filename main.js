let buttonSelectClick = element => {
    console.log("alert");
    
    if (element.classList.contains('selected')){
        element.classList.remove('selected');
        element.classList.add('unselected');
    } else {
        element.classList.remove('unselected');
        element.classList.add('selected');
    
    }
    
}