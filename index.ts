// demonstrate this in traditional vs arrow function
let traditionalvsArrow = {
    value : "traditionalvsArrow value",
    traditionalfunction : function(){
        console.log("traditionalFunction:",this.value);
    },
arrowFunction : () => {
        console.log("Arrow Function:",this.value);
    } , 
};
traditionalvsArrow.traditionalfunction();
traditionalvsArrow.arrowFunction();