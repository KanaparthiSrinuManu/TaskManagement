module.exports = app => {
  const taskmanagement = require("../controllers/Taskmanagement.controller.js");
  const multer = require('multer');
  const express=require('express');
  

  app.post("/taskmanagement/createTask", taskmanagement.create);

  app.get("/taskmanagement/findall", taskmanagement.findAll);
  
  app.post("/taskmanagement/excelfiletodb", taskmanagement.excelfiletodb);

  app.post("/taskmanagement/textfiletodb", taskmanagement.textfiletodb);

  app.get("/taskmanagemet/count", taskmanagement.countall);
  
  app.get("/taskmanagementfindbyid/:customerId", taskmanagement.findOne);

  app.put("/taskmanagenetupdatebyid/:customerId", taskmanagement.update);

  app.delete("/taskmanagementdeletebyid/:customerId", taskmanagement.delete);

  app.delete("/taskmanagement/deleteall", taskmanagement.deleteAll);
    
}  
  
