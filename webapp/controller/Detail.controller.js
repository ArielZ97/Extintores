sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "sap/m/MessageToast",
  "sap/ui/core/Fragment"
      
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
        
  
        },
//parte dos (SDK)
        getPage : function() {
          return this.byId("dynamicPageId");
        },
        onToggleFooter: function () {
          this.getPage().setShowFooter(!this.getPage().getShowFooter());
        },
        toggleAreaPriority: function () {
          var oTitle = this.getPage().getTitle(),
            sDefaultShrinkRatio = oTitle.getMetadata().getProperty("areaShrinkRatio").getDefaultValue(),
            sNewShrinkRatio = oTitle.getAreaShrinkRatio() === sDefaultShrinkRatio ? "1.6:1:1.6" : sDefaultShrinkRatio;
          oTitle.setAreaShrinkRatio(sNewShrinkRatio);
        },
        onPressOpenPopover: function (oEvent) {
          var oView = this.getView(),
            oSourceControl = oEvent.getSource();
    
          if (!this._pPopover) {
            this._pPopover = Fragment.load({
              id: oView.getId(),
              name: "sap.f.sample.DynamicPageFreeStyle.view.Card"
            }).then(function (oPopover) {
              oView.addDependent(oPopover);
              return oPopover;
            });
          }
    
          this._pPopover.then(function (oPopover) {
            oPopover.openBy(oSourceControl);
          });
        }
      });
    });