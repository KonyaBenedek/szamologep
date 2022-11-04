function szamolj(muvelet) {
   var aszam = document.getElementById("szam1").value;
   var bszam = document.getElementById("szam2").value;
    if (muvelet =="+") {
        var eredmeny = parseFloat(aszam) + parseFloat(bszam)
    }
    else if (muvelet=="-"){
        var eredmeny = parseFloat(aszam) - parseFloat(bszam)
    }
    else if (muvelet=="*"){
        var eredmeny = parseFloat(aszam) * parseFloat(bszam)
    }
    else if (muvelet=="/"){
        var eredmeny = parseFloat(aszam) / parseFloat(bszam)
    }
    document.getElementById("result").innerHTML = eredmeny
}
