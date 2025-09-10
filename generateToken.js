const jwt = require('jsonwebtoken');
require('dotenv').config();

const adminPayload = {
  id: 1,
  name: 'Admin',
  role: 'admin'
};

const userPayload = {
  id: 2,
  name: 'Himanshu',
  role: 'user'
};

const storeOwnerPayload = {
  id: 3,
  name: 'StoreOwner',
  role: 'store_owner',
  storeId: 1  
};

const secret = process.env.JWT_SECRET || 'secretKey';
const options = { expiresIn: '1h' }; // 1 hour expiry

const adminToken = jwt.sign(adminPayload, secret, options);
const userToken = jwt.sign(userPayload, secret, options);
const storeOwnerToken = jwt.sign(storeOwnerPayload, secret, options);

console.log('Admin Token:\n', adminToken);
console.log('\nUser Token:\n', userToken);
console.log('\nStore Owner Token:\n', storeOwnerToken);
