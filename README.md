quora-widget-api
---------------------------------------
This API is the mastermind of [Quora-Widget](https://github.com/arpitbbhayani/quora-widget). It does all data fetching from Quora server and generated the HTML code that renders as the Quora Card on a website.

Ingredients
-----------------------------------------

1. **Python**: This API is written in [Python](https://www.python.org/download/releases/2.7/) and have no backend whatsoever.

2. **Flask**: The web framework used for exposing API is [Flask](http://flask.pocoo.org/). And to make code modular, some flask extensions are used.

3. **HTML/CSS**: To make things beautiful HTML/CSS plays the most important role.

Installation
-------------------------------------------
The first step that you should take is

1. Clone the repository
```
git clone https://github.com/arpitbbhayani/quora-widget-api.git
```

2. Execute the script `install.sh`
I have written a small script that setups virtual environment for Python and installs every package required for the execution. You simply need to execute the script from `quora-widget-api` folder
```
bash install.sh
```

Hello World!
------------------------------------------
Once you have installed everything, it is time to check if eveything is set or not. This is how you will you do that.

1. Start the server
Just like a comprehensive installation script, I have also written the `start.sh` script that starts the web server. All you need to do is run it from `quora-widget-api` folder

```
bash start.sh standalone
```

2. From your favourite browser just hit the following URL
```
http://localhost:5000/quoracard/
```

You should see a response like this
```
{
    "message": "Hello world!"
}
```

If you see this message then ...

**Yay! you are now all set to contribute to this project.**

Sample Quora Card
---------------------------------------------
To see a sample Quora Widget you can hit this URL from your browser

```
http://localhost:5000/quoracard/process?url=https://www.quora.com/profile/Arpit-Bhayani
```

Issues
-----------------------------------------------
If you find any issue or have any feature request, feel free to create an [Github Issue](https://github.com/arpitbbhayani/quora-widget-api/issues) for it.


Contribute
--------------------------------------------------
If you want to contribute, checkout [Github Issues](https://github.com/arpitbbhayani/quora-widget-api/issues) and choose any task you want and start working on it and when you think you are done, create a Pull Request for your branch.

In case of any doubt drop me an email at [arpit.b.bhayani@gmail.com](mailto:arpit.b.bhayani@gmail.com)
