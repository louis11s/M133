import { Application, Router, send } from"https://deno.land/x/oak@v6.3.1/mod.ts"; 
constapp = newApplication(); 
constrouter = newRouter(); 
router  
.get("/myEndpoint", (context) => { 
    returnsend(context, "some.html")   
}); 
app.use(router.routes()); 
app.listen({ port:8000 }); 