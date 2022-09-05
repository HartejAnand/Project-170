AFRAME.registerComponent("marker-handler",{
    init: async function(){
        this.el.addEventListner("marker-found", ()=> {
            console.log("marker is found");
            this.handleMarkerFound();
        });
        this.el.addEventListner("marker-lost", ()=> {
            console.log("marker lost");
            this.handleMarkerLost();
        });
    },

    handleMarkerFound: function(){
        var buttonDiv=document.getElementById("button-div");
        buttonDiv.style.display="flex";

        var ratingButton=document.getElementById("rating-button");
        ratingButton.addEventListener("click", function(){
            swal({
                icon: "warning",
                title: "Rate Toy",
                text: "Work in progress"
            });
        });

        var orderButton=document.getElementById("order-button");
        orderButton.addEventListener("click", function(){
            swal({
                icon: "https://i.imgur.com/4NZ6uLY.jpg",
                title: "Thanks for Ordering",
                text: "Your order will be delivered soon"
            });
        });
    },

    handleMarkerLost: function(){
        var buttonDiv=document.getElementById("button-div");
        buttonDiv.style.display="none";
    }

})