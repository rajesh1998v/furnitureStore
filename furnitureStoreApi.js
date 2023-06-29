let express = require("express") ;
let passport = require("passport");
let jwt = require("jsonwebtoken");
let JWTStrategy = require("passport-jwt").Strategy;
let ExtractJWT = require("passport-jwt").ExtractJwt;

var app = express();
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, , authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,OPTIONS");
  next();
});

var port = process.env.PORT || 2410
app.listen(port, () => console.log(`Node app listening on port ${port}!`));

app.use(passport.initialize());
const parama = {
    jwtFromRequest:ExtractJWT.fromAuthHeaderAsBearerToken(),secretOrKey:"jwtsecret23647832"
};
const jwtExpirySeconds = 300;

const {products,users} = require("./furnitureData");

let strategyAll = new JWTStrategy(parama,function(token,done){
  console.log("In JWTStrategy-All", token);
  let user1 = users.find((u)=>u.id==token.id);
  console.log("user",user1);
  if(!user1)
  return done(null, false,{message: "Incorrect username or password"});
  else return done(null,user1);
});

let strategyAdmin = new JWTStrategy(parama,function(token,done){
  console.log("In JWTStrategy-All", token);
  let user1 = users.find((u)=>u.id==token.id);
  console.log("user",user1);
  if(!user1)
  return done(null, false,{message: "Incorrect username or password"});
  else if(user1.role!=="admin")
  return done(null, false,{message: "You do not have admin"});
  else return done(null,user1);
});

passport.use("roleAll",strategyAll);
passport.use("roleAdmin",strategyAdmin);

app.post("/login",function(req,res){
  let {email,password} = req.body;
  let user = users.find((u)=>u.email==email && u.password===password);
  console.log(user);
  if(user){
      let payload = {email:user.email,role:user.role};
      let token = jwt.sign(payload,parama.secretOrKey,{
          algorithm: "HS256",
          expiresIn:jwtExpirySeconds,
      });
      res.send(payload);
  }else res.sendStatus(401);
});


app.get("/products",function(req, res){ 
  try{
      res.send(products);
  }catch (error){
      if (error.response){
          let { status, statusText } = error.response;
          console.log(status, statusText) ;
          res.status(status).send(statusText);
      }else res.status(484).send(error);
  }
})

app.get("/products/:prodCode",function(req, res){ 
  let prodCode = req.params.prodCode;
  try{
      let prod = products.find(p1=>p1.prodCode==prodCode);
      
      res.send(prod);
  }catch (error){
      if (error.response){
          let { status, statusText } = error.response;
          console.log(status, statusText) ;
          res.status(status).send(statusText);
      }else res.status(404).send(error);
  }
})
app.post("/newProduct",function(req, res){ 
  let body = req.body;
  try{
      products.push(body);     
      res.send(body);
  }catch (error){
      if (error.response){
          let { status, statusText } = error.response;
          console.log(status, statusText) ;
          res.status(status).send(statusText);
      }else res.status(404).send(error);
  }
})

app.put("/products/:prodCode",function(req, res){ 
  let prodCode = req.params.prodCode;
  let body = req.body;
  try{
    let index = products.findIndex(p1=>p1.prodCode==prodCode);
    if(index>=0){
      let updateProd = {...products[index],...body}
      products[index] = updateProd;
      res.send(updateProd);
    }   
    
  }catch (error){
      if (error.response){
          let { status, statusText } = error.response;
          console.log(status, statusText) ;
          res.status(status).send(statusText);
      }else res.status(404).send(error);
  }
})

app.delete("/products/:prodCode",function(req, res){ 
  let prodCode = req.params.prodCode;
  try{
    let index = products.findIndex(p1=>p1.prodCode==prodCode);
    if(index>=0){
      let deleteProd = products.splice(index,1);
      res.send(deleteProd);
    }   
    
  }catch (error){
      if (error.response){
          let { status, statusText } = error.response;
          console.log(status, statusText) ;
          res.status(status).send(statusText);
      }else res.status(404).send(error);
  }
})

