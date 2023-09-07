const User = require("../Models/UserModel");
const Guest = require("../Models/GuestModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

//Signup Handler
module.exports.Signup = async (req, res, next) => {
    try {
        const { email, password, username, createdAt } = req.body;
        const existingUser = await User.findOne({email});
        if (existingUser) {
            return res.json({message: "User already exists"});
        }
        const user = await User.create({ email, password, username, createdAt });
        const token = createSecretToken(user._id);
        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: false,
        });
        res
            .status(201)
            .json({ message: "User signed in successfully", success: true, user });
            console.log(`${username} has signed in Successfully`);
        next();    
    } catch(error) {
        console.error(error);
    }
}

//Login Handler
module.exports.Login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.json({message: 'All fields are required'});
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({message: 'Email is incorrect' })
        }
        const auth = await bcrypt.compare(password, user.password)
        if(!auth) {
            return res.json({message: 'Password is incorrect' })
        }
        const token = createSecretToken(user._id);
        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: false,
      });
      res.status(201).json({ message: "User logged in successfully", success: true });
      console.log(`${username} has logged in Successfully`);
      next();
    } catch(err) {
        console.error(err);
    }
}

// Guest mode
module.exports.GuestMode = async (req, res, next) => {
    try {
        const guest = new Guest();
        const token = createSecretToken(guest._id);
        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: false,
        });
        res
            .status(201)
            .json({ message: "Guest signed in successfully", success: true, guest });
        console.log("Succcessful Guest Sign In");
        next();
    } catch(err) {
        console.error(err);
    }
}
