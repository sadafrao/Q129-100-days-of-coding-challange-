var _this = this;
// demonstrate this in traditional vs arrow function
var traditionalvsArrow = {
    value: "traditionalvsArrow value",
    traditionalfunction: function () {
        console.log("traditionalFunction:", this.value);
    },
    arrowFunction: function () {
        console.log("Arrow Function:", _this.value);
    },
};
traditionalvsArrow.traditionalfunction();
traditionalvsArrow.arrowFunction();
