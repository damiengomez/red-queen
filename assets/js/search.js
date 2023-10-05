const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

var title = document.title;
var title_query = params.q;
var title_results;
var h_query;
var h_results;

if (title_query) {
  if (title_query == "sac") {
    title_results = "4 résultats";
    h_query = "Vous recherchez \"" + title_query + "\"";
    h_results = "Ces produits pourraient vous convenir :";
    document.querySelector("#h_search div.d-none").classList.remove("d-none");
  } else {
    title_results = "0 résultat";
    h_query = "Vous recherchez \"" + title_query + "\"";
    h_results = "Aucun résultat pour cette recherche";
  }
  
  title = title.replace("Rechercher", "Recherche \"" + title_query + "\" - " + title_results);
  document.title = title;
  document.querySelector("#h_search h1").innerHTML = h_query;
  document.querySelector("#h_search p").innerHTML = h_results;
}

