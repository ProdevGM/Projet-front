/* --- Affiche la date et l'heure dans la première navbar --- */

function afficheDate(){
    var nom_mois = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Oaût','Septembre','Octobre','Novembre','Décembre'];
    var nom_jour = ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','vendredi','Samedi'];
    var Today = new Date();
    var jourSemaine = Today.getDay(),
        jour = Today.getDate(),
        mois = Today.getMonth(),
        an = Today.getFullYear(),
        heures = Today.getHours(),
        minute = Today.getMinutes();
        date_nav.innerHTML = nom_jour[jourSemaine]+' '+jour+' '+nom_mois[mois]+' '+an+' - '+heures+((minute<10)?'h0':'h')+minute;
}



/* --- Calendrier dans les modals réservation et réservation soin ---*/

$(function(){
    $( "#datepicker1").datepicker({ minDate: 0});
});
$(function(){
    $("#datepicker2").datepicker({ minDate: 0});
});
$(function(){
    $("#datepicker3").datepicker({ minDate: 0});
});



/* --- Apparition de la barre recherche ---*/

function recherche(){
    $(barre_recherche).slideToggle(500);
    $(decal_menu_recherche).slideToggle(500);
}





$(document).ready(function(){

    $(recherche_nav).on('click',recherche);
    $(recherche_nav_sm).on('click',recherche);


});

