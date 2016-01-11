function showModal() {
    var id1 = document.getElementById("id1");
    var id2 = document.getElementById("id2");
 
    id2.style.width = window.innerWidth + "px";
    id2.style.height = window.innerHeight + "px";
	id2.style.display = 'block';
	 
    $(id1).slideToggle(500, function() {
        $(id1).css({
            'top': '50%',
            'margin-top': '-200px'
        });
    });
}

function hideModal() {
    var id1 = document.getElementById("id1");
    var id2 = document.getElementById("id2");
    
    $(id1).slideToggle(500, function() {
        id2.style.display = 'none';
    });
}
