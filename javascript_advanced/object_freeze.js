const adminUser = {
  username: "admin",
  email: "admin@example.com",
  role: "superadmin",
};

Object.freeze(adminUser);

adminUser.role = "user";
adminUser.password = "123456";
delete adminUser.email;

console.log(adminUser);

const user = {
  username: "johndoe",
  email: "john.doe@example.com",
  password: "oldpassword",
};

Object.seal(user); // Attempt to modify the object

user.password = "newpassword"; // Allowed
user.age = 30; // adding new property is not allowed
delete user.email; // deleting property is not allowed

console.log(user);

const gadget = {
  name: "iPhone",
  price: 12000,
  color: "black",
};

delete gadget.price;

console.log(gadget);
