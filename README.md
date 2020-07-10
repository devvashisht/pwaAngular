# pwaAngular

**PWA**

- feel like native app (offline,camera,location, data synchroniation in the backgroud)
  - load fast & offline functionality
  - responde quickly to user action
  - push notification

**Why PWA instead native app**

- 87% uses native app : push notification , home screen icon, native device feature, offline capabilite

- **LightHouse** PWA performance report

- **core feature**
  - `service worker`(caching/offline, push notification)
  - `application manifest` (installable on home screen)
  - `Responsive Design`
  - `geolocation api, media api`

**PROJECT**

- `WEB APP MANIFEST` - makes web app installable, icon on homescreen, inscrease user engagement.
- `Create Web app manifest` : create `manifest.json` in root folder , parallel to index.html.
- <link rel="manifest" href="/manifest.josn"> on every page sent back to server , only one in case of SPA

- `property` : name, short_name,start_url<index.html>, scope<.part of pwa>, display<standalone(no url)>, background_color,theme_color,description,dir<ltr(direction)>,lang<en-US>,orientaton<portrait-primary>,icons<on homescreen[use best as per screen]>, related_application<native app>

- `chrome debug tool` : under application/manifest (all property will be which mentioned in manifest.json)
- Install android studio
- page server via `https`

**SERVICE WORKER**

- seperate single thread, decoupled from html page, run in background process, Listen to specfic events and react
- events SW listen: FETCH, Push Notification(send from server), Notification interaction, Background Sync, Service worker lifeCycle
- `Register SW` : in app.js we register sw.js, browser install SW(install Event), Activation(Activate Event) : SW now controls all pages of the scope

**R*EGISTER SW***

- Scope is where SW js file resides ieally root folder

```javascript
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").then(function () {
    console.log("Service Worker REgister");
  });
}
```

**_Event SW_**

```javaScript
self.addEventListener("install", function (event) {
  console.log("[SW} installing SW..", event);
});
self.addEventListener("activate", function (event) {
  console.log("[SW} activating SW..", event);
  self.clientInformation.claim();
});
```

- connecting desktop chrome to remote device chrome by enabling deveoper option in remote device

**CACHING**

- `cache api` : browser cache own its own
- key <request>: value<respone>
- cache can be accessed via SW, and also page javascript
- `static content & dynamic content`
- pre-caching app shell
