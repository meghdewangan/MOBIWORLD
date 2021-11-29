module.exports = {
	"globDirectory": "build/",
	"globPatterns": [
		"**/*.{png,json,ico,svg,js,html,css,jpg,fa}",
		
	],
	"swDest": "build/service-worker.js",
	"navigateFallback": '/index.html',
	
	"skipWaiting": true,
	"clientsClaim": true,
	"maximumFileSizeToCacheInBytes": 5242880,
	"globIgnores": [
		"service-worker.js",
		"firebase-messaging-sw.js",
		"manifest.json",
		"asset-manifest.json"
	],
	"runtimeCaching": [
	
		{
			"urlPattern": /\.(?:png|jpg|jpeg|svg)$/,
			"handler": 'cacheFirst',
			
			"options": {
				"cacheName": 'images',
				"expiration": {
					"maxEntries": 500,
					
				},
				
				
					// ...other Workbox build configuration options...
				  
			},
			
		},
		
		{
			"urlPattern": new RegExp('^https://fonts.(?:googleapis|gstatic).com/(.*)'),
			"handler": 'cacheFirst',
			"options": {
				"cacheName": 'fonts',
			},
		},
		{
			"urlPattern": new RegExp('^https://graph.facebook.com/(.*)'),
			"handler": 'cacheFirst',
			"options": {
				"cacheName": 'avatars',
			},
		},
		{
			"urlPattern": '/api/',
			"handler": 'networkFirst',
			"options": {
				// "networkTimeoutSeconds": 10,
				"cacheName": 'api-cache',
			},
			
		}
	],
};