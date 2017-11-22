# Lab 08: Javascript JSON API example

Navigate to a local directory where you want to store this exercise, and clone the repository from GitHub. Before you push, you will need to *change the GIT remote* to a new repository of your own with the following command: `git remote set-url origin [YOUR_REPO_URL_HERE]`.

IMPORTANT: get an [API key](http://open-platform.theguardian.com/access/) for the Guardian before you do anything else and replace line 10 with your key.

- Try the Codecademy [mini course](https://www.codecademy.com/courses/javascript-beginner-en-EID4t/0/1?curriculum_id=50ecba3b57ff25277d00010a) on using APIs with JavaScript.
- Guardian [Search Documentation](http://open-platform.theguardian.com/documentation/search).

The guardian branch contains an example that uses the Guardian API. Add and commit any changes you've made to your master branch. Then change into the guardian branch using this command: `git checkout guardian`.

When you try to run this code it will return a 403 error. This means you don't have access rights for the API.

For this code to work you will have to apply for an API key and add it to the code (JS line 11). Get your key at http://open-platform.theguardian.com/access/.
Replace the bit that says `<YOUR-API-KEY-HERE>` and add your own key.

Now look at the index.html file in your browser. Enter a query in the search box and press enter. You will see a set of urls that link to Guardian articles related to the search term you entered. 

Comment in line 14 and inspect the response object in the web inspector. You can also put the request url into your browser directly and view the JSON data there. Run it through a beautifier as before if you like.
