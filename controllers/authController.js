const Joi =  require('joi');
const bcrypt = require('bcrypt');

const {user, validate} = requiere('../models/user');

const login = async(req, res, next)=>{
    const {error} = validate(req.body);
    if(error) return res.status(422).send(error.details[0].message);
    const user = await User.findOne({email:req.body.email}, 'email').exec();
    if(!user) return res.status(404).send('Invalid email or password');
    const validPassword = await bcrypt.compareSync(req.body.password,user.password);
    if(!validatePassword) return res.status(404).send('Invalid email or password');

    const token = user.generateAuthToken();
    res.send(token);

}

const validate = () =>{
    const schema = {
        email: Joi.Stirng().min(5).max(255).required().email(),
        password: Joi.Stirng().min(5).max(255).required()
    }
    Joi.validate(req, schema);

}

module.exports = {
    login
}