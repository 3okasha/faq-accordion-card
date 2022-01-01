function showDetails(id) {
    var text, elementId = "id0"+id, imgId = "img0"+id;
    switch(id){
        case "1":
            text = "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.";
            break;
        case "2":
            text = "No more than 2GB. All files in your account must fit your allotted storage space.";
            break;
        case "3":
            text = "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.";
            break;
        case "4":
            text = "Yes! Send us a message and we’ll process your request no questions asked.";
            break;
        case "5":
            text = "Chat and email support is available 24/7. Phone lines are open during normal business hours.";
            break;
    }
    for(i=1 ;i<6;i++){
        document.getElementById("id0"+i).innerHTML = "";
        document.getElementById("img0"+i).style.transform = "";

    }
    const element = document.getElementById(elementId);
    element.innerHTML = text;
    document.getElementById(imgId).style.transform = "rotate(180deg)";
}


