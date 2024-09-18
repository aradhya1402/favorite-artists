Url to the github repository 
https://github.com/aradhya1402/favorite-artists
This is a simple website which first has a home page which consists of a button which will make you proceed to the next 
Frontend Structure
React Components:
HomePage- This serves as the landing page of the website. It includes a button that directs users to the artist list page. This component sets the stage for user interaction.
ArtistList- This component helps you build the list of artists and their songs. I have added two artists and their songs by default and the user has the flexibility to remove these artists. They can add the artists as well. Adding both artist and song is mandatory to create the list. 
The routing is managed using react-router-dom, where the BrowserRouter wraps React application in the main App.js. Specific routes are defined for navigating:
/ - Home page
 /artists - List of artists
Backend Integration
Django Setup:
Models- I have models defined for both artists and songs, where each song is linked to an artist via a foreign key.
Serializers- I have used these to convert model instances into JSON format so that the frontend can easily parse and utilize the data. Django's serializers help in effectively serializing querysets and model instances.
Views- Utilize Django's class-based views to handle the API logic. These views interact with the models via serializers and handle HTTP methods (GET, POST, DELETE).
Fixtures- For initial data loading, I have used fixtures. These JSON files contain pre-defined data for artists and songs, which are loaded into the database at setup or for testing purposes. 
Django REST Framework:
Utilized Django REST Framework to create API that my React application consumes. 
Have built two apis, for artists and songs.
