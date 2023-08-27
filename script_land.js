(function() {
    var queryStr = window.location.search,
        currentRequestModify = 'api.php',
        forms = document.forms,     //search all forms
        formLength = forms.length,  //forms count
        i;

    if(formLength > 0) {  //If there is at least one form
        for(i = 0; i < formLength; i++) {
            var form = forms[i]; //current form
            form.action = currentRequestModify + queryStr; //set action
            if (name = form.name)
                name.required = true;  //set required

            if (phone = form.phone)
                phone.required = true;

            if (country = form.country)
                country.style.display = "none";

            form.method = 'POST';
        }
    }

    var promoEl = document.getElementsByClassName("al-cost-promo");

    for(var i = 0; i < promoEl.length; i++){
        promoEl[i].innerText = "358 RON";
    }

    var priceEl = document.getElementsByClassName("al-cost");

    for(var i = 0; i < priceEl.length; i++){
        priceEl[i].innerText = "179 RON";
    }
})();