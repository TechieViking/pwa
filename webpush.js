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

const pushSubscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/eGtwmpC_fHs:APA91bHGcQBnstx1Atr0qCp7SbSaP8KBQisci4YJOO4oCwS_-Z73xxroXp79Kejq2sokiFqhhqdsL5ZBJH6ytfVIBwd16C3-rA-c8eHPR9UCqiiDxgaJKM-HTmaNfAmNg-BNdb87ee-w","expirationTime":null,"keys":{"p256dh":"BMLgnNOKO6NM-DUEaqxvazqwXWPGPXU9HxAAi9PKCjJGDlIns4Er5Itae2qVibOQ3oG3Rhfz2SoK5DGUXstGJiA","auth":"8y-J6jSst0wAWAGyD6zhtQ"}}
webpush.sendNotification(pushSubscription, 'Your Push Payload Text');
