## RESULTS
I was able to get the graph to work and deploy on the local. However, for some reason, the live server on my end isn't working (I didn't have the time to fix it as I was sick :(). In case it doesn't work on the user end, I have attached an image of the graph I created below. The data is about Airplane Crashes from [Kaggle](https://www.kaggle.com/datasets/jogwums/air-crashes-full-data-1908-2023?resource=download). I graphed a bar graph of what country plane crashes happened in. I also got the chance to deploy the backend [here](https://dssd-oa-2023-2024-gupta.onrender.com/) (I have also submitted a picture of this below in case the free version of Render gives in). Feel free to contact me with any questions at [ysgupta@wisc.edu](mailto:ysgupta@wisc.edu).

**Graph**
![bar graph](https://github.com/yashg4509/dssd-oa-2023-24/blob/main/images/newplot.png)

**[Deployed Backend](https://dssd-oa-2023-2024-gupta.onrender.com/)**
![backend](https://github.com/yashg4509/dssd-oa-2023-24/blob/main/images/backend.png)

## Below is the original challenge for DSSD OA 2023-2024 Assessment
This repository has starter code that you will build on to show your skills as a developer. [Fork this repository](https://github.com/DSSD-Madison/oa-2023-24/fork) to get started on your own copy.

Currently, the repository contains some frontend code for a webpage with a graph (made with [Plotly.js](https://plotly.com/javascript/)) populated with mock data recieved from a backend server.

**Your job:** Populate the graphs with real data.

Your "real data" can come from anywhere: a file that you find on something like [kaggle](https://www.kaggle.com/), an enterprise API, Google BigQuery, etc.

To do this, either modify the sample Express.js backend in the [backend](./backend/) folder, or create a new backend in your language/framework of your choice.

Since most backends will need environment configurations for secret credentials and such, and might require different steps to run locally, we require you to deploy your backend. One free and easy to use service that supports most popular runtime environments is [render](https://render.com), but feel free to use whatever service you'd like. You can just hardcode the URL to your deployed backend endpoint like the sample code has done in [graph.mjs](./frontend/graph.mjs).

Make sure to update the webpage to explain the data that your graphs are populated with.

We will view your submission using the VS Code [Live Server Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) to serve the frontend on `http://localhost:5500`, so make sure that is whitelisted for [cors](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) on your backend server

Ways to go above and beyond include, but are not limited to:
- use a practical data source i.e. not just a file
- make your graph update in real time
- apply some secondary processing on the data i.e. create new insights on the data
  - the more advanced the data science technique, the more impressed we will be
- improve the visual appeal of the webpage
