/*
20 . Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or
anything else you’d like. Write a program that creates a list containing these items.
*/
var languages = ["English", "Urdu", "Chinesse", "Spanish", "French", "Italian", "German", "Arabic", "Russian"];
for (var i = 0; i < languages.length; i++) {
    console.log("".concat(i + 1, ".").concat(languages[i]));
}
