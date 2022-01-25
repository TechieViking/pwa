self.addEventListener('push', () => {
  var options = {
    body: 'Welcome to JCP 3.0 ',
    icon: 'images/example.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '2'
    },
    actions: [
      {action: 'explore', title: 'Explore this new world'},
      {action: 'close', title: 'Close'}
    ]
  };
  console.log("Hello Bello")
  self.registration.showNotification('Hello JCP member', options);
});
