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

        return Controller.extend("projectparte2.project1.controller.Main_View", {
            onInit: function () {

                const oModel = new JSONModel("/model/Table.json");
          this.getView().setModel(oModel);
                // Agregar evento hover a las celdas de la tabla para mostrar mensajes emergentes
          $(".hoverableTable td").hover(function() {
            var tooltip = $(this).attr('title');
            var timeout;
            if (tooltip) {
              timeout = setTimeout(function() {
                // Mostrar mensaje emergente con la descripción
                sap.m.MessageToast.show(tooltip);
              }, 1500); // 1.5 segundos
              $(this).data('timeout', timeout);
            }
            }, function() {
                // Limpiar el temporizador si el cursor ya no está sobre la celda
                clearTimeout($(this).data('timeout'));
              });
        

            },
            onItemPress: function(oEvent) {
              const oSelectedItem = oEvent.getSource();
              const oContext = oSelectedItem.getBindingContext();
              const sObjectName = oContext.getProperty("ObjectName");
    
              // Mostrar mensaje con el nombre del objeto maestro seleccionado
              MessageToast.show("Objeto Maestro: " + sObjectName);
    
              // Obtener la vista principal y el enrutador
              // const oView = this.getView();
              // const oRouter = sap.ui.core.UIComponent.getRouterFor(oView);
    
            // Navegar a la página de detalle y pasar el contexto del ítem seleccionado
            this.getOwnerComponent().getRouter().navTo("detail", {
      objectId: sObjectName
             });
           

            }
        });
    });
