// music should be an object with title, artist, and album properties
const music = {
  title: "Shan the Man",
  artist: "Shannon Sagehorn",
  albumLength: 24,
  albumName: "I'm sick",
  // code here
};

// Write code between the <div> tags to output the data from the music object above.
// Use an h2 element for the title and a p element for artist and title

const songSnippet = `
  <div class="song">
  <p> The Band ${music.title} just released their ${music.albumLength} track ep. The lead singer; ${music.artist}, chose the name ${music.albumName} because she is sick</p>

  </div>
`;

const element = document.getElementById("music");
element.innerHTML = songSnippet;
