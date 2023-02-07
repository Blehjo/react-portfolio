import { shellGeistArr } from '../assets/shellGeistPhotos/shellGeistData';
import { polariArr } from '../assets/polariPhotos/polariData';
import { ecoMerchantArr } from '../assets/ecoMerchantPhotos/ecoMerchantData';
// import { gameJunkeeArr } from '../assets/gameJunkeePhotos/gameJunkeeData';
import { blehNmahArr } from '../assets/blehNmahPhotos/blehNmahData';
// import muvdArr from '../assets/muvdPhotos/muvd';
// import quizArr from '../assets/quizPhotos/quiz';
// import textEditorArr from '../assets/textEditorPhotos/textEditor';
// import weatherDashboardArr from '../assets/weatherDashboardPhotos/weatherDashboard';


export const ApplicationData = [
    { id: 1, applicationTitle: "Shell Geist", mainPhoto: shellGeistArr[0], description: "Think of Shell Geist as a virtual meetup. You can attend events by getting a code and joining video game lobbies, joining live discussions, and leaving your own feed back from first-hand experience.", applicationImage: shellGeistArr, applicationLink: "https://shellgeist.com/", github: "https://github.com/Blehjo/shell-geist" },
    { id: 2, applicationTitle: "Polari", mainPhoto: polariArr[0], description: "Polari is a dating website catered to the LGBTQ community with an emphasis to educate users of their attachment styles", applicationImage: polariArr, applicationLink: "https://polari-attachments.herokuapp.com/", github: "https://github.com/polari-2022" },
    { id: 3, applicationTitle: "Eco Merchant", mainPhoto: ecoMerchantArr[0], description: "Eco Merchant is an ecommerce web application. Similar to your favorite clothing store's website. You can browse clothing, add them to your cart, and purchase them if you would like. Navigate through the site seamlessly and even sign up, so that you can receive updates as the catalogue get's updated from season to season.", applicationImage: ecoMerchantArr, applicationLink: "https://exquisite-basbousa-208df9.netlify.app", github: "https://github.com/Blehjo/eco-merchant" },
    // { id: 4, applicationTitle: "Game Junkee", mainPhoto: "1tspNDCp079MMJei6Rk6wV66KwRtK3J1A", description: "With this project we wanted to create an application where users could post about games they love and other users could offer comments about the game and include recommendations about other games the original poster might enjoy.", applicationImage: gameJunkeeArr, applicationLink: "https://gamejunkee.herokuapp.com/", github: "https://github.com/Project-2-BJMS/GameJunkee" },
    { id: 10, applicationTitle: "Bleh Nmah", mainPhoto: blehNmahArr[0], description: "Portfolio of my artwork. Users can view my collections and look into my paintings. Think of it as an online gallery. Enjoy!", applicationImage: blehNmahArr, applicationLink: "https://exquisite-basbousa-208df9.netlify.app", github: "https://github.com/Blehjo/BlehNmah" },
    // { id: 11, applicationTitle: "Search engine", mainPhoto: "../assets/quizPhotos/quiz1.png", description: "This is a search engine for books. You are able to search for any book and read its description. If the book interests you, you can save it to your library as a reminder to look into it or read it. Once the book is no longer of interests to you, you can delete it from your library.", applicationImage: quizArr, applicationLink: "https://blehjo-mern-book-search.herokuapp.com/", github: "https://github.com/Blehjo/mern-search-engine/" },
    // { id: 4, applicationTitle: "Progressive Web Application", mainPhoto: "../assets/textEditorPhotos/texteditor1.png", description: "Website that I refactored with MERN stack. Allows the user to search for books and save it to his/her/their collection.", applicationImage: textEditorArr, applicationLink: "https://online-offline-editor.herokuapp.com/", github: "https://www.github.com/Blehjo/pwa" },
    // { id: 2, applicationTitle: "Muvd", mainPhoto: "../assets/muvdPhotos/muvd1.png", description: "Muvd is an application that allows users to search for movies, or suggests movies based on the user's mood. It then shows some basic information about the movie from The Movie Database, and if available, provides a link to a review of the movie from the New York Times.", applicationImage: muvdArr, applicationLink: "https://coding-p1-g1.github.io/muvd/", github: "https://github.com/coding-p1-g1/muvd" },
    // { id: 5, applicationTitle: "Weather Dashboard", mainPhoto: "../assets/weatherDashboardPhotos/weatherdashboard.png", description: "Weather dashboard where users can search for cities and get the cities current weather and five-day forecast. The cities are also saved to local storage, so the user can access past searches.", applicationImage: weatherDashboardArr, applicationLink: "https://blehjo.github.io/weather-dashboard/", github: "https://github.com/Blehjo/weather-dashboard" },
]