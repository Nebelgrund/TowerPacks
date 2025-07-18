// Liste der Dateien im Format: [Anzeigename, Dateiname]
const entries = [
    ["Tower of Hell", "tower_of_hell.zip"],
    ["Mega Obby", "mega_obby.zip"],
    ["Sky Tower", "sky_tower.zip"],
    ["Lava Tower", "lava_tower.pdf"]
    // Weitere Einträge hier hinzufügen
];

const listContainer = document.getElementById('download-list');

entries.forEach(([name, filename]) => {
    const entryDiv = document.createElement('div');
    entryDiv.className = 'entry';

    const nameSpan = document.createElement('span');
    nameSpan.textContent = name;

    const downloadLink = document.createElement('a');
    downloadLink.href = filename;
    downloadLink.download = '';
    downloadLink.textContent = 'Download';

    entryDiv.appendChild(nameSpan);
    entryDiv.appendChild(downloadLink);
    listContainer.appendChild(entryDiv);
});
