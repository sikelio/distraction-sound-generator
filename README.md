# Distraction Sound Generator

## Table of content / Inhaltsübersicht / Table des matières

* [About / Über / À propos](#about--über--à-propos)
* Usage / Verwendung / Usage
    * [🇬🇧 - English version](#english)
    * [🇩🇪 - Deutsche Version](#deutsch)
    * [🇫🇷 - Version française](#français)
* [Licence / Lizenz / Licence](#licence--lizenz--licence)
* [Author / Autor / Auteur](#author--autor--auteur)

## About / Über / À propos

### 🇬🇧
This script generates a sequence of auditory patterns based on random values of -1, 0, and 1, representing different states. It is intended for use in studies exploring the effects of auditory distraction on pain perception. The generated sounds are as follows:
- `1`: High tone (440 Hz)
- `0`: Silence
- `-1`: Low tone (220 Hz)

The generated sequence lasts five minutes by default (or for the specified duration), and the states are spaced by at least two seconds. This script helps study how participants respond to pain stimuli under the influence of different auditory cues.

### 🇩🇪
Dieses Skript erzeugt eine Sequenz akustischer Muster, basierend auf zufälligen Werten von -1, 0 und 1, die verschiedene Zustände darstellen. Es wird in Studien verwendet, die die Auswirkungen von akustischer Ablenkung auf die Schmerzempfindung untersuchen. Die erzeugten Töne sind:
- `1`: Hoher Ton (440 Hz)
- `0`: Stille
- `-1`: Tiefer Ton (220 Hz)

Die erzeugte Sequenz dauert standardmäßig fünf Minuten (oder die angegebene Dauer), und die Zustände sind mindestens alle zwei Sekunden voneinander getrennt. Dieses Skript hilft, die Reaktionen der Teilnehmenden auf Schmerzreize unter dem Einfluss verschiedener akustischer Signale zu untersuchen.

### 🇫🇷
Ce script génère une séquence de motifs auditifs basée sur des valeurs aléatoires de -1, 0 et 1, représentant différents états. Il est conçu pour être utilisé dans des études explorant les effets de la distraction auditive sur la perception de la douleur. Les sons générés sont les suivants :
- `1` : Son aigu (440 Hz)
- `0` : Silence
- `-1` : Son grave (220 Hz)

La séquence générée dure cinq minutes par défaut (ou la durée indiquée), et les états sont espacés d'au moins deux secondes. Ce script aide à étudier la réaction des participants aux stimuli douloureux sous l'influence de différents indices auditifs.

## English

### Requirements
- A modern web browser (supporting JavaScript and the Web Audio API)

### Usage
1. Go to the [GitHub page](https://sikelio.github.io/distraction-sound-generator/).
2. Enter a time in minutes (if left empty, the default is 5 minutes).
3. Click the `Start` button.
4. The script will generate a random pattern of tones for the specified duration.
5. The auditory pattern will then be played accordingly.

### Customization
- You can modify the tone frequencies in the `generateTone` function to adjust the sound.
- Adjust the playback duration or the interval between tones by changing the corresponding values in the script.

## Deutsch

### Anforderungen
- Ein moderner Webbrowser (mit Unterstützung für JavaScript und die Web Audio API)

### Verwendung
1. Besuchen Sie die [GitHub-Seite](https://sikelio.github.io/distraction-sound-generator/).
2. Geben Sie eine Zeit in Minuten ein (wenn das Feld leer bleibt, beträgt die Standardzeit 5 Minuten).
3. Klicken Sie auf die Schaltfläche Start.
4. Das Skript erzeugt ein zufälliges Tonmuster für die angegebene Dauer.
5. Das akustische Muster wird anschließend abgespielt.

### Anpassung
- Sie können die Frequenzen der Töne in der Funktion `generateTone` ändern, um den Klang anzupassen.
- Passen Sie die Länge der Wiedergabe oder das Intervall zwischen den Tönen an, indem Sie die Werte im Skript ändern.

## Français

### Exigences
- Un navigateur web moderne (prenant en charge JavaScript et l’API Web Audio)

### Utilisation
1. Rendez-vous sur la [page GitHub](https://sikelio.github.io/distraction-sound-generator/).
2. Renseignez un temps en minutes (si le champ est vide, la valeur par défaut sera de 5 minutes).
3. Cliquez sur le bouton `Start`.
4. Le script générera un motif aléatoire de sons pendant la durée indiquée.
5. Le motif auditif sera joué en conséquence.

### Personnalisation
- Vous pouvez modifier les fréquences des sons dans la fonction `generateTone` pour ajuster le rendu sonore.
- Ajustez la durée de lecture ou l'intervalle entre les sons en modifiant les valeurs dans le script.

## Licence / Lizenz / Licence

### English

This project is licensed under the Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0). You are free to use, share, and adapt the software for non-commercial purposes, provided you give appropriate credit.

### Deutsch

Dieses Projekt steht unter der Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0) Lizenz. Sie dürfen die Software für nicht-kommerzielle Zwecke nutzen, teilen und anpassen, vorausgesetzt, Sie geben eine angemessene Anerkennung.

### Français

Ce projet est sous licence Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0). Vous êtes libre d'utiliser, de partager et d'adapter le logiciel à des fins non commerciales, à des fins non commerciales, à condition d’en mentionner l’auteur

## Author / Autor / Auteur

### English

The project was created and maintained by [Sikelio](https://github.com/sikelio). For any inquiries or contributions, feel free to reach out via the GitHub repository.

### Deutsch

Das Projekt wurde von [Sikelio](https://github.com/sikelio) erstellt und gepflegt. Bei Fragen oder Beiträgen können Sie sich gerne über das GitHub-Repository melden.

### Français

Le projet a été créé et est maintenu par [Sikelio](https://github.com/sikelio). Pour toute question ou contribution, n'hésitez pas à nous contacter via le dépôt GitHub.
