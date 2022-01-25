const webpush = require('web-push');
// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey:
    'BHPErlK7GUmoYuyTEbnKopCCIRVnJb9ITlJADhJzcRVWBsb2wlCN2xMfN7jky6KEoNRm1EXgkevprXgwMNTXdtg',
  privateKey: 'a_Q0zLG93AYCR6Hez1jRerkVFcRqfRrbVwLlXpYv1JE'
};

webpush.setVapidDetails(
  'mailto:bhatvicky59@gmail.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
// const pushSubscription = {
//   endpoint: '.....',
//   keys: {
//     auth: '.....',
//     p256dh: '.....'
//   }
// };

//webpush.sendNotification(pushSubscription, 'Your Push Payload Text');
