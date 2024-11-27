const express = require("express");
const bodyParser = require("body-parser");
const { Sequelize, DataTypes, INTEGER} = require("sequelize");

const app = express()
app.use(bodyParser.json());

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./test.db",
});

const User = sequelize.define("User", {
    id: {
        type:INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: String,
        allowNull: false,
    },
    email: {
        type: String,
        allowNull: false,
        unique: true,
    },
    age: {
        type: INTEGER,
        allowNull: false,
    },
});

sequelize.sync();

// 회원 등록
app.post("/users/:user_id", async(req,res) => {
    const userId = parseInt(req.params.user_id);
    const {username, email, age} = req.body;

    try {
        const existingUser = await User.findByPk(userId)
        if(exjistingUser) {
            return res.status(400).json({error: "User ID already exists"});
        }

        const newUser = await User.create({id:userId, username, email, age});
        res.status(201).json({message: "회원가입을 환영합니다", user: newUser });
    
    } catch(error) {
        res.status(500).json({error:"Fail"})
    }
});

// 회원 조회
app.get("/users/:user_id", async(req, res)=> {
    const userId = parseInt(req.params.user_id);

    try{
        const user = await User.findByPk(userId);
        if(!user){
            res.status(404).json({error:"user not found"})
        }
        res.status(200).json({user});
    }catch (error){
        res.status(500).json({"에러발생"})
    }
});

app.put("/users/:user_id", async (req,res) => {
    const user_id = parseInt(req.params.user_id);
    const {username, email, age} = req.body;

    try { 
        const user = await User.findByPk(userId);
        if(!user){
            return res.status(404).json({error:"user not found"});
        }

        user.username = username;
        user.email = email;
        user.age= age;
        await user.save();

        res.status(200).json({message: "회원 정보 수정", user})
    } catch(error){
        res.status(500).json({error:"Fail"})
    }
})

app.listen(3000, () => {
    console.log("Server is running")
})