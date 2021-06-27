// Cache Download //
window.onload = function() {
    let appCache = window.applicationCache;
    appCache.oncached = function(event) {
        alert("Cache erfolgreich heruntergeladen.");
    }
    appCache.onupdateready = function(event) {
        appCache.swapCache();
    }
}

// Alle Fragen Ausblenden und als erstes Frage 1 anzeigen. //
window.onload = function() {
    let alleElemente = document.getElementsByClassName("fragebogen");
    for (let i = 0; i < alleElemente.length; i++) {
        alleElemente[i].style.display = "none";
    }
    document.getElementById("Frage1").style.display = "block";
}

// Fragen mit der Switch-Case Funktion übergeben. //
function ausgewaehlteFrage(antwort) {
    // Variable anlegen //
    let frage = switchFrage();
    if (antwort == 'ja') {
        // Erste Switch Funktion bei Ja als Antwort //
        switch (frage) {
            case "Frage1":
                anzeigen(2);
            break;
            case "Frage2":
                anzeigen(4);
            break;
            case "Frage4":
                document.getElementById('nein').style.display = 'none';
                document.getElementById('ja').style.display = 'none';
                document.getElementById('neu').style.display = 'block';
                anzeigen(10);
            break;
            case "Frage3":
                anzeigen(6);
            break;
            case "Frage6":
                anzeigen(7);
            break;
            case "Frage7":
                anzeigen(9);
            break;
            case "Frage8":
                anzeigen(9);
            break;
            case "Frage9":
                anzeigen(10);
            break;
        }
    // if-else Schleife //
    } else {
        // Nächste Switch Funktion bei Nein als Antwort //
        switch (frage) {
            case 'Frage1':
                anzeigen(3);
            break;
            case 'Frage2':
                anzeigen(5);
            break;
            case 'Frage3':
                anzeigen(6);
            break;
            case 'Frage4':
                anzeigen(10);
            break;
            case 'Frage5':
                document.getElementById('nein').style.display = 'none';
                document.getElementById('ja').style.display = 'none';
                document.getElementById('neu').style.display = 'block';
                anzeigen(10);
            break;
            case 'Frage6':
                anzeigen(8);
            break;
            case 'Frage8':
                document.getElementById('nein').style.display = 'none';
                document.getElementById('neu').style.display = 'block';
                anzeigen(9);
            break;
            case 'Frage9':
                anzeigen(10);
            break;
        }
    }
}

// Frage Anzeigen //
function anzeigen(frage) {
    frage = parseFloat(frage);
    let alleElemente = document.getElementsByClassName("fragebogen");
    for (let i = 0; i < alleElemente.length; i++) {
        alleElemente[i].style.display = "none";
        if (frage == i + 1) {
            document.getElementById("Frage" + frage).style.display = "block";
        }
    }
}

// Switching Frage //
function switchFrage() {
    let frage = document.getElementsByClassName("fragebogen");
    let fragenlaenge = frage.length;
    for (let nr = 1; nr < fragenlaenge; nr++) {
        let aktuelleFrage = document.getElementById("Frage" + nr).style.display;
        if (aktuelleFrage == "block") {
            return "Frage" + nr;
        }
    }
}