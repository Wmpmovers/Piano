
function trackk(){
    let trackings = document.getElementById("tracking1").value;
    let trackingNom = trackings == 2345355633 ? alert("Your Tracking is being process!!!"):alert(" Your Tracking number is Wrong");
    document.getElementById("message").innerHTML = trackingNom;
}