const path = require('path')
const pyshell =  require('python-shell').PythonShell;


function handleClick(val){
  console.log(val);
    const options = {
        scriptPath : path.join(__dirname,'../engine'),
        pythonOptions:['-u'],
        args:[val]
      }

    pyshell.run('client.py',options,function(err,results){
        if(err) throw err;
        //alert(results);

        document.getElementById("p").innerHTML = results;
      })
}
 
