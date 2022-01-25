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

const pushSubscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/fcQskVSf9B8:APA91bHT-UsrdUYHcK5QDu9hcHETvTHYavt_V4H6R-13DYfzUtQxLGtjcaBunl96hJ5WcbLfqBSrGkYTIaKk5d4rksoDoYySFIA1U5e9j5z0nwOGdVZ---9ZMkRgHIATNyo8zjvotqvu","expirationTime":null,"keys":{"p256dh":"BD4OUpGrCX2ybUyIvMTQ6VVCxp6DdBHVW8DH09d23aopwmGXeMtDpbcQ7XxFOfPH6qfyq80JTXNJq02Je6ndf_g","auth":"IKERVkudX4PsoXZ-T3t8Mw"}}
webpush.sendNotification(pushSubscription, 'Your Push Payload Text');
