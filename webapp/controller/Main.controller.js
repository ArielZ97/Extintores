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

        return Controller.extend("projectparte2.project1.controller.Main", {
            onInit: function () {
                const oModel = new JSONModel("/model/Table.json");
                this.getOwnerComponent().setModel(oModel);
                
                
            },
            onItemPress: function(oEvent) {
              const oSelectedItem = oEvent.getSource();
              const oContext = oSelectedItem.getBindingContext();
              const {ObjectName} = oContext.getObject()
             
            // Navegar a la página de detalle y pasar el nombre del objeto seleccionado como parámetro
            this.getOwnerComponent().getRouter().navTo("detail", {
              objectName: ObjectName
          });
            // Mostrar mensaje con el nombre del objeto maestro seleccionado
            MessageToast.show("Objeto Maestro: " + ObjectName);

            // Obtener la vista principal y el enrutador
          //   const oView = this.getView();
          //   const oRouter = sap.ui.core.UIComponent.getRouterFor(oView);

        
              
          //   // // Navegar a la página de detalle y pasar el contexto del ítem seleccionado
          //   // this.getOwnerComponent().getRouter().navTo("detail", {
          //   //     sObjectName: sObjectName
          //    });
            }
        
        
          });
        }
      );