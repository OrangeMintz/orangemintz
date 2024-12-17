//Get DateTime in UNIX Time Format
let date_String = "1 Feb 2021"; // DD-MM-YYYY
let date = new Date(date_String);

let timestamp = Math.floor(date.getTime() / 1000)
console.log(timestamp);

// [![Kylof Söze - WitaPoke](https://ytcards.demolab.com/?id=XzfWbi9xkgs&title=Kylof+Söze+-+WitaPoke&lang=en&timestamp=1582041600&background_color=%230d1117&title_color=%23ffffff&stats_color=%23dedede&max_title_lines=1&width=250&border_radius=5&duration=250 "Kylof Söze - WitaPoke")](https://www.youtube.com/watch?v=XzfWbi9xkgs)