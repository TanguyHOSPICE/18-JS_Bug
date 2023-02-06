// tableau de noms
const data = ['Paul', 'Jean', 'Marie', 'Nicolas', 'Julie', 'Lola', 'Martin', 'Armand', 'Amandine'];

// tableau de stockage de l'objet {letter: '', names: ['']}
const dataSorted = [];

// tri du tableau data par ordre alphabétique
data.sort(function (a, b) {
	return a - b;
});

// POUR CHAQUE nom du tableau data
data.forEach(function (name) {
	// On recherche s'il existe une valeur de la propriété letter égale à la premiere lettre du nom
	// Si une des valeur de la propriété letter est égale à la premiere lettre du nom on retourne l'index sinon on retourne -1
	const indexLetter = dataSorted.findIndex(function (objet) {
		return name.substring(0, 1).toLocaleLowerCase() === objet.letter.toLocaleLowerCase();
	});
	// Si l'index est différent de -1
	if (indexLetter !== -1) {
		// On ajoute le nom au tableau de la propriété names correspondant à l'index de dataSorted
		dataSorted[indexLetter].names.push(name);
		// Sinon
	} else {
		// On ajoute l'objet {letter: name.substring(0, 1), names: [name]} à dataSorted
		dataSorted.push({ letter: name.substring(0, 1), names: [name] });
	}
});
console.log(dataSorted);
