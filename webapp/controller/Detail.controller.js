sap.ui.define([
    "sap/ui/core/mvc/Controller"
  ], function(Controller) {
    "use strict";
  
    return Controller.extend("appviewcatalog.controller.Detail", {
      onInit: function() {
        // Obtener los parámetros pasados a la vista
        const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter.getRoute("Detail").attachMatched(this._onRouteMatched, this);
      },
  
      _onRouteMatched: function(oEvent) {
        const oArgs = oEvent.getParameter("arguments");
        const sObjectName = oArgs.objectName;
  
        // Obtener el modelo de la vista y establecer el contexto para mostrar los detalles
        const oView = this.getView();
        const oModel = oView.getModel();
        const oDetailModel = new sap.ui.model.json.JSONModel();
        const aSummary = oModel.getProperty("/summary");
        const oDetailData = aSummary.find(function(item) {
          return item.ObjectName === sObjectName;
        });
        oDetailModel.setData(oDetailData);
        oView.setModel(oDetailModel, "detail");
      }
    });
  });