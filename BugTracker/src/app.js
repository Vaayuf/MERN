const express= require('express');
const path = require('path');


require('./db/conn');
//const Bugtrack = require('./models/register');
const {Bugtrack} = require('./models/register');
const {Project} = require('./models/register');
//const{Bug} = require('./models/register');

const port = process.env.PORT ||3001;
const app = express();

const static_path = path.join(__dirname,"../public");
app.use(express.static(static_path));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

const views_path = path.join(__dirname,"../templates/views");
app.set("view engine", "hbs");
app.set("views",views_path);

app.get('/',(req,res)=>{
    res.render('login');
})

app.post('/home', async(req,res)=>{
    try{
        const uemail = req.body.email;
        const upass = req.body.pass;
        

        const usermail = await Bugtrack.findOne({email:uemail});
        
        if(usermail.pass === upass){
            const projectreport = await Project.find();
            //console.log(bugreport);
            res.render('home',{result:projectreport});
        }else{
            res.send("Invalid details");
        }
    }catch(e){
        res.send("Invalid details ");
    }
})


app.get('/admin', (req,res)=>{
    res.render('adminlogin');
})


app.get('/register', (req,res)=>{
    res.render('register');
})


app.post('/register', async(req,res)=>{
    try{
        const uemail = req.body.email;
        const upass = req.body.pass;
        

        //const usermail = await Bugtrack.findOne({email:uemail});
        
        if(upass === '123' && uemail === 'abhinav1@gmail.com'){
           
            res.render("register");
        }else{
            res.send("Invalid details");
        }
    }catch(e){
        res.send("Invalid details");
    }
})

app.post('/login', async(req,res)=>{
    console.log(req.body.email);
    console.log(req.body.pass);

    try{
            const UserData = new Bugtrack(req.body);

            await UserData.save();

            console.log(UserData);

            res.render('login');
        
    }catch(e){
        res.status(400).send(e);
    }
})


app.get('/home', async(req,res)=>{
    
    var mysort = {bugname:1};
    const projectreport = await Project.find().sort(mysort);
    console.log(projectreport);
    res.render('home',{result:projectreport});
})


app.get('/home/delete/:id', async(req,res) =>{
    try{
            const updateProject =  await Project.findByIdAndDelete(req.params.id);
            const projectreport = await Project.find();
            res.render('/home');
        
        }catch(e){
        res.send(e);
    }
})



app.post('/home/update/:id', async(req,res) =>{
    try{
            const updateProject = await Project.findByIdAndUpdate(req.params.id,req.body);
           
            res.redirect('/home');
    }catch(e){
        res.send(e);
    }
})


app.post('/projhome',async(req,res)=>{
    try{
        const ProjectData = new Project(req.body);

        await ProjectData.save();

        //console.log(UserData);
        const projectreport = await Project.find();
        res.redirect('/home');
    
    }catch(e){
        res.status(400).send(e);
    }
})

app.listen(port, ()=>{
    console.log('Express Fine.')
})