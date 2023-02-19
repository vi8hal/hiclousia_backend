const express = require('express');



const SignIn = async (req, res) => {
    const { name,phone ,email, password } = req.body;

    const RegisteredUser = await User.findOne({ email });

      

}
