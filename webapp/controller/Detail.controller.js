sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "sap/m/MessageToast"
      
],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller,JSONModel,MessageToast) {
      "use strict";

      return Controller.extend("projectparte2.project1.controller.Detail", {
          onInit: function () {
              // Obtener los parámetros pasados a la vista
              
        const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter.getRoute("detail").attachMatched(this._onRouteMatched, this);
              
              
          // },
          // onItemPress: function(oEvent) {
          //   const oSelectedItem = oEvent.getSource();
          //   czonst oContext = oSelectedItem.getBindingContext();
          //   const sObjectName = oContext.getProperty("id");   
          // //Navegar a la página de detalle y pasar el contexto del ítem seleccionado
          // this.getOwnerComponent().getRouter().navTo("detail", {
          // sObjectName: sObjectName
          //  });
         },
         _onRouteMatched: function(oEvent) {
        
          const oArgs = oEvent.getParameter("arguments");
          const sObjectName = oArgs.ObjectName;
        
         const pData = this.getOwnerComponent().getModel().getProperty("/summary")
         //var sObjectName = oEvent.getParameter();
         //Buscar el ID que coincida con sObjectName que coincida ese numero por parametro 
         for (let i = 0; i < pData.length; i++) {
          if (pData[i].ObjectName === sObjectName) {
              sObjectName = pData[i].id;
              break; 
            }
          }
          this.getOwnerComponent().getModel().setProperty("/Detalle",sObjectName)
  
        }
      });
    });