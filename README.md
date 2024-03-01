# Machine Coding Interview

- Step 1 - Recuirement Clarification - with interviewer discuss features, what feature you are going to build,
- Step 2 - discuss tech stack, i.e - Tailwind CSS, Javascript/TypeScript,React Router DOM for routing, redux RTK/Zedust/Context API, bundler, Jest React Testing lib, Firebase, can I google search (a proper \*justification why u gonna choose that) - spend around just 5 mins about this,
- Step 3 - Planning - next 5 mins (kinda HLD-high level design) - why to discuss? so we can be on the same page,
- Step 4 - Features
  - Header
    - logo, searchbar, user logo,
  - Side panel - links, colapse toggle
  - main body
    - butttons/filter
    - if user click on the any video - opens the new page, that take user to /watch
  - /watch
    - same header
    - main video
    - subscribe, like btn
    - video suggestion
    - comment section
- component diff

  - Header
  - Sidebar
  - Body/main container
  - /watch
    - watch video comp
      - video
      - n level nested commnets
      - Live chat
  - Live Chat

  ### Challenges in Live Chat

  - To get Data Live
  - update the UI
  -
  - WebSocket is a two way connection btw client and server, can quickly send data from either side(by directional live data)[no regular interval] - Trading Apps - Zerodha, Whatsapp
  - Long Pooling / API Pooling - UI requests the server, data flow from serever, [interval] - Gmail

- Now you can start coding
- `npx create-react-app` - executing cra package
- config tailwind CSS to our app
  - `npm i -D tailwindcss`
  - `npx tailwindcss init`
  - ./src/\*_/_.{js,jsx,ts,tsx} to content tailwind.config.js file
  - add @tailwind base @tailwind utilities @tailwind components to index.css file
  - install redux & redux RTK - `npm i react-redux @reduxjs/toolkit`
  - create store
  - create appSlice
  - setup store provide in app.js
  - install `npm i react-router-dom`
  - get Youtube Video API URL from `https://developers.google.com/youtube/v3/docs/videos/list?apix=true`
  - get GOOGLE_API_KEY, create project at google console cloud, then enable YouTube Data API v3 for api request
  - change within API_URL regionCode=IN to fetch Indian region videos && add maxResults=50 in url to get 50 videos, default value is 5, can fetch 1-50
  - setup Routing in app.js
  - fetch youtube searchsuggestion from a API
  - Show Search result below search list
  - **Feature - implemented debouncing in search**
  - **Feature - implemented caching** search result by storing api res to redux store
  - n level nested comments with static data
