// =======================================sidebar collapse on small screen 
$('.menu-btn').on('click',function(){
    $('.sidebar-section').css("left","0px");
    $('.backdrop').css("display","block");
})

$('.backdrop').on('click',function(){
    $('.sidebar-section').css("left","-270px");
    $(this).css("display","none");
})


// ================================sidebar dropdown
let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e) => {
    let arrowParent = e.target.parentElement.parentElement; //selecting main parent of arrow
    arrowParent.classList.toggle("showMenu");
  });
}

// ===================================dataTables
let table = new DataTable("#myTable", {
  // "bPaginate": false,
  // "bLengthChange": false,
  language: { search: "", searchPlaceholder: "Search..." },
  // "bFilter": false,
  // "bInfo": false,
  //  "bAutoWidth": false
});
