const {default: mongoose} = require('mongoose');
const mongoos =required('mongoose');

const datsbaseuri = 'mongodb://localhost:27017/billtrackingapp';

mongoose.connect(databaseuri).then(() => {
    console.log("Connected to MongoDB successfully");
}).catch(() => {
    console.log("Connection to MongoDB failed");
});

const subscriptionSchema = new mongoos.Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    billingCycle: {type: String, required: true},
    nextBillingDate: {type: Date, required: true},
    timeStamp: true
});

const Subscription = mongoos.model('Subscription', subscriptionSchema);

exports = Subscription;

